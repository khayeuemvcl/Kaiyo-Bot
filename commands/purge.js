const config = require("../config.json");
const prefix = config.bot.prefix;

module.exports = function(client) {
    client.on('message', async message => {

        if (message.content.startsWith(prefix + "purge")) {
            if (!message.member.hasPermission('MANAGE_MESSAGES')) 
                return message.channel.send("You do not have access to this command.")
            const args = message.content.split(' ').slice(1);
            const amount = args.join(' ');
            
            if (!amount)
                return message.reply('You haven\'t given an amount of messages which should be deleted!');
            if (isNaN(amount))
                return message.reply('That is not a number, smooth brain...');
            if (amount > 100)
                return message.reply('You cannot delete more than 100 messages at once!');
            if (amount < 1)
                return message.reply('You have to delete at least 1 message!');
            await message.channel.fetchMessages({ limit: amount }).then(messages => {
                message.channel.bulkDelete(messages)
                    return message.reply(`Successfully deleted ` + amount + "/" + amount + ` messages!`);
            });
        }
    })
}