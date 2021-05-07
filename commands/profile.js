const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'profile',
  cooldown: 5,
  description: 'Let\s you check out your profile!',
  async execute(message, args, cmd, client, Discord, profileData, targetData) {
    member = message.author.id

    if(member) {
      let userprofile = new Discord.MessageEmbed()
        .setTitle(`Here is your profile data ${message.author.username}`)
        .setColor('RANDOM');
        message.delete();
      message.channel.send(userprofile);
    } else {
      return message.channel.send('HOLD UP! It looks like you might not be in our Database yet! 👨‍💻');
    }
    
  }
}