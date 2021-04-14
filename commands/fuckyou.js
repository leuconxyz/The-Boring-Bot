module.exports = {
  name: 'fuckyou',
  description: 'Drops an image to express your attitude',
  execute(message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setDescription('<@' + message.author.id + '> left this for you 💖')
      .setImage('https://d6ce0no7ktiq.cloudfront.net/images/stickers/663.png')
      .setColor('RANDOM');
      message.delete();
    message.channel.send(embed);
  }
}