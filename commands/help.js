module.exports = {
  name: 'help',
  description: 'This is your basic and must have help command, gives info to users ⚠️',
  execute(message, args, cmd, client, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle('Welcome to the help board!')
      .setDescription('Hey there <@' + message.author.id + '> here is some help for you! :mechanic: ')
      .addFields(
        { name: 'Important Commands 💔', value: '• b!donate ➼ Gives you options to donate to our team, thank you! \n • b!trello ➼ Takes you to our Trello Board with lots of information! \n ' },
        { name: 'General Commands 📚', value: '• b!ping ➼ Are you there? \n • b!invite ➼ Gives you bot invite link and the invite for TBC server. \n ' },
        { name: 'Admin Commands 👮', value: '• b!kick @user ➼ Allows you to kick users if you have perms for it! \n • b!ban @user ➼ Allows you to ban users if you have perms for it! \n ' },
        { name: 'Economy Commands 🤑', value: '• b!balance ➼ Tells how much money you have in hand and in bank \n • b!deposit X ➼ Deposits X amount, or type all to deposit all your money! \n • b!withdraw X ➼ Withdraws X amount, or type all to withdraw all your money! \n • b!steal @user ➼ Let\'s you steal money from others! \n • b!beg ➼ Go outside and ask the Gods for some coin, might get lucky! \n • b!attack @user ➼ Attack someone\'s town and if you win you get rewarded! \n ' },
        { name: 'Fun Commands 😄', value: '• b!say ➼ Bot will say whatever you type after command. \n • b!fight @user ➼ Will create an epic battle between you and your opponent \n • b!rand 1 10 ➼ Generates a random number between two given numbers of choice. \n • b!love @user ➼ Calculates your love chances with the user you tag. \n • b!flip ➼ Flips a coin for you, good luck! \n • b!8ball Am I real? ➼ Ask any question and get your answers! \n • b!boo ➼ We love spooky season! \n ' },
        { name: 'NSFW Commands 🔞', value: '• b!hentai ➼ Gives you \'free time\' options... Also very important, it leaves no trace of who used the command :) \n ' },
        { name: 'Community Commands 🎭', value: '• b!poland ➼ Show\'s our love for Poland and Chris! \n • b!fuckyou ➼ Let\'s people know how you feel \n ' },
      )
      .setColor('#f20000');
    message.delete();
    message.channel.send(embed);
  }
}

//• b! ➼ A! \n 