require('dotenv').config();
const profileModel = require("../../models/profileSchema");

const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
  const prefix = 'b!';
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 350,
        bank: 0,
        dbfood: 0,
        dbminerals: 0,
        dbearnings: 0,
      });
      profile.save();
    }
  } catch(err) {
    console.log(err);
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase().trim();

  const command = client.commands.get(cmd);

  if (!command) return message.channel.send('That command doesn\'t exist...')

  //start command cooldown
  if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
  }

  const current_time = Date.now();
  const time_stamps = cooldowns.get(command.name);
  const cooldown_amount = (command.cooldown) * 1000;

  if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`please wait ${time_left.toFixed()} more seconds before using ${command.name} again!`);
        }
  }

  time_stamps.set(message.author.id, current_time);
  setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
  //end command cooldown

  try {
    command.execute(message, args, cmd, client, Discord, profileData);
  } catch(err) {
    console.log(err);
  }
  
}