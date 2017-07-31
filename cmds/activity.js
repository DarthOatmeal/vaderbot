const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    if(args[0] === 'monday') {
        let embed = new Discord.RichEmbed()
            .addField('Before Reset', 'Use all Cantina Energy.')
            .addField('After Reset', 'Use all energy on Light Side Missions.')
            .addField('Misc', 'Do Not Complete Monday\'s Galactic War \(Enter & Retreat to receive daily\).')
            .setColor('0x00FF00')
            message.author.send({embed: embed});
    } else

    if(args[0] === 'tuesday') {
        let embed = new Discord.RichEmbed()
            .addField('Before Reset', 'Use all energy on Light Side Missions.')
            .addField('After Reset', 'Complete Monday\'s and Tuesday\'s Galactic War.')
            .setColor('0x00FF00')
            message.author.send({embed: embed});
    } else

    if(args[0] === 'wednesday') {
        let embed = new Discord.RichEmbed()
            .addField('Before Reset', 'Complete Wednesday\'s Galactic War.')
            .addField('After Reset', 'Use all energy on Hard Mode Missions.')
            .setColor('0x00FF00')
            message.author.send({embed: embed});
    } else

    if(args[0] === 'thursday') {
        let embed = new Discord.RichEmbed()
            .addField('Before Reset', 'Use all energy on Hard Mode Missions.')
            .addField('After Reset', 'Complete Daily Challenges.')
            .setColor('0x00FF00')
            message.author.send({embed: embed});
    } else

    if(args[0] === 'friday') {
        let embed = new Discord.RichEmbed()
            .addField('Before Reset', 'Complete Daily Challenges.')
            .addField('After Reset', 'Use all energy on Dark Side Missions.')
            .setColor('0x00FF00')
            message.author.send({embed: embed});
    } else

    if(args[0] === 'saturday') {
        let embed = new Discord.RichEmbed()
            .addField('Before Reset', 'Use all energy on Dark Side Missions.')
            .addField('After Reset', 'Complete Arena Matches.')
            .setColor('0x00FF00')
            message.author.send({embed: embed});
    } else  

    if(args[0] === 'sunday') {
        let embed = new Discord.RichEmbed()
            .addField('Before Reset', 'Complete Arena Matches.')
            .addField('After Reset', 'Use all Cantina Energy.')
            .setColor('0x00FF00')
            message.author.send({embed: embed});
    }
}

module.exports.help = {
    name: "activity"
}