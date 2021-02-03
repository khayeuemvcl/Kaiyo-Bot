const config = require("../config.json");
const prefix = config.bot.prefix;
const memberRole = config.bot.member_role_name;
const verifyChannel = config.bot.verify;

module.exports = function(client) {
    client.on('message', async message => {
    if (message.content.startsWith(prefix + "verify")) {
      if(message.member.roles.has(memberRole)) return message.channel.send("You don't have access to this command!")
        if (message.channel.id === verifyChannel) {
            try {
              var role = message.guild.roles.find(role => role.name === memberRole);
              message.member.addRole(role);
              message.delete();
            } catch (error) {
              console.log(error)
              message.channel.send("How has this happened....");
            }
          } else {
            message.delete();
        }
      }
    })
}