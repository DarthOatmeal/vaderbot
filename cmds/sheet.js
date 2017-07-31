const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()
        .setTitle('HAAT Readiness Spreadsheet')
        .setURL('https://docs.google.com/spreadsheets/d/1XeC2NhaEUw8G8Pa3-7EX6TNpMgzyCplvSguriKUrmeA/edit?usp=sharing')
        .setDescription('Will take you to the google doc.')
        .setColor('0x00FF00')
        message.channel.send({embed: embed});
}

module.exports.help = {
    name: "sheet"
}