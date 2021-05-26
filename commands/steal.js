const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'steal',
  cooldown: 120,
  description: 'Let\s you steal from another player\'s pocket',
  async execute(message, args, cmd, client, Discord, profileData, targetData) {
    let target = message.mentions.users.first();
    let cmax = Number(30)
    let cmin = Number(10)
    let cres = Number(Math.floor(Math.random() * (cmax - cmin + 1)) + cmin);
    let stolen = Number(Math.floor(targetData.coins * (cres * 0.01)));
    let ncoins = Number(targetData.coins - stolen);

    if(target && targetData.coins > 100) {

      let rrez = new Discord.MessageEmbed()
        .setTitle('Someone has been robbed! 👁️')
        .setDescription('We are running an investigation on who did it!')
        .setFooter('If the command stops here 1 of the users or both were only now added to the Database! Sorry...')
        .setColor('RANDOM');
      message.delete();
      message.channel.send(rrez);

      const response1 = await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $inc: {
              coins: stolen,
            },
          }
      );

      const response2 = await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $set: {
              coins: ncoins,
            },
          }
      );

      let rres = new Discord.MessageEmbed()
        .setTitle('The investigation is now complete, we found the robber! 👮')
        .setDescription(`Locals said <@${message.author.id}> took ${stolen} coins from <@${target.id}>`)
        .setColor('RANDOM');
      message.channel.send(rres);
    } else if (target && targetData.coins < 100) {
      return message.channel.send('This person is so poor you felt bad for trying to steal them... 🤐');
    } else {
      return message.channel.send('Hum... Can\'t find anything in empty pockets... 🙄');
    }
    
  }
}