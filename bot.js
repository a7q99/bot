const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTI1MzIzODcyNzk1NjIzNDI0.Dv1IXA.9NUAMi5zF-qinJk0qOu7itMqbrU);
