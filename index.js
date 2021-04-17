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

const prefix = 'b!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Boring gang is ready to go!');
});

//This is for message type of commands
client.on('message', message => {

  //Any commands after this and before the 'forced' use of prefix works as 'message detection' from users, basically someone says the word and the bot detects it

  //Request by community, to annoy a friend 🤡
  if (message.content.toUpperCase() === 'francisco enguiça'.toUpperCase()) {
    let embed = new Discord.MessageEmbed()
      .setDescription('Aproveita e chupa-me a piça 😫')
      .setColor('#f20000');
    message.channel.send(embed);
  }

  //This forces any command below this to use the bot prefix ⚠️
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase().trim();

  //Basic Command, to test bot, and to me, it's nice to have
  if (command.toUpperCase() === 'ping'.toUpperCase()) {
    client.commands.get('ping').execute(message, args, Discord);
  }

  //This is your basic and must have help command, gives info to users ⚠️
  if (command.toUpperCase() === ('help'.toUpperCase())) {
    client.commands.get('help').execute(message, args, Discord);
  }

  //This command was made with help from dfgd09#9200 🤍
  if (command.toUpperCase().startsWith('say'.toUpperCase())) {
    client.commands.get('say').execute(message, args, Discord);
  }

  //This is the invite command to our server
  if (command.toUpperCase() === ('invite'.toUpperCase())) {
    client.commands.get('invite').execute(message, args, Discord);
  }

  //For when spooky season is here :)
  if (command.toUpperCase().startsWith('boo'.toUpperCase())) {
    client.commands.get('boo').execute(message, args);
  }

  //Well... No need to explain this one, lol...
  if (command.toUpperCase() === ('fuckyou'.toUpperCase())) {
    client.commands.get('fuckyou').execute(message, args, Discord);
  }

  //Community Requested ⭐ Gives you free time things to do... or watch... anyway... 
  if (command.toUpperCase() === ('hentai'.toUpperCase())) {
    client.commands.get('hentai').execute(message, args, Discord);
  }

  //Allows you to kick users
  if (command.toUpperCase() === ('kick'.toUpperCase())) {
    client.commands.get('kick').execute(message, args, Discord);
  }

  //Allows you to ban users
  if (command.toUpperCase() === ('ban'.toUpperCase())) {
    client.commands.get('ban').execute(message, args, Discord);
  }

});

client.login(process.env.BOT_TOKEN);