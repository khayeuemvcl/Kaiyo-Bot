let Discord = require('discord.js');
let config = require("../config.json")
let prefix = config.bot.prefix;
let { ppSizes } = require("../constants/const")
let penis = ppSizes[Math.round(Math.random() * (ppSizes.length - 1))];

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content === prefix + 'pp') {
            var embed = new Discord.RichEmbed()
            .setTitle('PEEPEE SIZE MACHINE')
            .addField(message.author.username + "'s pp size is:", "8" + penis + "D")
            .setColor('#00ffb3')
            message.channel.send(embed)
        }
    })
}
