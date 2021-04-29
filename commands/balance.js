module.exports = {
  name: "balance",
  description: "This command will show your balance in hand and in bank",
  execute(message, args, cmd, client, discord, profileData) {
    message.channel.send(`Your wallet balance is ${profileData.coins} & your bank balance is ${profileData.bank} <:BORS:837283775201148928>`);
  },
};