const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'upgrade',
  cooldown: 0,
  description: 'Let\'s you upgrade your items',
  async execute(message, args, cmd, client, Discord, profileData, targetData) {
    let member = message.author.id;
    let uplev = Number(1);
    let upval = Number(0.1);
    let uCoins = Number(profileData.coins) || 0;
    let wepData = Number(profileData.wepBonus) || 1;
    let wepLev = Number(profileData.wepLevel) || 0;
    let uCost = Number(25000 * wepData);
    let acoins = Number(uCoins - uCost);

    if(member && uCoins >= uCost && wepData < 2) {
      let wepbonr = Number(wepData + upval);
      let weplvup = Number(wepLev + uplev);
      let wepbon = Math.round(wepbonr * 10) / 10

      const response1 = await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              wepLevel: weplvup,
              wepBonus: wepbon,
              coins: acoins,
            },
          }
      );

      let wup = new Discord.MessageEmbed()
        .setTitle('The blacksmith has upgraded your weapon! ⚒️')
        .setDescription(`Your weapon is now level ${weplvup}, and gives you a x${wepbon} bonus! <a:pfire:846445326922547291>`)
        .setFooter(`Deal between the Boring Blacksmith and ${message.author.username}`)
        .setColor('RANDOM');
      message.delete();
      message.channel.send(wup);

    } else if (member && wepData >= 2) {
      return message.channel.send('Your weapon is too powerful for the blacksmith to handle! <a:attention:846445327280111677>');
    } else if (member && uCoins < uCost) {
      return message.channel.send(`You can\'t afford this upgrade, you need ${uCost.toLocaleString()} coins in hand... 🤐`);
    } else {
      return message.channel.send('The Blacksmith needs something to upgrade... 🙄');
    }
    
  }
}