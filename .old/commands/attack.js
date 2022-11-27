const profileModel = require("../models/profileSchema");
const levels = require('../utils/levels.js');
module.exports = {
  name: 'attack',
  cooldown: 30,
  description: 'Attack your friends and pray you get lucky to win!',
  async execute(message, args, cmd, client, Discord, profileData, targetData) {
    let target = message.mentions.users.first();
    if (target.id === message.author.id) return message.channel.send('Don\'t attack yourself fam... ');
    if (target) {

      let attacker = (' <@' + message.author.id + '>');
      let defender = (' <@' + target.id + '>');

      let attroops = Number(Math.floor(((Math.random() * (1000000 - 10000)) + 1) + 10000));
      let deftroops = Number(Math.floor(((Math.random() * (1500000 - 1000)) + 1) + 1000));

      let adeaths = Number(Math.floor(attroops * 0.8));
      let aflee = Number(Math.floor(attroops * 0.2));
      let ddeaths = Number(Math.floor(deftroops * 0.8));
      let dflee = Number(Math.floor(deftroops * 0.2));
      let iearn = Number(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
      let iloss = Number(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
      let food = Number(Math.floor(Math.random() * (3000000 - 30000 + 1)) + 30000);
      let minerals = Number(Math.floor(Math.random() * (3000000 - 30000 + 1)) + 30000);
      let earnings = Number(Math.floor(Math.random() * (3000000 - 30000 + 1)) + 30000);

      let astart = new Discord.MessageEmbed()
        .setTitle('An attack has been started! ⚔️')
        .setDescription('🐎 Jarl' + attacker + ' has sent troops to the town of Jarl' + defender)
        .setFooter('If the command stops here 1 of the users or both were only now added to the Database! Sorry...')
        .setColor('RANDOM');
      message.delete();
      message.channel.send(astart);

      if (attroops > deftroops) {
        
        let efood = Number(Math.floor(food * 0.05));
        let eminerals = Number(Math.floor(minerals * 0.05));
        let eearnings = Number(Math.floor(earnings * 0.05));
        let ecoins = Number(Math.floor(Math.random() * (1000 - 10 + 1)) + 10);
        let exp = Number(Math.floor(Math.random() * (75 - 10 + 1)) + 10);
        let alevel = levels.levelup(profileData.xp + exp);

        if (Number(profileData.level) < alevel) {
          message.channel.send(`<:jarlwumpus:837274907938914344> <@${message.author.id}> leveled up to level ${alevel} <a:aconfetti:837481368870584421>`);
        }

        const response1 = await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $inc: {
              dbfood: efood,
              dbminerals: eminerals,
              dbearnings: eearnings,
              coins: ecoins,
              xp: exp,
              awon: 1,
            },
            $set: {
              level: alevel,
            },
          }
        );

        let awin = new Discord.MessageEmbed()
          .setTitle('📜 Attack successful!')
          .setDescription('🗡️ Jarl' + attacker + ' has won the attack against Jarl' + defender)
          .addFields(
            { name: '📜 Report of Jarl ' + message.author.username, value: '🏰 earned '+ exp + 'XP and ' + ecoins + ' coins! <:BORS:837283775201148928>' },
            { name: 'Troops Sent', value: attroops.toLocaleString(), inline: true },
            { name: 'Lost', value: aflee.toLocaleString(), inline: true },
            { name: 'Food Taken ', value: '🌾 +' + food.toLocaleString() },
            { name: 'Minerals Taken ', value: '⛏️ +' + minerals.toLocaleString() },
            { name: 'Gold & Silver Taken ', value: '💰 +' + earnings.toLocaleString() },
            { name: '📜 Report of Jarl ' + target.username, value: '🏰 lost ' + iloss + '% influence!' },
            { name: 'Troops Ready', value: deftroops.toLocaleString(), inline: true },
            { name: 'Lost', value: ddeaths.toLocaleString(), inline: true },
            { name: 'Enslaved', value: dflee.toLocaleString(), inline: true },
          )
          .setImage('https://cdn.discordapp.com/attachments/371044619795824640/836284768185352233/image0.png')
          .setFooter('Image taken from Vikings War of Clans', 'https://cdn.discordapp.com/attachments/371044619795824640/836534446005944340/141-1413337_war-of-clans-vikings-war-of-clans-logo.png')
          .setColor('#00f504');
        message.channel.send(awin);
        
      } else {
        let edcoins = Number(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
        let edxp = Number(Math.floor(Math.random() * (25 - 10 + 1)) + 10);
        let dlevel = levels.levelup(targetData.xp + edxp);

        if (Number(targetData.level) < dlevel) {
          message.channel.send(`<:jarlwumpus:837274907938914344> <@${target.id}> leveled up to level ${dlevel} <a:aconfetti:837481368870584421>`);
        }

        const response2 = await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              coins: edcoins,
              xp: edxp,
              dwon: 1,
            },
            $set: {
              level: dlevel, 
            },
          }
        );
        
        let aloss = new Discord.MessageEmbed()
          .setTitle('📜 Attack failed!')
          .setDescription('🛡️ Jarl' + attacker + ' lost against the power of Jarl' + defender)
          .addFields(
            { name: '📜 Report of Jarl ' + message.author.username, value: '🏰 lost ' + iloss + '% influence!' },
            { name: 'Troops Sent', value: attroops.toLocaleString(), inline: true },
            { name: 'Lost', value: adeaths.toLocaleString(), inline: true },
            { name: 'Enslaved', value: aflee.toLocaleString(), inline: true },
            { name: '📜 Report of Jarl ' + target.username, value: '🏰 earned ' + edxp + 'XP and ' + edcoins + ' coins! <:BORS:837283775201148928>' },
            { name: 'Troops Ready', value: deftroops.toLocaleString(), inline: true },
            { name: 'Lost', value: dflee.toLocaleString(), inline: true },
          )
          .setImage('https://cdn.discordapp.com/attachments/371044619795824640/836284768488390696/image1.png')
          .setFooter('Image taken from Vikings War of Clans', 'https://cdn.discordapp.com/attachments/371044619795824640/836534446005944340/141-1413337_war-of-clans-vikings-war-of-clans-logo.png')
          .setColor('#f20000');
        message.channel.send(aloss);

        
      }
    } else {
      return message.channel.send('Attacking the void doesn\'t seem wise, maybe choose an opponent... 🤔');
    }
  }
}