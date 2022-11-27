const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'beg',
  cooldown: 60,
  description: 'Allows you to beg for coins to the Gods',
  async execute(message, args, cmd, client, discord, profileData) {
    const randomBeg = Math.floor(Math.random() * 35) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomBeg,
        },
      }
    );
    return message.channel.send(`${message.author.username}, you begged and received ${randomBeg} **coins** <:BORS:837283775201148928>`);
  },
};