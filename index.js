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

client.once('ready', () => {
  console.log('Boring gang is ready to go!');
})



client.login(process.env.BOT_TOKEN);