const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log('Ready!')
});

bot.on('message', message) => {
if (message.content.startsWith(${prefix}help)) {
  message.channel.send("Zatím toho moc neumím :)")
});





bot.login(process.env.${token});
