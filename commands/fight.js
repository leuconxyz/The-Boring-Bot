const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'fight',
  cooldown: 15,
  description: 'Creates a fight between you and the user you tag',
  async execute(message, args, cmd, client, Discord, profileData, targetData) {
    let target = message.mentions.users.first();
    if (target) {
      let p1 = (' <@' + message.author.id + '>');
        let php1 = 100;
      let p2 = (' <@' + target.id + '>');
        let php2 = 100;
      let round = 1;
      let amp1 = Number(profileData.wepBonus) || 1;
      let amp2 = Number(targetData.wepBonus) || 1;

      const god = '640182216873345026';
      let staff = [god, '298152950147317761'];
      if ( staff.includes(message.author.id)) {
        php1 = 150;
      }
      
      if (staff.includes(target.id)) {
        php2 = 150;
      }
      
      let fs = new Discord.MessageEmbed()
        .setTitle('Welcome to The Boring Arena! ⚔️')
        .setDescription('Today we have' + p1 + ' versus' + p2 + ', may the best win!')
        .setImage('https://cdn.discordapp.com/attachments/488182893030539266/834923808024166421/12921295_l.jpeg')
        .setColor('#ffff00');
        message.delete();
      message.channel.send(fs);

      //Start of attack List
      let attack = [
        ' threw a rock at',
        ' stabbed his fork in the eye of',
        ' loaded a nut cracking kick on',
        ' landed a devastating blow on',
        ' used his cruise missile on',
        ' said he fucked the mother',
        ' pulled out a crab to put in the pants of',
        ' called the Dragonborn to shout at',
        ' dropped a nuke on',
        ' put a straw in the left eye of',
        ' threw sand to the eyes of',
        ' peed on',
        ' smashed the skull of',
        ' tried to negotiate with',
        ' cast a fireball on',
        ' verbally abused',
        ' showed his KD to',
        ' threw a spear from space to',
        ' used a sword with Knockback XI on',
        ' gave a poisoned vodka bottle to',
        ' cried to his mother about',
        ' took a shower with',
        ' pulled the legs of',
        ' bitch slapped',
        ' loaded his gun and shot',
        ' came out with the UZI and hit',
        ' cast a love spell on',
        ' grabbed the Frostmourne and hit',
        ' started spinning like Garen and charged into',
        ' spit on the eye of',
        ' threw a donut at',
        ' stole an NFT from',
        ' drained the balls of',
        ' installed League for',
        ' threw some robux at',
        ' pulled out his dragon balls for',
        ' jumped in the pooltec with',
        ' broke his keyboard on',
        ' pulled ass hair from',
        ' showed his fire song to',
        ' threw his airpods at',
        ' anal probed',
        ' sent a jar of mosquitoes to',
      ];
      //End of attack list

      //Start of round comment List
      let rcoms = [
        'Prepare your weapons shit heads! 🗡️',
        'No biting each other, that turns me on to watch... 😅',
        'I wasn\'t expecting one of you to get naked... 😳',
        'Gods bless the sand, this is going to be insane! 🤪',
        'My butt is already sweating just from watching, hahaha 💦',
        'Lord Beerus said you can\'t drink that... Sorry, let\'s start the fight! ⚔️',
        'By the Gods, that one looks like the Dragonborn 🐲',
        'Get ready, but don\'t make fun of the ugly one 😁',
        'Where the hell do they find these idiots to fight? 🤣',
        'I have seen sticks bigger than any of these two, good luck! 🤭',
        'Oy, isn\'t that the one with the slut mother? What\'s her OdinFans? 🤨',
        'Nothing personal kids 🙂',
        'Why did that one bring a fork to the fight? 🤔',
        'God all mighty that one looks like a naked mole rat... 🤢',
        'Is that one from Australia? His helmet is upside down 😂',
      ];
      //End of round comment list

      while (php1 > 0 && php2 > 0) {
        let damage1 = Number(Math.floor(((Math.random() * (52 - 0 + 1)) + 0) * amp1));
        let damage2 = Number(Math.floor(((Math.random() * (52 - 0 + 1)) + 0) * amp2));
        let rcom = rcoms[ Math.floor( Math.random() * rcoms.length) ];
        let hit1 = attack[ Math.floor( Math.random() * attack.length) ];
        let hit2 = attack[ Math.floor( Math.random() * attack.length) ];

        php1 = php1 - damage2;
        if(php1 <= 0) {
          let rstart = new Discord.MessageEmbed()
          .setTitle('The Boring Arena, 1v1 ⚔️')
          .addFields(
            { name: 'Round ' + round + '!', value: '💬 ' + rcom},
            { name: 'The crowd was impressed! 👁️', value: p1 + hit1 + p2 + ' dealing ' + damage1 + ' damage! \n\n' + p2 + hit2 + p1 + ' dealing ' + damage2 + ' damage!'},
          )
          .setColor('RANDOM');
          message.channel.send(rstart);
          break;
        }

        php2 = php2 - damage1;
        
        let rstart = new Discord.MessageEmbed()
          .setTitle('The Boring Arena, 1v1 ⚔️')
          .addFields(
            { name: 'Round ' + round + '!', value: '💬 ' + rcom},
            { name: 'The crowd was impressed! 👁️', value: p1 + hit1 + p2 + ' dealing ' + damage1 + ' damage! \n\n' + p2 + hit2 + p1 + ' dealing ' + damage2 + ' damage!'},
          )
          .setColor('RANDOM');
        message.channel.send(rstart);

        round++;
        await sleep(3000);
      }

      let rdata = new Discord.MessageEmbed()
          .addFields(
            { name: 'Here are the round results...', value: p1 + ' was left with ' + php1 + ' health! ❤️ \n' + p2 + ' was left with ' + php2 + ' health! ❤️ \n'},
          )
          .setColor('RANDOM');
        message.channel.send(rdata);

      //Maybe add comments in the end from winner to the loser
      if (php1 < php2) {
        let loser = new Discord.MessageEmbed()
          .setTitle('The challenger has lost! 😭')
          .setDescription('ooof, looks like' + p2 + ' won! \n\n May the Gods bless' + p1 + ' with better luck in the after life 🩸')
          .setImage('https://cdn.discordapp.com/attachments/371044619795824640/835077434721828874/images.png')
          .setColor('#f20000');
        message.channel.send(loser);
        } else {
          let winner = new Discord.MessageEmbed()
            .setTitle('The challenger has won! 🏆')
            .setDescription('Our champion' + p1 + ' won! \n\n I knew' + p2 + ' never had a chance! 🥀')
            .setImage('https://cdn.discordapp.com/attachments/371044619795824640/835077358230175764/Z.png')
            .setColor('#00f504');
          message.channel.send(winner);
      }
    } else {
      let solo = new Discord.MessageEmbed()
        .setDescription('Yo <@' + message.author.id + '> you can\'t fight alone... ❌')
        .setColor('#f20000');
      message.channel.send(solo);
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}