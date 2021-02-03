const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + 'bobux')) {
            let args = message.content.slice(prefix.length).trim().split(' ');

            try {
                const embed = new Discord.RichEmbed()
                .setTitle(`2,000 Bobux`)
                .setImage('https://cdn.discordapp.com/attachments/786129390529675285/797333592690655252/Untitled688.png')
                .setColor('#00ffb3')
                message.channel.send({embed})
            } catch (e) {
                return message.channel.send("a problem has occured, please contact a staff member!")
            }

        }
    })
}