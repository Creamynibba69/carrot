module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Your not penguin! >:(") 
    const Discord = require('discord.js');
    const Embed = new Discord.MessageEmbed()
    .setColor(`#F47FFF`)
    .setAuthor('Cwaft Realm', 'https://media.discordapp.net/attachments/746415967235604524/772367258311196692/Minecraft.gif')
    .addFields( { 
        name: "World Settings",
        value: "==============\n<:Iron:773736159108530177> **Default Game Mode**\n  <:Gold:773736198886916106> Survival\n\n<:Iron:773736159108530177> **Difficulty**\n  <:Gold:773736198886916106> Hard\n\n<:Iron:773736159108530177> **Seed**\n  <:Gold:773736198886916106> ||No Stop It! :-:||\n\n<:Iron:773736159108530177> **World Options**\n  <:Gold:773736198886916106> Friendly Fire\n    <:Diamond:773736230772146177> `Enable`\n  <:Gold:773736198886916106> Show Coordinates\n    <:Diamond:773736230772146177> `Disable`\n  <:Gold:773736198886916106> Fire Spread\n    <:Diamond:773736230772146177> `Enable`\n  <:Gold:773736198886916106> TNT Explodes\n    <:Diamond:773736230772146177> `Enable`\n\n<:Iron:773736159108530177> **Join The Cwaft Realm!!**\n  <:Gold:773736198886916106> [Click here](https://realms.gg/x2PTEuWGtRQ)\n  <:Gold:773736198886916106> Code (playstation, Switch, and Xbox only)\n    <:Diamond:773736230772146177> `x2PTEuWGtRQ`",
        inline: false 
    },
    {
        name: "Rules",
        value: "==============\n<:Iron:773736159108530177> **Universal Rules**\n  <:Gold:773736198886916106> No Killing Pets\n  <:Gold:773736198886916106> No Griefing\n  <:Gold:773736198886916106> No Stealing\n  <:Gold:773736198886916106> No Breaking Redstone\n  <:Gold:773736198886916106> No Curing Villagers\n  <:Gold:773736198886916106> No Loading Unnecessary Chunks\n\n<:Iron:773736159108530177> **Territorial Rules**\n  <:Gold:773736198886916106> You make them! :D [For your own land]\n  <:Gold:773736198886916106> Must not conflict with Universal rules\n  <:Gold:773736198886916106> Must have a way for people to know your rules\n\n<:Iron:773736159108530177> **Consequences**\n  <:Gold:773736198886916106> If any of the Universal Rules are broken, you are prone to being a visitor for a few hours.\n  <:Gold:773736198886916106> If any Territorial Rules are broken, the land owner can choose the punishment.Yes, War is an option.",
        inline: false
    },
    {
        name: "Helpful Tips",
        value: "==============\n<:Emerald:696274817309212683> **OverWorld**\n  <:RedstoneDust:773774578295111751> Lava mostly generate below y-level 11 so you can find diamonds.\n  <:RedstoneDust:773774578295111751> Slimes spawn below y-level 40.\n  <:RedstoneDust:773774578295111751> You can use maps to find chunk borders.\n\n<:Emerald:696274817309212683> **Nether**\n  <:RedstoneDust:773774578295111751> Wear diamond/netherite armor with protection/fire protection IV, so you can survive in lava for 1 minute.\n  <:RedstoneDust:773774578295111751> Always be sure to use the lodestone block and a compass so you can't get lost in the nether.\n\n<:Emerald:696274817309212683> **The End**\n  <:RedstoneDust:773774578295111751> Use potions like invisibility, slowfall, and strength and full set of netherite armor to fight the dragon.\n  <:RedstoneDust:773774578295111751> You can use lodestone to find your way out of the outer islands or try to keep exploring because the exit gateway generate randomly in the outer islands.",
        inline: false
    } )
    .setThumbnail('https://media.discordapp.net/attachments/746415967235604524/772365575556825108/Realm.png')
    message.channel.send(Embed);
}

module.exports.config = {
    name: "testembed",
    description: "Testing",
    usage: "/testembed",
    accessableby: "Admins",
    aliases: []
}