module.exports = {
  name: 'say',
  description: 'This command makes the bot say whatever the user tells him to',
  execute(message, args, cmd, client, Discord) {
    const splitted = message.content.split(' ');
    let ava = message.author.displayAvatarURL({format: 'png', size: 1024});
    splitted.shift();
    let embed = new Discord.MessageEmbed()
      .setDescription(`${splitted.join(' ')}`)
      .setFooter(message.author.username, `${ava}`)
      .setColor('RANDOM');
    message.delete();
    message.channel.send(embed);
  }
}