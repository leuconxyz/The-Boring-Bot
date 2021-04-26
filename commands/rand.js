module.exports = {
  name: 'rand',
  description: 'This will generate a number between 2 givens numbers by the user',
  execute(message, args, Discord) {
    const splitted = message.content.split(' ');
    splitted.shift();
    let first = Number(splitted.shift());
    let last = Number(splitted.pop());
    if( !first || !last) 
      return message.channel.send("Please insert two numbers... 🙄");
    message.channel.send(Math.floor(Math.random() * (last - first + 1)) + first);
  }
}