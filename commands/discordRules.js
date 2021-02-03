const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;
const guildName = config.bot.guild_name;
const link = config.bot.server_icon_link;


module.exports = function (client) {
    client.on("message", async message => {
if (message.content.startsWith(prefix + "9946591310212950240495")) {
    var msg = message.content;
    msg = msg.split(prefix + "9946591310212950240495");
    msg = msg[1];
        const embed = new Discord.RichEmbed()
            .setTitle("~ "+ guildName + " Discord Guidelines ~" + msg)
            .setColor('#00ffb3')
            .addField("🌸 | Please follow Discord's ToS (terms of service).", "It is a necessary need to follow their guidelines to keep this server alive. (Please read Discord's ToS here. https://discord.com/terms)")
            .addField("🌸 | Do not say any racial slurs in this server", "We try to make this server a safe environment for everyone. **Any racial slurs that are said will be banned.**")
            .addField("🌸 | Don't spam", "Spamming the channels will result in a kick, rejoining back and spamming again for the second time will result in a permanent ban.")
            .addField("🌸 | No forms of Homophobia/Transphobia", "All homophobic/transphobic remarks will be met with an instant ban, we do not tolerate that behaviour.")
            .addField("🌸 | NSFW Photos", "Any NSFW photos or videos will result in a ban. No lewd photos are allowed here.")
            .addField("🌸 | Self Promotion", "Self-promotion will be met with a ban aswell. We don't tolerate you sending invites for your Discord server in ours. DM'ing people with invites will also result in a ban.")
            .addField("🌸 | ___If certain rules are broken, depending on the situation, you may not be punished accordingly.___", "⠀")
            .addField('🌸 | Use common sense.', '⠀')
            .addField('***Thank you and we hope you enjoy your stay here!***', '⠀')
            .setImage(link)
            message.channel.send(embed);
        }
    })
}