//This code is to be ignored by outsiders ⛔
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to The Boring Club!");
});

app.listen(3000, () => {
  console.log("Project dropping into the AO!");
});

//Bot coding starts here 🤖
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const mongoose = require('mongoose');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach((handler) =>{
  require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect(process.env.MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(()=>{
  console.log('Database Online!');
}).catch((err)=>{
  console.log(err);
});

client.login(process.env.BOT_TOKEN);
