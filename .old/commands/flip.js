module.exports = {
  name: 'flip',
  description: 'This will flip a coin for you!',
  execute(message, args, cmd, client, Discord) {
    let coin = [
      'heads',
      'tails',
    ];
    let side = coin[ Math.floor( Math.random() * coin.length) ];
    let result = new Discord.MessageEmbed()
      .addFields(
        { name: 'Let\'s throw this coin ' + message.author.username + '!', value: 'Hum, looks like you got ' + side + ' ✨'}
      )
      .setColor('#f20000');
    message.delete();
    message.channel.send(result);
  }
}