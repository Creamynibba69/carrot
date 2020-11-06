module.exports.run = async (client, message, args) => {

    let replies = ["Hi!", "I was at medbay", "You seem very sus", "Where?"];
    let result = Math.floor((Math.random() * replies.length));

      message.channel.send(replies[result]);
}

module.exports.config = {
    name: "hello",
    description: "Answers hello",
    usage: "/hello",
    accessableby: "Members",
    aliases: []
}