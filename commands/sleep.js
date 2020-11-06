module.exports.run = async (client, message, args) => {
const Discord = require('discord.js');
const Canvas = require('canvas');
const member = message.mentions.users.first() || message.author;

const canvas = Canvas.createCanvas(1300, 800);
const ctx = canvas.getContext('2d');

const background = await Canvas.loadImage('./images/sleep.png');
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

const avatar = await Canvas.loadImage(member.displayAvatarURL({ format: 'png' }));
ctx.rotate(90 * Math.PI / 180);
ctx.drawImage(avatar, 137, -950, 612, 612);

const edit = await Canvas.loadImage('./images/sleep_edit.png');
ctx.rotate(-90 * Math.PI / 180);
ctx.drawImage(edit, 0, 0, canvas.width, canvas.height);

const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Sleep.png');

message.channel.send(attachment);

}

module.exports.config = {
    name: "sleep",
    description: "ZZz..",
    usage: "/sleep",
    accessableby: "Members",
    aliases: []
}