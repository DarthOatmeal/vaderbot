const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
        .addField('General', 'All members are to spend 600 energy a day to generate the maximum amount of raid tickets.\n\nAll members must join our discord server within 48 hours of joining the guild.\n\nAnyone who is inactive for more than 5 days at a time will be kicked unless previously discussed.')
        .addField('Tier 6 Pit Raid', 'Members level 75 and under may openly attack during the first 24 hours of the raid.\n\nMembers level 76 and over may openly attack after the initial 24 hours.\n\nMembers 76 and over may send in a single 6 or 7 star character during the first 24 hours. This character will do zero damage and only serves the purpose of registering that member in the raid.')
        .addField('Tier 7 Pit Raid', 'During the first 24 hours of the raid all members are allowed to send in one character. This character will do zero damage and only serves the purpose of registering that member in the raid.\n\nAfter the initial 24 hours all members may openly attack.')
        .setColor('0x00FF00')
        message.author.send({embed: embed});
}

module.exports.help = {
    name: "rules"
}