module.exports = {
  name: 'help',
  description: 'This is your basic and must have help command, gives info to users ⚠️',
  execute(message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle('Welcome to the help board!')
      .setDescription('Hey there <@' + message.author.id + '> here is some help for you! :mechanic: ')
      .addFields(
        { name: 'Important Commands 💔', value: '• b! ➼ Coming soon! \n ' },
        { name: 'General Commands 📚', value: '• b!ping ➼ Are you there? \n • b!invite ➼ Gives you bot invite link and the invite for TBC server. \n ' },
        { name: 'Admin Commands 👮', value: '• b!kick @user ➼ Allows you to kick users if you have perms for it! \n • b!ban @user ➼ Allows you to ban users if you have perms for it! \n ' },
        { name: 'Fun Commands 😄', value: '• b!say ➼ Bot will say whatever you type after command. \n • b!boo ➼ We love spooky season! \n • b!fuckyou ➼ Let\'s people know how you feel \n ' },
        { name: 'NSFW Commands 🔞', value: '• b!hentai ➼ Gives you \'free time\' options... Also very important, it leaves no trace of who used the command :) \n ' },
      )
      .setColor('#f20000');
    message.delete();
    message.channel.send(embed);
  }
}