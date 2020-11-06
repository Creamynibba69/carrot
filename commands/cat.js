module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const Canvas = require('canvas');
    const member = message.mentions.users.first() || message.author;
    
    const canvas = Canvas.createCanvas(1800, 1200);
    const ctx = canvas.getContext('2d');
    
    const background = await Canvas.loadImage('./images/cat.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    const avatar = await Canvas.loadImage(member.displayAvatarURL({ format: 'png' }));
    ctx.rotate(45 * Math.PI / 180);
    ctx.drawImage(avatar, 0, 0, 612, 612);
    
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'yes.png');
    
    message.channel.send(attachment);

    }
    
    module.exports.config = {
        name: "cat",
        description: "Cat",
        usage: "/cat",
        accessableby: "Members",
        aliases: []
    }

    // ctx.beginPath();
	// ctx.arc(306, 306, 300, 0, Math.PI * 2, true);
	// ctx.closePath();
	// ctx.clip();