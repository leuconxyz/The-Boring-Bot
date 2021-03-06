const profileModel = require("../../models/profileSchema");

module.exports = async (client, discord, member) => {
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 350,
    bank: 0,
    xp: 0,
    level: 0,
    dbfood: 0,
    dbminerals: 0,
    dbearnings: 0,
    awon: 0,
    dwon: 0,
    wepLevel: 0,
    wepBonus: 1,
  });
  profile.save();
};