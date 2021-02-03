const Discord = require('discord.js');
const { query } = require("../handlers/DatabaseHandler");
const config = require("../config.json")
const prefix = config.bot.prefix;
const icon = config.bot.server_icon_link;
const name = config.bot.guild_name;
const link = config.bot.server_link;

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + "recent-v")) {
            var msg = message.content;
            msg = msg.split(prefix + "recent-v ");
            msg = msg[1];
            try {
                var user = await query("SELECT * FROM users WHERE username = ?", msg);
                var flag = await query("SELECT * FROM users_stats WHERE username = ?", msg);
                var recentScore = await query("SELECT * FROM scores INNER JOIN beatmaps ON scores.beatmap_md5 = beatmaps.beatmap_md5 WHERE userid = ? AND completed = 3 ORDER BY time DESC;", user[0].id)
                const embed = new Discord.RichEmbed()
                    .setAuthor(user[0].username, 'https://osu.gatari.pw/static/images/flags/' + flag[0].country + '.png', 'https://' + link + '/u/' + user[0].id + '?mode=0')
                    .setTitle(recentScore[0].song_name)
                    .setURL("https://osu.ppy.sh/beatmapsets/" + recentScore[0].beatmapset_id)
                    .setColor('#00ffb3')
                    .setImage("https://assets.ppy.sh/beatmaps/" + recentScore[0].beatmapset_id + "/covers/cover.jpg")
                    .addField("Score Info", "▸ PP: **" + Math.round(recentScore[0].pp * 100) / 100 + "**\n▸ Score: **" + recentScore[0].score + "**\n▸ Accuracy: **" + Math.round(recentScore[0].accuracy* 100) / 100 + "%**")
                    .setThumbnail('https://a.'+ link + '/' + user[0].id)
                    .setTimestamp()
                    .setFooter('osu!' + name, icon);
                message.channel.send(embed);
            } catch (err) {
                console.log(err)
                message.channel.send("User Not Found.");
            }
        }
    })
}