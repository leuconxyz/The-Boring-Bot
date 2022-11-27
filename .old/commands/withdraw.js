const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'withdraw',
  description: 'Allows you to remove money from bank to hand',
  async execute(message, args, cmd, client, discord, profileData) {

    const splitted = message.content.split(' ');
    let handed = splitted.pop();
    
    let befcoins = Number(profileData.bank) || 0;

    if (Number(handed) && handed > 0 && handed <= befcoins) {
      let topup = handed;
      
      let aftcoins = Number(befcoins - topup);

      const response1 = await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: topup,
          },
          $set: {
            bank: aftcoins,
          },
        },
      );
      return message.channel.send(`${message.author.username}, you have taken ${topup.toLocaleString()} **coins** from your bank <:BORS:837283775201148928>`);
    } else if (handed === 'all') {
      let topup = befcoins;

      const response2 = await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: topup,
          },
          $set: {
            bank: 0,
          },
        },
      );

      return message.channel.send(`${message.author.username}, you have taken ${topup.toLocaleString()} **coins** from your bank <:BORS:837283775201148928>`);
    } else {
      return message.channel.send('Please insert a number to withdraw or a valid amount... ❌')
    }
  }
};