const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()
        .addField('!ability', 'Gives a swgoh.gg link to the specified character along with a list of recommended mods.')
        .addField('!energy', 'Provides a link to the Daily Energy Spent / Raid Ticket Generation Spreadsheet.')
        .addField('!activity', 'Shows how to maximize guild tokens for the specified day.')
        .addField('!help', 'Displays info for all available commands.')
        .addField('!kylo', 'Diplays a random picture of Kylo Ren.')
        .addField('!links', 'Displays a list of links from forums to tools.')
        .addField('!pao', 'Displays a simple battle cry.')
        .addField('!rng', 'Displays a random quote from Darth Vader.')
        .addField('!rules', 'Displays the guild rules.')
        .addField('!sheet', 'Provides a link to the HAAT Readiness Spreadsheet.')
        .addField('!vader', 'Diplays a random picture of Darth Vader.')
        .addField('!veers', 'Displays a random quote and picture of General Maximilian Veers for Deasy.')
        .setColor('0x00FF00')
        message.author.send({embed: embed});
}

module.exports.help = {
    name: "help"
}