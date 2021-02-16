const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;
const { ppSizes, messages } = require("../constants/const")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + 'pp')) {
            var penis = ppSizes[Math.round(Math.random() * (ppSizes.length - 1))];
            try {
                const embed = new Discord.RichEmbed()
                .setTitle(`PEEPEE SIZE MACHINE`)
                .addField(`${message.author.username}'s pp size is:`, `8${penis}D`)
                .setColor('#00ffb3')
                message.channel.send({embed})
            } catch (e) {
                return message.channel.send("pp command broke")
            }
        }
    })
}
