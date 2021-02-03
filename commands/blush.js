const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;
const { blushGifs } = require("../constants/const")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + "blush")) {
        var gif = blushGifs[Math.round(Math.random() * (blushGifs.length - 1))];
			try {
            const embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username} is blushing... cute!!`)
            .setColor('#00ffb3')
            .setImage(gif)
            message.channel.send(embed)
			}catch (e) {
				return message.channel.send("a problem has occured, please contact a staff member!")
			}
        }
    })
}