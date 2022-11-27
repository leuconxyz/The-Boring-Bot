const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'deposit',
  description: 'Allows you to deposit your coins in the bank',
  async execute(message, args, cmd, client, discord, profileData) {

    const splitted = message.content.split(' ');
    let handed = splitted.pop();

    let befcoins = Number(profileData.coins) || 350;

    if (Number(handed) && handed >= 1000 && handed <= befcoins) {
      let topup = handed;
      let aftcoins = Number(befcoins - topup);

      const response1 = await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            bank: topup,
          },
          $set: {
            coins: aftcoins,
          },
        },
      );
      return message.channel.send(`${message.author.username}, you have deposited ${topup.toLocaleString()} **coins** in your bank <:BORS:837283775201148928>`);
    } else if (handed === 'all' && befcoins >= 1000) {
      let topup = befcoins;

      const response2 = await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            bank: topup,
          },
          $set: {
            coins: 0,
          },
        },
      );

      return message.channel.send(`${message.author.username}, you have deposited ${topup.toLocaleString()} **coins** in your bank <:BORS:837283775201148928>`);
    } else {
      return message.channel.send('❌ Please insert a number to deposit or a valid amount above 1000$BORS... <:BORS:837283775201148928>')
    }
  }
};