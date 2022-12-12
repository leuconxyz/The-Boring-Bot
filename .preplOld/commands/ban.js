module.exports = {
  name: 'ban',
  description: 'Allows you to ban users',
  execute(message, args, cmd, client, Discord) {
    let member = message.mentions.users.first();
    if (message.member.permissions.has('BAN_MEMBERS')) {
      if (member) {
        let memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.ban();
        let embed = new Discord.MessageEmbed()
          .setDescription('Ooooo, <@' + message.author.id + '> banned someone 💀')
          .setColor('#f20000');
        message.delete();
        message.channel.send(embed);
      } else {
        let embed = new Discord.MessageEmbed()
          .setDescription('Yo <@' + message.author.id + '> you can\'t ban that user... ❌')
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