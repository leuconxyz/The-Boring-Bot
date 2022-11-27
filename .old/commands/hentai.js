module.exports = {
  name: 'hentai',
  description: 'Gives you... Free time options...',
  execute(message, args, cmd, client, Discord) {
    let embed = new Discord.MessageEmbed()
      .setTitle('Here\'s something for you OwO')
      .addFields(
        { name: 'Manga Hentai 📖', value: 'If you want Manga hentai click [here](https://nhentai.net/)' },
        { name: 'Anime Hentai 🎥', value: 'If you want Anime hentai click [here](https://hentaihaven.com/haven/)' },
      )
      .setColor('#f20000');
    message.delete();
    message.channel.send(embed);
  }
}