module.exports = {
  name: 'kick',
  description: 'Allows you to kick users',
  execute(message, args, Discord) {
    let member = message.mentions.users.first();
    if (message.member.permissions.has('KICK_MEMBERS')) {
      if (member) {
        let memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.kick();
        let embed = new Discord.MessageEmbed()
          .setDescription('Ooooo, <@' + message.author.id + '> kicked someone 🥾')
          .setColor('#f20000');
        message.delete();
        message.channel.send(embed);
      } else {
        let embed = new Discord.MessageEmbed()
          .setDescription('Yo <@' + message.author.id + '> you can\'t kick that user... ❌')
          .setColor('#f20000');
        message.channel.send(embed);
      }
    } else {
      let embed = new Discord.MessageEmbed()
        .setDescription('Yo <@' + message.author.id + '> you don\'t have perms for that... ❌')
        .setColor('#f20000');
      message.channel.send(embed);
    }
  }
}