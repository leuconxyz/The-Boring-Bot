module.exports = {
  name: 'invite',
  description: 'This command gives The Boring Club\'s server discord invite',
  execute(message, args, Discord) {
    let embed = new Discord.MessageEmbed()
        .setTitle('Hey '  + message.author.username + ', nice to see you interested in us! ')
        .setDescription('To join The Boring Club it is very simple, all you have to do is use our server invite link https://discord.gg/vzdUDfz6zk and you can share it with friends 💔')
        .setImage('https://cdn.discordapp.com/icons/810882912378814494/7f24f420158864746927522e3707f1ff.png?size=256')
        .setURL('https://discord.gg/vzdUDfz6zk')
        .setColor('#f20000');
      message.channel.send(embed);
  }
}