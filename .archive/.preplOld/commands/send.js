const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'send',
  description: 'Allows users to send resources to each other',
  async execute(message, args, cmd, client, Discord, profileData, targetData) {
    let target = message.mentions.users.first();
    if (target) {
      const splitted = message.content.split(' ');
      splitted.shift();
      splitted.shift();
      let resource = splitted.shift();
      let amount = Number(splitted.pop());
      if (resource === 'coins' && amount <= profileData.bank) {

        let topup = amount;
        let aftcoins = Number(profileData.bank - topup);
        let sentcoins = Number(amount)

        const response1 = await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              bank: aftcoins,
            },
          },
        );

        const response2 = await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              bank: sentcoins,
            },
          },
        );

        let scoins = new Discord.MessageEmbed()
          .addFields(
            { name: 'Transaction successful <a:verified:846445329342922782>', value: `<@${message.author.id}> sent ${amount.toLocaleString()} coins to <@${target.id}>` },
          )
          .setColor('GREEN');
        message.delete();
        message.channel.send(scoins);
      } else if (resource === 'food' && amount <= profileData.dbfood) {

        let topup = amount;
        let aftfood = Number(profileData.dbfood - topup);
        let sentfood = Number(amount)

        const response1 = await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              dbfood: aftfood,
            },
          },
        );

        const response2 = await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              dbfood: sentfood,
            },
          },
        );

        let sfood = new Discord.MessageEmbed()
          .addFields(
            { name: 'Transaction successful <a:verified:846445329342922782>', value: `<@${message.author.id}> sent ${amount.toLocaleString()} food to <@${target.id}>` },
          )
          .setColor('GREEN');
        message.delete();
        message.channel.send(sfood);
      } else if (resource === 'minerals' && amount <= profileData.dbminerals) {

        let topup = amount;
        let aftminerals = Number(profileData.dbminerals - topup);
        let sentminerals = Number(amount)

        const response1 = await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $set: {
              dbminerals: aftminerals,
            },
          },
        );

        const response2 = await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              dbminerals: sentminerals,
            },
          },
        );

        let sminerals = new Discord.MessageEmbed()
          .addFields(
            { name: 'Transaction successful <a:verified:846445329342922782>', value: `<@${message.author.id}> sent ${amount.toLocaleString()} minerals to <@${target.id}>` },
          )
          .setColor('GREEN');
        message.delete();
        message.channel.send(sminerals);
      } else {
        let help = new Discord.MessageEmbed()
          .setTitle('Transaction failed <a:attention:846445327280111677>')
          .setDescription('Please use a valid amount or resource! \n Example: b!send @user coins 1000 \n Note: Coins come from the bank!')
          .addFields(
            { name: 'Allowed Resources:', value: '<:BORS:837283775201148928> coins \n  🌾 food \n ⛏️ minerals \n' },
          )
          .setColor('#f20000');
        message.delete();
        message.channel.send(help);
      }
    } else {
      let help = new Discord.MessageEmbed()
          .setTitle('Transaction failed <a:attention:846445327280111677>')
          .setDescription('Please use: b!send @user resource amount \n Example: b!send @user coins 1000')
          .addFields(
            { name: 'Allowed Resources:', value: '<:BORS:837283775201148928> coins \n  🌾 food \n ⛏️ minerals \n' },
          )
          .setColor('#f20000');
        message.delete();
        message.channel.send(help);
    }
  }
}