const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    var veerscheese = [
    'cmds/vpics/gveers1.jpg',
    'cmds/vpics/gveers2.jpg'
    ];

    var veerssay = [
    'My Lord, the fleet has moved out of lightspeed. Com Scan has detected an energy field protecting an area of the sixth planet of the Hoth System. The field is strong enough to deflect any bombardment.',
    'Yes, Lord Vader. I\'ve reached the main power generators. The shield will be down in moments. You may start your landing.'
    ];

    message.channel.sendFile(veerscheese[Math.floor(Math.random() * veerscheese.length)]);
    message.channel.sendMessage(veerssay[Math.floor(Math.random() * veerssay.length)]);
}

module.exports.help = {
    name: "veers"
}