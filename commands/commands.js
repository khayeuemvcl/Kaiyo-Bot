const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;
const name = config.bot.bot_nickname

module.exports = function (client) {
    client.on("message", async message => {
if (message.content.startsWith(prefix + "commands")) {
    var msg = message.content;
    msg = msg.split(prefix + "commands ");
    msg = msg[1];
        const embed = new Discord.RichEmbed()
            .setTitle(name + " Command List")
            .setDescription("Prefix: " + "**" + prefix + "**")
            .setColor('#00ffb3')
            .addField("Bonk", "Bonk someone!")
            .addField("Avatar", "View your or someone else's avatar!")
            .addField("Bobux", "2,000 bobux.")
            .addField(":flushed: Kiss", "Kiss someone! hehe...")
            .addField("Hug", "Hug someone till they pass out!!!")
            .addField("Pat", "Give someone a cute headpat~!")
            .addField("Cuddle", "Show someone some affection owo!")
            .addField("Purge", "Delete up to 100 messages.")
            .addField("Blush", "awee... looks like someone is blushing huh?")
            .addField("8Ball", "Find out the answers to your questions.")
            .addField("Recent-v", "View someone's recent vanilla score!")
            .addField("Recent-r", "View someone's recent relax score!")
            .addField("Top-v", "View someone's top vanilla score!")
            .addField("Top-r", "View someone's top relax score!")
            .addField("Stats-v", "View someone's vanilla stats!")
            .addField("Stats-r", "View someone's relax stats!")
            .addField("Ping", "Test latency to the API.")
            message.channel.send(embed);
        }
    })
}