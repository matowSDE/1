const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
let channel =     client.channels.get("727169269036744774")
setInterval(function() {
channel.send(`الحمد لله علي كل حال الحمد لله علي كل حال الحمد لله علي كل حال الحمد لله علي كل حال الحمد لله علي كل حال الحمد لله علي كل حال الحمد لله علي كل حال الحمد لله علي كل حال الحمد لله علي كل حال الحمد لله علي كل حال الحمد لله علي كل حال`);
}, 30)
})

client.login(process.env.BOT_TOKEN);