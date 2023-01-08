const { Client, GatewayIntentBits } = require('discord.js');


const prefix = '!';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});




client.on("ready", ()=> {
    console.log("i am online")
})

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix)||message.author.bit) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

if (command === 'text'){
    message.channel.send('This is test bot')
}
    
})



client.login("add your bot token here")