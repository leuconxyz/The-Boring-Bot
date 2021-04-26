module.exports = {
  name: 'anon',
  description: 'This command makes the bot say whatever the user tells him to but without telling who said it',
  execute(message, args, Discord) {
    const splitted = message.content.split(' ');
    splitted.shift();
    let embed = new Discord.MessageEmbed()
      .setDescription(`${splitted.join(' ')}`)
      .setColor('RANDOM');
    message.delete();
    message.channel.send(embed);
  }
}