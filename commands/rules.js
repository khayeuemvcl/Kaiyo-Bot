const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;
const name = config.bot.guild_name;

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + "9946591310212950240494")) {
            var msg = message.content;
            msg = msg.split(prefix + "9946591310212950240494");
            msg = msg[1];
                const embed = new Discord.RichEmbed()
                    .setTitle("~ " + name + " osu! Guidelines ~" + msg)
                    .setColor('#00ffb3')
                    .addField("🌸 | General Rules", "- Any violation of the rules in this section will result in a restriction or ban, temporary or permanent, depending on the gravity.\n- Cheating and any other form of hacking are strictly prohibited.\n- Edited clients, with the exception for the next rule, are not allowed.\n- Client patching (instead of host redirection) is allowed but we won’t help you if you break the client.\n- Shared or boosted accounts are not allowed.\n- Don’t try to exploit the server or other akerino. If you intend to report a vulnerability, do so responsibly and by contacting the developers.\n- Use an appropriate username (no offensive or stolen names, e.g. you can’t choose to be Cookiezi, WubWoofWolf, Rafis, _index, etc…)\n- Don’t abuse our patience.")
                    .addField("🌸 | Chat Rules", "- Avoid any kind of insults to people. Try to be friendly. If not, try to discuss in a constructive manner.\n- Racial slurs are absolutely not allowed. Terms like “retarded”, and “autistic” are fine on objects, definitely not on people\n- Don’t spam or flood, unless you’re occasionally sending a link to e.g. Twitch when you’re streaming Ripple when no discussion is going on.\n- Any kind of illegal content, warez, or viruses is strictly prohibited. (This includes posting parts of source code that you have no legal right to share.)\n- No NSFW or gore content.\n- Unless it’s a language channel, please speak English.\n- Remember also to follow the General rules above!")
                    .addField("🌸 | Cheating/Multiaccount Policy", "- Cheating and multi accounting is strictly prohibited.\n- We do care about what you did on other servers. However, we will not restrict/ban you for something you have done on other servers unless we have reason to believe you have been cheating on " + name)
                    message.channel.send(embed);
        }
    })
}