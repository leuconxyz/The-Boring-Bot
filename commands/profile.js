const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'profile',
  cooldown: 5,
  description: 'Let\s you check out your profile!',
  async execute(message, args, cmd, client, Discord, profileData, targetData) {
    let member = message.author.id;
    let ava = message.author.displayAvatarURL({format: 'png', size: 1024});

    let eat = profileData.dbfood || 0;
    let mine = profileData.dbminerals || 0;
    let take = profileData.dbearnings || 0;
    let bcoins = profileData.coins || 0;
    let bbank = profileData.bank || 0;
    let atkwon = profileData.awon || 0;
    let defwon = profileData.dwon || 0;

    if(member) {
      let userprofile = new Discord.MessageEmbed()
        .setAuthor(`Profile data for ${message.author.username}`, `${ava}`)
        .addFields(
          { name: `📝 Overall Report`, value: `• 🌟 Level: ${profileData.level} \n • ⭐ Total Exp: ${profileData.xp}` },
          { name: `💰 Finance Department Info`, value: `• <:BORS:837283775201148928> Coins in hand: ${bcoins.toLocaleString()} \n • <:BORS:837283775201148928> Coins in bank: ${bbank.toLocaleString()}` },
          { name: `⚔️ War Commander Report`, value: `• 🐎 Attacks Won: ${atkwon.toLocaleString()} \n • 🛡️ Defenses Won: ${defwon.toLocaleString()}` },
          { name: `📦 Vault Report`, value: `• 🌾 Food in Vault: ${eat.toLocaleString()} \n • ⛏️ Minerals in Vault: ${mine.toLocaleString()} \n • 💎 Gold & Silver in Vault: ${take.toLocaleString()}` },
        )
        .setColor('RANDOM');
        message.delete();
      message.channel.send(userprofile);
    } else {
      return message.channel.send('HOLD UP! It looks like you might not be in our Database yet! 👨‍💻');
    }
    
  }
}