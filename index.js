const Discord = require('discord.js');
const botsettings = require('./config.json');

const client = new Discord.Client({disableEveryone: true});

client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
    welcomeChannel.send (`Welcome! ${member}`)
})

require("./util/eventHandler")(client)

const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err) 

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
    });
});

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)

})

client.login(process.env.token);

// const Discord = require('discord.js');
// const fs = require('fs');
// const client = new Discord.Client({ disableEveryone: true });
// const { prefix, token } = require('./config.json')
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// client.commands = new Discord.Collection();
// client.aliases = new Discord.Collection();

// //Ascii
// client.aliases = new Discord.Collection();
// client.categories = fs.readdirSync("./commands/");
// ["command"].forEach(handler=>{
//     require(`./handlers/${handler}`)(client);
// });

// //Client 
// client.on('ready', () => {
//     client.user.setActivity(`${prefix}help :D`)
//     console.log(`Logged in as ${client.user.tag}!`);
// });

// //Command Handler
// for (const file of commandFiles) {
//     const command = require(`./commands/${file}`);
//     client.commands.set(command.name, command);
// }
// client.on('message', message => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).trim().split(/ +/);
//     const command = args.shift().toLocaleLowerCase();

//     if(!client.commands.has(command)) return;
//     try {
//         client.commands.get(command).execute(message, args);
//     } catch (error) {
//         console.error(error);
//         message.channel.send('was The Imposter');
//     }
// });

// //login
// client.login(token)