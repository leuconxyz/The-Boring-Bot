const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true},
  serverID: { type: String, require: true },
  coins: { type: Number, default: 350 },
  bank: { type: Number },
  xp: { type: Number },
  level: { type: Number },
  dbfood: { type: Number },
  dbminerals: { type: Number },
  dbearnings: { type: Number },
  awon: { type: Number },
  dwon: { type: Number },
  wepLevel: { type: Number },
  wepBonus: { type: Number },
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;