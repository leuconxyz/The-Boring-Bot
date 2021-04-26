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
        { name: 'Fun Commands 😄', value: '• b!say ➼ Bot will say whatever you type after command. \n • b!fight @user ➼ Will create an epic battle between you and your opponent \n • b!rand 1 10 ➼ Generates a random number between two given numbers of choice. \n • b!love @user ➼ Calculates your love chances with the user you tag. \n • b!flip ➼ Flips a coin for you, good luck! \n • b!boo ➼ We love spooky season! \n ' },
        { name: 'NSFW Commands 🔞', value: '• b!hentai ➼ Gives you \'free time\' options... Also very important, it leaves no trace of who used the command :) \n ' },
        { name: 'Community Commands 🎭', value: '• b!poland ➼ Show\'s our love for Poland and Chris! \n • b!fuckyou ➼ Let\'s people know how you feel \n ' },
      )
      .setColor('#f20000');
    message.delete();
    message.channel.send(embed);
  }
}