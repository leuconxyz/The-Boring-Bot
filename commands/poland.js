module.exports = {
  name: 'poland',
  description: 'Shows our love for Poland and their beautiful people, aka, Chris The Pyro',
  execute(message, args, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle('Poland? We love Poland 💞')
      .setDescription('Here is our polish friend burning down his house with a DIY Flamethrower, very safe and controlled yes! 🤩')
      .setImage('https://cdn.discordapp.com/attachments/665853986322120706/816280504222744636/nPiN4GWEAC.gif')
      .setFooter('All bow before the powerful pyro! 🔥', 'https://tf2.wiki/w/images/thumb/c/c8/Pyro.png/375px-Pyro.png')
      .setColor('#f20000');
    message.delete();
    message.channel.send(embed);
  }
}