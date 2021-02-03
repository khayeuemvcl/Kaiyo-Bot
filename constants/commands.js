const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = function (client) {
// Commands
require("../config.json")
require("../commands/rules")(client)
require("../commands/discordRules")(client)
require("../commands/connectionGuide")(client)
require("../commands/bonk")(client)
require("../commands/avatarMention")(client)
require("../commands/ban")(client)
require("../commands/kick")(client)
require("../commands/bobux")(client)
require("../commands/kiss")(client)
require("../commands/hug")(client)
require("../commands/pat")(client)
require("../commands/cuddle")(client)
require("../commands/blush")(client)
require("../commands/purge")(client)
require("../commands/verify")(client)
require("../commands/verifyEmbed")(client)
require("../commands/commands")(client)
require("../commands/reportPlayer")(client)
require("../commands/8ball")(client)
require("../commands/getUserRecentScore")(client)
require("../commands/getUserRecentScoreRelax")(client)
require("../commands/getUserStats")(client)
require("../commands/getUserStatsRelax")(client)
require("../commands/getUserTopScore")(client)
require("../commands/getUserTopScoreRelax")(client)
require("../commands/ping")(client)

// Handlers
require("../handlers/playerReportingListener")(client)
}