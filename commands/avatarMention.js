const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + 'avatar')) {
            let args = message.content.slice(prefix.length).trim().split(' ');
            let mention = message.mentions.users.first();
            args[0] = mention
            if (!args[0]) return message.channel.send("Please ping the user you want to see the avatar of...");

            try {
                const embed = new Discord.RichEmbed()
                .setAuthor(`${mention.username}`, `${mention.avatarURL}`)
                .setImage(mention.avatarURL)
                .setColor('#00ffb3')
                message.channel.send({embed})
            } catch (e) {
                return message.channel.send("a problem has occured, please contact a staff member!")
            }

        }
    })
}