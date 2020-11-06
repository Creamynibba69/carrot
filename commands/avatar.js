module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const member = message.mentions.users.first() || message.author;
    const imageURL = member.displayAvatarURL({format: 'png'})
    const avatar = new Discord.MessageEmbed()
        .setTitle(`${member.tag}'s beautiful avatar :D`)
        .setColor(`#33FFAF`)
        .setImage(`${imageURL}?size=2048`);
    message.channel.send({embed: avatar});
}

module.exports.config = {
    name: "avatar",
    description: "You can get people's avatar or your avatar.",
    usage: "/avatar",
    accessableby: "Members",
    aliases: []
}