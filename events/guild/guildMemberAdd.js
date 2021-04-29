const profileModel = require("../../models/profileSchema");

module.exports = async (client, discord, member) => {
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 350,
    bank: 0,
    dbfood: 0,
    dbminerals: 0,
    dbearnings: 0,
  });
  profile.save();
};