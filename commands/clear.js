module.exports = {
  name: 'clear',
  cooldown: 5,
  description: 'Clears X ammount of messages',
  async execute(message, args, cmd, client, Discord) {
    const splitted = message.content.split(' ');
      splitted.shift();
      let amount = splitted.shift();

    if (message.member.permissions.has('MANAGE_MESSAGES') || message.member.permissions.has('ADMINISTRATOR')) {
      if (amount === 'undefined') {
      
      return message.reply('I need a number of messages to delete... <a:attention:846445327280111677>');
    
    } else if (isNaN(amount)) {
      
      return message.reply('I need a number of messages to delete... <a:attention:846445327280111677>');
    
    } else if (amount < 1) {
      
      return message.reply('I need to delete at least one message! <a:attention:846445327280111677>');
    
    } else if (amount > 100) {
      
      return message.reply('Sorry, best I can do is to delete 100 messages! <a:attention:846445327280111677>');
    
    } else if (amount > 0 && amount <= 100) {
      
      message.delete();

    await message.channel.messages.fetch({limit: amount}).then(messages =>{
      message.channel.bulkDelete(messages).catch(err =>{
        if(err.code = 50034) return message.reply('Sorry, due to limitations I can not delete messages older than 14 days! <a:attention:846445327280111677>');
      });
    });

    let embed = new Discord.MessageEmbed()
      .setDescription(`Cleaned ${amount} messages! <a:check:846445327857877042>`)
      .setColor('#f20000');
    message.channel.send(embed);

    //await sleep(3000);
    }
    } else {
      return message.reply('You don\'t have permissions to use this command! <a:attention:846445327280111677>');
    }

  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}