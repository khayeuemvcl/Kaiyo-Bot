const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + "ping")) {
			try {
            const embed = new Discord.RichEmbed()
            .setTitle('Bot Ping')
            .setDescription(`Success! Latency is ${Date.now() - message.createdTimestamp}ms.`)
            .setColor('#00ffb3')
            message.channel.send(embed)
			}catch (e) {
				return message.channel.send("a problem has occured, please contact a staff member!")
			}
        }
    })
}