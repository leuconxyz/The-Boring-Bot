module.exports = {
  name: 'trello',
  description: 'Takes you to our Trello where you can see our ideas and commands',
  execute(message, args, cmd, client, Discord) {
    let tbctrello = new Discord.MessageEmbed()
      .addFields(
        { name: '📘 Hey! Do you want to see what\'s going on with the bot?', value: 'By accessing our [Trello Board](https://trello.com/b/lbshmfLz/the-boring-bot) and you will be able to see what we have done to the bot and things we have planned to implement and more :)'},
      )
      .setImage('https://cdn.discordapp.com/attachments/371044619795824640/836324367214313475/Como-usar-o-Trello.png')
      .setColor('BLUE');
      message.delete();
    message.channel.send(tbctrello);
  }
}