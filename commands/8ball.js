module.exports = {
  name: '8ball',
  description: 'Will help you with questions of life',
  execute(message, args, Discord) {
    let sin = '<@' + message.author.id + '>'
    const splitted = message.content.split(' ');
    splitted.shift();

    let witch = [
      ' Yes.',
      ' No.',
      ' Yes, but no...',
      ' Maybe yes... Maybe no...',
      ' Maybe...',
      ' Probably not...',
      ' Probably yes...',
      ' Who knows...',
      ' Not even God knows...',
      ' Please don\'t...',
      ' Well... I have to think...',
      ' Ask again later.',
      ' Better not tell you now.',
      ' Darkness, I can sense so much darkness...',
      ' 404 Answer not found, please try again later.',
      ' Chances are slim Jim...',
      ' Oh God help me, you\'re crazy...',
      ' Concentrate and ask again.',
      ' Can\'t predict now.',
      ' Roses are Red, Violets are blue, your question is dumb and so are you.',
      ' You\'re more likely to meet Shrek in person...',
      ' Oh sorry, ask again, I wasn\'t paying attention...',
      ' Don\'t count on it.',
      ' Signs point to yes.',
      ' After that question your death is certain!',
      ]

    let wreply = witch[ Math.floor( Math.random() * witch.length) ];

    let fortune = new Discord.MessageEmbed()
      .setTitle('You have summoned help...')
      .setDescription( sin + ' asked: ' + `${splitted.join(' ')}`)
      .addFields(
        { name: '🔮 The witch has answered...', value: '🎱' + wreply},
      )
      .setImage('https://cdn.discordapp.com/attachments/371044619795824640/836195263117918228/questions.png')
      .setColor('RANDOM');
    message.delete();
    message.channel.send(fortune);
  }
}