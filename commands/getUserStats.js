const Discord = require('discord.js');
const { query } = require("../handlers/DatabaseHandler");
const config = require("../config.json")
const prefix = config.bot.prefix;
const icon = config.bot.server_icon_link;
const name = config.bot.guild_name;
const link = config.bot.server_link;

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + "stats-v")) {
            var msg = message.content;
            msg = msg.split(prefix + "stats-v ");
            msg = msg[1];
            try {
                var user = await query("SELECT * FROM users WHERE username = ?", msg);
                var userStats = await query("SELECT * FROM users_stats WHERE username = ?", msg);
                var flag = await query("SELECT * FROM users_stats WHERE username = ?", msg);
                const embed = new Discord.RichEmbed()
                .setAuthor(user[0].username, 'https://osu.gatari.pw/static/images/flags/' + flag[0].country + '.png', 'https://' + link + '/u/' + user[0].id + '?mode=0')
                .setColor('#00ffb3')
                .setImage("https://" + link + "/static/profbackgrounds/" + user[0].id + ".jpg")
                .addField(user[0].username + "\'s vanilla stats", "osu!STD pp: **" + userStats[0].pp_std + "**\nosu!Taiko pp: **" + userStats[0].pp_taiko + "**\nosu!Mania pp: **" + userStats[0].pp_mania + "**\nosu!CTB pp: **" + userStats[0].pp_ctb + "**")
                .setThumbnail('https://a.'+ link + '/' + user[0].id)
                .setTimestamp()
                .setFooter('osu!' + name, icon);
                    message.channel.send(embed)
            } catch (err) {
                console.log(err)
                message.channel.send("User Not Found.");
            }
        }
    })
}