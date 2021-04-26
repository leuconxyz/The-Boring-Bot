module.exports = {
  name: 'love',
  description: 'Calculates love chances between you and another user',
  execute(message, args, Discord) {
    let member = message.mentions.users.first();
    if (member) {
      let chance = Number((Math.floor(Math.random() * (100 - 0 + 1)) + 0));
      const splitted = message.content.split(' ');
      let last = splitted.pop();
      if (last === 'cheat') {
        let embed = new Discord.MessageEmbed()
          .setTitle('Cupid just dropped in! 💘')
          .addFields(
            { name: 'After some calculations...', value: 'It looks like <@' + message.author.id + '> and <@' + member.id + '>, have a 100% love chance! 💕' },
          )
          .setImage('https://cdn.discordapp.com/attachments/371044619795824640/834483993894322236/Cupid-in-Chief-HireNews_021217-600x531.png')
          .setColor('#f20000');
        message.delete();
        message.channel.send(embed);
      } else {
        let embed = new Discord.MessageEmbed()
          .setTitle('Cupid just dropped in! 💘')
          .addFields(
            { name: 'After some calculations...', value: 'It looks like <@' + message.author.id + '> and <@' + member.id + '>, have a ' + chance + '% love chance! 💕' },
          )
          .setImage('https://cdn.discordapp.com/attachments/371044619795824640/834484737069940786/makelovegreatagain.png')
          .setColor('#f20000');
        message.delete();
        message.channel.send(embed);
      }
    } else {
      let solo = new Discord.MessageEmbed()
        .setDescription('Yo <@' + message.author.id + '> you should already love yourself... 💕')
        .setColor('#f20000');
      message.channel.send(solo);
    }
  }
}