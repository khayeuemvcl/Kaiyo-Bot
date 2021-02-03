const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;
const { responses } = require("../constants/const")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + "8ball")) {
         if (!message.content.endsWith("?")) return message.channel.send("Please ask a question.")
        var response = responses[Math.round(Math.random() * (responses.length - 1))];
			try {
            const embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username} asked: ` + message.content.slice(7))
            .setColor('#00ffb3')
            .setDescription(":8ball: | " + response)
            message.channel.send(embed)
			}catch (e) {
				return message.channel.send("a problem has occured, please contact a staff member!")
			}
        }
    })
}