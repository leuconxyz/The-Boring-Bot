module.exports = {
  name: 'help',
  description: 'This is your basic and must have help command, gives info to users ⚠️',
  execute(message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle('Welcome to the help board!')
      .setDescription('Hey there <@' + message.author.id + '> here is some help!')
      .setColor('#f20000');
    message.channel.send(embed);
  }
}