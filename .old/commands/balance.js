module.exports = {
  name: "balance",
  description: "This command will show your balance in hand and in bank",
  execute(message, args, cmd, client, discord, profileData) {
    let uCoins = Number(profileData.coins) || 0;
    let uBank = Number(profileData.bank) || 0;

    message.channel.send(`Your wallet balance is ${uCoins.toLocaleString()} & your bank balance is ${uBank.toLocaleString()} <:BORS:837283775201148928>`);
  },
};