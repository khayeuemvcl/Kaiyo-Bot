const Discord = require('discord.js');
const config = require("../config.json");

module.exports = function (client) {
    client.on("message", async message => {
      if (message.channel.id === config.bot.player_reports)
        if (!message.content.startsWith("Player's username:")) {
          message.delete();
          message.author.send('Please stick to the format otherwise we won\'t recieve your report!')
        } else {

          const ReportEmbed = new Discord.RichEmbed()
          .setColor(hex)
          .setTitle(`New Report from ${message.author.tag}`)
          .addField("Report Information:", "```"+message.content+"```")
          .setFooter(config.bot.guild_name, ":heart:")
          client.channels.get().send(ReportEmbed);
          message.delete();

          const InfoToAuthorEmbed = new Discord.RichEmbed()
          .setColor('#FF4949')
          .setTitle('Your report is under review!')
          .addField('Report Information:', 'Thanks for reporting, we have recieved the report and will review it shortly!')
          .setFooter(config.bot.guild_name, ":heart:")
          message.author.send(InfoToAuthorEmbed)
        }
    });
}