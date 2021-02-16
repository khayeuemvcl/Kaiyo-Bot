require('events').EventEmitter.prototype._maxListeners = 100;
var start = +new Date();
var config = require("./config.json");
var Discord = require("discord.js");
var client = new Discord.Client({autoReconnect: true})
var token = config.bot.token;
var guildID = config.bot.guild_id;

require("./constants/commands")(client)

client.on('ready', () => {
    var guild = client.guilds.get(guildID);
    console.clear();
    console.log('\n\x1b[36m██╗  ██╗ █████╗ ██╗██╗   ██╗ ██████╗');
    console.log('\x1b[34m██║ ██╔╝██╔══██╗██║╚██╗ ██╔╝██╔═══██╗');
    console.log('\x1b[36m█████╔╝ ███████║██║ ╚████╔╝ ██║   ██║');
    console.log('\x1b[34m██╔═██╗ ██╔══██║██║  ╚██╔╝  ██║   ██║');
    console.log('\x1b[36m██║  ██╗██║  ██║██║   ██║   ╚██████╔╝');
    console.log('\x1b[34m╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝    ╚═════╝\x1b[0m')
    console.log('___________________________________________________________________________________________________________________________\n');
    console.log(`\x1b[36m${client.user.tag} has logged on with ${guild.memberCount} users in ${guild.name}\x1b[0m`);
    console.log('___________________________________________________________________________________________________________________________\n');
    var end =  +new Date();
    var diff = end - start;
    console.log('\x1b[36mInitialization Time: ' + diff + 'ms\n\x1b[0m')
});

client.login(token);
