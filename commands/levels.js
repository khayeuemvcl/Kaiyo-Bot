const Discord = require('discord.js');
const config = require("../config.json")
const jsonfile = require('jsonfile');
const random = require('random');
const fs = require('fs');
const prefix = config.bot.prefix;

var stats = {};
if (fs.existsSync('../stats.json')) {
    stats = jsonfile.readFileSync('stats.json');
}

module.exports = function (client) {
    client.on("message", async message => {
        if (message.author.id == client.user.id)
        return;
    
        if (message.guild.id in stats === false) {
            stats[message.guild.id] = {};
        }
    
        const guildstats = stats[message.guild.id];
        if (message.author.id in guildstats === false) {
            guildstats[message.author.id] = {
                xp: 0,
                level: 0,
                last_message: 0
            };
        }
    
        const userStats = guildstats[message.author.id];
        if (Date.now() - userStats.last_message > 60000) {
        userStats.xp += random.int(15, 25);
        userStats.last_message = Date.now();
    

    
        jsonfile.writeFileSync('stats.json', stats);
        }
        
        const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level +100;
        if (userStats.xp >= xpToNextLevel) {
            userStats.level++;
            userStats.xp = userStats.xp - xpToNextLevel;
            client.channels.cache.get('787025260536397846').send('<@' + message.author.id + '> has reached level ' + userStats.level);
        }
    });
}
