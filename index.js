//This code is to be ignored by outsiders ⛔
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Hell!");
});

app.listen(3000, () => {
  console.log("Project dropping into the AO!");
});

//Bot coding starts here 🤖
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const prefix = 'b!'

client.once('ready', () => {
  console.log('Boring gang is ready to go!');
});

//This is for message type of commands
client.on('message', message => {
  //Basic Command, to test bot, and to me, it's nice to have
   if(message.content.toUpperCase() === 'ping'.toUpperCase()) {
    let embed = new Discord.MessageEmbed()
      .setDescription('Pong 🏓')
      .setColor('#f20000');
    message.channel.send(embed);
  }
  //This forces any command below this to use the bot prefix ⚠️
  if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

  //This command was made with help from dfgd09#9200 🤍
  if(command.toUpperCase().startsWith('say'.toUpperCase())) {
    const splitted = message.content.split(' ');
    splitted.shift();
    let embed = new Discord.MessageEmbed()
      .setDescription(`${splitted.join(' ')}`)
      .setColor('RANDOM');
    message.channel.send(embed);
  }

});

client.login(process.env.BOT_TOKEN);