module.exports = {
  name: 'boo',
  description: 'It\'s spoooky seeeason',
  execute(message, args, cmd, client, Discord) {
    message.delete();
    message.channel.send('👻, BOOO <@' + message.author.id + '>! We love spooky season! 🎃');
  }
}