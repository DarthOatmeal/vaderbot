const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    var kylocheese = [
    'cmds/vpics/k1.jpg',
    'cmds/vpics/k2.jpg',
    'cmds/vpics/k3.jpg',
    'cmds/vpics/k4.jpg',
    'cmds/vpics/k5.jpg',
    'cmds/vpics/k6.jpg',
    'cmds/vpics/k7.jpg',
    'cmds/vpics/k8.jpg',
    'cmds/vpics/k9.jpg',
    'cmds/vpics/k10.jpg',
    'cmds/vpics/k11.jpg',
    'cmds/vpics/k12.jpg',
    'cmds/vpics/k13.jpg',
    'cmds/vpics/k14.jpg',
    'cmds/vpics/k15.jpg'
    ];

    message.channel.sendFile(kylocheese[Math.floor(Math.random() * kylocheese.length)]);
}

module.exports.help = {
    name: "kylo"
}