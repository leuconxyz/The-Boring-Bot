module.exports = {
  name: 'anonsecret',
  description: 'This command makes the bot say whatever the user tells him to but without discriminating the user',
  execute(message, args, cmd, client, Discord) {
    const splitted = message.content.split(' ');
    splitted.shift();
    let embed = new Discord.MessageEmbed()
      .setDescription(`${splitted.join(' ')}`)
      .setColor('RANDOM');
    message.delete();
    message.channel.send(embed);
  }
}