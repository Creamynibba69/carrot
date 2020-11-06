const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if(helpArgs[0] === 'gaming') {
        return message.reply("This is a Gaming information Command.")
    }

    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Here is the Avaible Commands to use:`)
            .setDescription('```| hello | avatar |announce|\n| embed | help   | sleep  |\n|    testembed   | cat    |```')
            .addFields({ name: 'Prefix', value: '```/```', inline: true})
            .setColor('#33FFAF')
            
        message.channel.send(embed);
    }
    
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(client.commands.has(command)) {
            
            command = client.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description**\n${command.config.description || "There is no Description for this command."}\n- **Command's Usage:**\n${command.config.usage || "No Usage"}\n- **Command's Permissions:**\n${command.config.accessableby || "Members"}`)
            .setColor('#33FFAF')

        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "/help",
    accessableby: "Members",
    aliases: []
}