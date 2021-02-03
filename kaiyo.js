require('events').EventEmitter.prototype._maxListeners = 100;

const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client({autoReconnect: true})
const token = config.bot.token;
const guildID = config.bot.guild_id;

require("./constants/commands")(client)

client.on('ready', () => {
    const guild = client.guilds.get(guildID);
    console.clear();
    console.log('\n\x1b[36m%s\x1b[0m', ` ██╗  ██╗ █████╗ ██╗██╗   ██╗ ██████╗`);
    console.log('\x1b[34m%s\x1b[0m', ` ██║ ██╔╝██╔══██╗██║╚██╗ ██╔╝██╔═══██╗`);
    console.log('\x1b[36m%s\x1b[0m', ` █████╔╝ ███████║██║ ╚████╔╝ ██║   ██║`);
    console.log('\x1b[34m%s\x1b[0m', ` ██╔═██╗ ██╔══██║██║  ╚██╔╝  ██║   ██║`);
    console.log('\x1b[36m%s\x1b[0m', ` ██║  ██╗██║  ██║██║   ██║   ╚██████╔╝`);
    console.log('\x1b[34m%s\x1b[0m', ` ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝    ╚═════╝`)
    console.log('___________________________________________________________________________________________________________________________\n');
    console.log('\x1b[36m%s\x1b[0m', `${client.user.tag}` + " has logged on with " + guild.memberCount + " users in " + guild.name);
});

client.login(token);