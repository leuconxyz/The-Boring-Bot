module.exports = {
  name: 'help',
  description: 'This is your basic and must have help command, gives info to users ⚠️',
  execute(message, args, cmd, client, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle('Welcome to the help board!')
      .setDescription('Hey there <@' + message.author.id + '> here is some help for you! :mechanic: ')
      .addFields(
        { name: 'Important Commands 💔', value: '• b!donate \n • b!trello \n ' },
        { name: 'General Commands 📚', value: '• b!ping \n • b!invite \n ' },
        { name: 'Admin Commands 👮', value: '• b!kick @user \n • b!ban @user \n • b!clear X \n' },
        { name: 'User Commands 🧙', value: '• b!profile\n '},
        { name: 'Economy Commands 🤑', value: '• b!balance \n • b!deposit X \n • b!withdraw X \n • b!send @user coins X \n • b!steal @user \n • b!beg \n • b!attack @user \n ' },
        { name: 'Fun Commands 😄', value: '• b!say TEXT \n • b!fight @user \n • b!rand X Y \n • b!love @user \n • b!flip \n • b!8ball TEXT \n • b!boo \n ' },
        { name: 'NSFW Commands 🔞', value: '• b!hentai \n ' },
        { name: 'Community Commands 🎭', value: '• b!poland \n • b!fuckyou \n ' },
      )
      .setColor('#f20000');
    message.delete();
    message.channel.send(embed);
  }
}

//• b! ➼ A! \n 