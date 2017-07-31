const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    var paocheese = [
    'cmds/vpics/paoimg.jpg'
    ];

    message.channel.sendFile(paocheese[Math.floor(Math.random() * paocheese.length)]);
}

module.exports.help = {
    name: "pao"
}