module.exports = {
  name: 'donate',
  description: 'Displays info to donate to TBC',
  execute(message, args, cmd, client, Discord) {
    let donation = new Discord.MessageEmbed()
      .setTitle('Hey! Thanks for the interest in donating!')
      .setDescription('We accept only a few donation methods, the money donated is saved until X amount and then split between staff, this will also motivate and boost our mood to work on the bot and keep it going well and if necessary money will be used for upgrades and more! ')
      .addFields(
        { name: 'Normal Donation Methods 💰', value: ' Donate to us on using our [PayPal](https://www.paypal.com/paypalme/theboringclub)'},
        { name: 'Crypto Donation Methods 💱', value: '🧡 Donate to our BTC wallet: bc1qdlltvf9xyscu9s4nej53qt33vg5ew5svgp3gfp \n \n 💙 Donate to our ETH wallet: 0x1f2DDe31c5823165CBdB44b3eD2DCb01489A3015'},
      )
      .setImage('https://cdn.discordapp.com/attachments/371044619795824640/836318932738244618/Ducktales-Scrooge-Money-Bin.png')
      .setColor('YELLOW');
      message.delete();
    message.channel.send(donation);
  }
}