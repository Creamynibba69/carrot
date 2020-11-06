module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Your not penguin! >:(") 
    const Discord = require('discord.js');
    const Embed = new Discord.MessageEmbed()
    .setColor(`#F47FFF`)
    .setAuthor('', '')
    .addFields( { 
        name: "World Settings",
        value: "",
        inline: false 
    },
    { 
        name: "World Settings",
        value: "",
        inline: false 
    },
    { 
        name: "World Settings",
        value: "",
        inline: false 
    } )
    .setThumbnail('')
    message.channel.send(Embed);
}

module.exports.config = {
    name: "testembed2",
    description: "Testing",
    usage: "/testembed",
    accessableby: "Admins",
    aliases: []
}