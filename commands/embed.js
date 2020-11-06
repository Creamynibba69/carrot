module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const Embed = new Discord.MessageEmbed()
    .setColor(`#33FFAF`)
    .setTitle("Y'all got any cheese?")
    .setAuthor('Hamster#6969', 'https://cdn.discordapp.com/attachments/668190855365918740/746240554932633630/Hamster.gif');
    message.channel.send(Embed);
}

module.exports.config = {
    name: "embed",
    description: "Just a hamster..",
    usage: "/embed",
    accessableby: "Members",
    aliases: []
}