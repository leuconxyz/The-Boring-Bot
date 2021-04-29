const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'deposit',
  description: 'Allows you to deposit your coins in the bank',
  async execute(message, args, cmd, client, discord, profileData) {

    const splitted = message.content.split(' ');
    let handed = splitted.pop();
    if (Number(handed) && handed > 0 && handed <= profileData.coins) {
      let topup = handed;
      let befcoins = profileData.coins;
      let aftcoins = Number(profileData.coins - topup);

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
      return message.channel.send(`${message.author.username}, you have deposited ${topup} **coins** in your bank <:BORS:837283775201148928>`);
    } else if (handed === 'all') {
      let topup = profileData.coins;

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

      return message.channel.send(`${message.author.username}, you have deposited ${topup} **coins** in your bank <:BORS:837283775201148928>`);
    } else {
      return message.channel.send('Please insert a number to deposit or a valid amount... ❌')
    }
  }
};