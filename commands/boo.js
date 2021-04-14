module.exports = {
  name: 'boo',
  description: 'It\'s spoooky seeeason',
  execute(message, args){
    message.channel.send('boo 👻');
  }
}