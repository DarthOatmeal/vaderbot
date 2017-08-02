const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()
        .setTitle('Daily Energy Spent / Raid Ticket Generation')
        .setURL('https://docs.google.com/spreadsheets/d/1M7LxHTAWkM_OW541wGKo0azFiukpz0Gb6CV43nwdW-0/edit?usp=sharing')
        .setDescription('Will take you to the google doc.')
        .setColor('0x00FF00')
        message.channel.send({embed: embed});
}

module.exports.help = {
    name: "energy"
}