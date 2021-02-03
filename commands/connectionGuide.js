const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;
const name = config.bot.guild_name;

module.exports = function (client) {
    client.on("message", async message => {
if (message.content.startsWith(prefix + "9946591310212950240496")) {
    var msg = message.content;
    msg = msg.split(prefix + "9946591310212950240496");
    msg = msg[1];
        const embed = new Discord.RichEmbed()
            .setTitle("~ How to connect to " + name + " ~" + msg)
            .setColor('#00ffb3')
            .setDescription('**SWITCHER/PATCHER IS NOT SUPPORTED**')
            .addField("Step 1", "Download the client from the website (https://masayuki.cf/static/masayuki.exe")
            .addField("Step 2", "Drag & Drop masayuki.exe into your osu! directory.")
            .addField("Step 3", "Open masayuki.exe and login with the account credentials that you created on the website.")
            message.channel.send(embed);
        }
    })
}