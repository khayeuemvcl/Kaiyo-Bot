const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + 'bonk')) {
            let args = message.content.slice(prefix.length).trim().split(' ');
            let mention = message.mentions.users.first();
            args[0] = mention
            if (!args[0]) return message.channel.send("um... why is there no one you're trying to bonk..?");
            if (mention === client.user) return message.channel.send("sorry, unfortunately you can't bonk me!")
            if (mention === message.author) return message.channel.send("you cannot bonk yourself dummy!")

            try {
                const embed = new Discord.RichEmbed()
                .setTitle(`${message.author.username} bonked ${mention.username}`)
                .setImage('https://cdn.discordapp.com/attachments/637762361503252493/708479358410424350/doggo.gif')
                .setColor('#00ffb3')
                message.channel.send({embed})
            } catch (e) {
                return message.channel.send("a problem has occured, please contact a staff member!")
            }

        }
    })
}