module.exports = {
  name: 'invite',
  description: 'This command gives The Boring Club\'s server discord invite',
  execute(message, args, cmd, client, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle('Hey ' + message.author.username + ', nice to see you interested in us! ')
      .setImage('https://cdn.discordapp.com/icons/810882912378814494/7f24f420158864746927522e3707f1ff.png?size=256')
      .setURL('https://discord.gg/vzdUDfz6zk')
      .addFields(
        { name: 'To join The Boring Club 🔓', value: 'Joining our community is very simple, all you have to do is click [here](https://discord.gg/pRyb6C272H), and you can also share it with your friends!' },
        { name: 'To invite our bot 🤖', value: 'Inviting our bot is as simple as any other, just click [here](https://discord.com/api/oauth2/authorize?client_id=831556441756008479&permissions=8&scope=bot) and add it to your server.' },
      )
      .setColor('#f20000');
    message.delete();
    message.channel.send(embed);
  }
}