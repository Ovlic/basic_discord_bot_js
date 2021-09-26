// After node.js is installed, run 'npm install' to install the modules required.

// Defining modules
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

// Creating commands
client.commands = new Discord.Collection();
const CommandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// Loop through all files in command folder and save the command names
for(const file of CommandFiles){
    const command = require (`./commands/${file}`)
    client.commands.set(command.name, command)
}

// Once the bot is ready to go online
client.once('ready', async () => {
    console.log("Bot is online!");

    // If theres an error, this code will prevent the bot from crashing, it will just print it to the console.
    process.on('unhandledRejection', error => {
        console.error('Unhandled promise rejection:', error);
    });
});

// When the client detects a message
client.on('message', message =>{
    // If the message doesn't start with the prefix or the author is a bot do nothing.
    if(!message.content.startsWith(prefix,0) || message.author.bot) return;

    // Get text after command (example: .ban <user>, user would be an argument)
    const args = message.content.slice(prefix.length).split(/ +/);

    // Get command (example: .ping)
    const command = args.shift().toLowerCase();

    // Look for the command and if it is found, run the command
    client.commands.get(command).execute(message, args, client)
})


// Run the bot by typing the command 'node .'
client.login("Your-Token-Here");