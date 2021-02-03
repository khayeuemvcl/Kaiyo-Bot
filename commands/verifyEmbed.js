const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;
const ownerID = config.bot.owner_id;

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + "verifembed")) {
			if (message.member.id != ownerID) return message.channel.send("You don't have access to this command!")
      message.delete();

			try {
            const embed = new Discord.RichEmbed()
            .setTitle("Welcome to the Verify Channel")
            .addField("How to get verified?", "Simple. Just type " + "**"+ prefix + "verify" + "**" + " and you're good to go!")
            .setColor('#00ffb3')
            message.channel.send(embed)
			}catch (e) {
				return message.channel.send("Something went wrong check code :/")
			}
        }
    })
}