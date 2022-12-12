module.exports = {
  name: 'ping',
  description: 'Basic Command, to test bot, and to me, it\'s fun to have',
  execute(message, args, cmd, client, Discord) {
    let embed = new Discord.MessageEmbed()
      .setDescription('Pong 🏓')
      .setColor('#f20000');
    message.channel.send(embed);
  }
}