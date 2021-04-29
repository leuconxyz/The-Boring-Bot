module.exports = {
  name: 'say',
  description: 'This command makes the bot say whatever the user tells him to',
  execute(message, args, cmd, client, Discord) {
    const splitted = message.content.split(' ');
    splitted.shift();
    let embed = new Discord.MessageEmbed()
      .setDescription(`${splitted.join(' ')}`)
      .setFooter(message.author.username, 'https://cdn.discordapp.com/emojis/831684420033445918.png?v=1')
      .setColor('RANDOM');
    message.delete();
    message.channel.send(embed);
  }
}