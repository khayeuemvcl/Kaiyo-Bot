const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;
const botRoleID = config.bot.id_role_bot;

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + "report")) {
			if(!message.member.roles.has(botRoleID)) return message.channel.send("You don't have access to this command!")
				
			try {
            const embed = new Discord.RichEmbed()
            .setTitle("Welcome To the Player Reporting Channel")
            .addField("Information", "Please stick to the format below when reporting and **do not** tag admins here.")
            .addField("Format:", "```\nPlayer's username:\nLink to Player's Profile:\nReason for Reporting Player (cheating, multi-accounting):\nEvidence:```")
            message.channel.send(embed)
			}catch (e) {
				return message.channel.send("A problem has occured, please contact a staff member!")
			}
        }
    })
}