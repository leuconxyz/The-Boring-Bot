module.exports = {
  name: 'spammer',
  description: 'Spams the user X amount of times specified',
  async execute(message, args, Discord) {
    let target = message.mentions.users.first();
    const splitted = message.content.split(' ');
    splitted.shift();
    let times = Number(splitted.pop());
    let track = 0;
    if (target) {
      message.delete();
      while (track < times) {
        message.channel.send('Hey, <@' + target.id + '> wake up! 🤓')
        await sleep(2000);
        track++
      }
    message.channel.send('Spammed <@' + target.id + '> ' + times + ' times 🤐');
    } else {
      message.delete();
      message.channel.send('I don\'t think you should spam yourself... 🤔');
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}