const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const PREFIX = ('!');

var vaderisims = [
    'I find your lack of faith disturbing ',
    'When I left you I was but the learner. Now I am the master ',
    'Don\'t fail me again ',
    'He will join us or die ',
    'Impressive. Most impressive. Obi-Wan has taught you well ',
    'You have controlled your fear. Now, release your anger. Only your hatred can destroy me ',
    'With our combined strength, we can end this destructive conflict and bring order to the galaxy ',
    'I am altering the deal. Pray I don\'t alter it any further ',
    'If you only knew the power of the Dark Side ',
    'You are beaten. It is useless to resist. Don\'t let yourself be destroyed as Obi-Wan did ',
    'Apology accepted, Captain ',
    'You have failed me for the last time ',
    'Make ready to land our troops beyond their energy field, and deploy the fleet, so that nothing gets off the system ',
    'You underestimate the power of the Dark Side. If you will not fight, then you will meet your destiny ',
    'A tremor in the Force. The last time I felt it was in the presence of ',
    'Don\'t be too proud of this technological terror you\'ve constructed ',
    'The ability to destroy a planet is insignificant next to the power of the Force ',
    'You were weak when I found you. I did not expect you to survive your training. But now, your hatred has become your strength. At last, the dark side is your ally ',
    'I hope so for your sake, the emperor is not as forgiving as I am ',
    'You are a part of the Rebel Alliance and a traitor ',
    'You are unwise to lower your defenses ',
    'If he could be turned, he would be a powerful ally ',
    'Search your feelings, you know it to be true ',
    'No. I am your father ',
    'What is thy bidding, '
];

client.on('ready', () => {
    console.log('What is thy bidding my master');
});

client.on('guildMemberAdd', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage('Welcome ' + member.user.username + ', our newest Imperial Cadet!')
}); 

client.on('message', message => {
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(' ');
    switch (args[0].toLowerCase()) {
        case 'hello':
            message.channel.sendMessage('Rebel scum!');
            break;

        case 'hi':
            message.channel.sendMessage('Rebel scum!');
            break;

        case 'rng':
            message.channel.sendMessage(vaderisims[Math.floor(Math.random() * vaderisims.length)] + message.author.username + '.');
            break;

        case 'rules':
            var embed = new Discord.RichEmbed()
            .addField('General', 'All members are to spend 600 energy a day to generate the maximum amount of raid tickets.\nAll members must join our discord server within 48 hours of joining the guild.')
            .addField('Tier 6 Pit Raid', 'Members level 75 and under may openly attack during the first 24 hours of the raid.  Members level 76 and over may openly attack after the initial 24 hours. Members 76 and over may send in a single 6 or 7 star character during the first 24 hours. This character will do zero damage and only serves the purpose of registering that member in the raid.')
            .addField('Tier 7 Pit Raid', 'During the first 24 hours of the raid all members are allowed to send in one character. This character will do zero damage and only serves the purpose of registering that member in the raid. After the initial 24 hours all members may openly attack.')
            .setColor('0x00FF00')
            message.channel.sendEmbed(embed);
            break;

        case 'aayla':
        case 'aayla-secura':
            var embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/bHtZVQS.png')
            .addField('Aayla Secura', 'Versatile attacker with high survivability through Dodge, Hitpoints, and self healing.')
            .addField('Power', '8851', true)
            .addField('Speed', '125', true)
            .addField('Health', '21490', true)
            .addField('Inspiring Strike', 'Deal Physical damage to target enemy with a 35% chance to call an ally to Assist. If the assisting ally is a Jedi, they deal 50% more damage.')
            .addField('Survivor', 'Deal Physical damage to target enemy and recover Health equal to 65% of the damage dealt.')
            .addField('Jedi Valor', 'Jedi allies gain 40% Tenacity and recover 10% of thier Max Health when they ward off an effect.')
            .addField('Superior Riposte', 'Aayla has +10% Critical Chance, 65% Counter Chance and +50% Counter Damage. In addition, she Stuns her target for 1 turn whenever she critically hits.')
            .setColor('0x0000FF')
            message.channel.sendEmbed(embed);
            break;

        case 'ackbar':
        case 'admiral-ackbar':
            var embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/YmjNJSt.png')
            .addField('Admiral Ackbar', 'Rebel Support that can Dispel debuffs and grant allies extra turns.')
            .addField('Power', '9050', true)
            .addField('Speed', '119', true)
            .addField('Health', '17520', true)
            .addField('Quick Shot', 'Deal Physical damage to target enemy with a 55% chance to gain 45% Turn Meter.')
            .addField('It\'s a Trap!', 'Dispel all negative status effects from all allies. Each ally recovers 9% of thier Max Health for each effect dispelled this way. Admiral Ackbar has a 25% chance to gain 40% Turn Meter.')
            .addField('Tactical Genius', 'Ackbar grants each ally the Tactical Genius effect. The first ally to use a Special ability while they have this effect gains 100% Turn Meter and recovers 30% of thier Max Health. Tactical Genius ends whenever an ally triggers this effect or at the end of Ackbar\'s next turn.')
            .addField('Rebel Coordination', 'Rebel allies have +25 speed and +10% Tenacity. In addition, whenever an ally uses an ability that isn\'t an attack, they call a Rebel ally to Assist.')
            .setColor('0x0000FF')
            message.channel.sendEmbed(embed);
            break;

        case 'ahsoka':
        case 'ahsoka-tano':
            var embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/pHRl8nU.png')
            .addField('Ahsoka Tano', 'Versatile Attacker with healing and superior stats as long as she can avoid suffering Critical Hits.')
            .addField('Power', '8311', true)
            .addField('Speed', '105', true)
            .addField('Health', '16536', true)
            .addField('Energetic Slash', 'Deal Physical damage to target enemy and Ahsoka recovers Health equal to 20% of her Max Health, increased to 30% on a Critical Hit.')
            .addField('Protective Maneuver', 'Deal Physical damage to target enemy. If the target had 50% Health or more, all allies recover Health equal to 30% of Ahsoka\'s Max Health; otherwise, thisattack deals 50% more damage.')
            .addField('Quick Steps', 'Jedi and Nightsister allies have +14% Evasion, and gain 20% Turn Meter whenever they Evade.')
            .addField('Daring Padawan', 'Ahsoka has +45% Health, +45 Speed, and +15% Critical Chance. When Critically Hit, she lses one effect. When she defeats an enemy, she regains all of them. If Jedi Knight Anakin is present, Ahsoka gains Critical Hit Immunity for 2 turns at the start of each encounter and whenever she uses a Special ability.')
            .setColor('0x0000FF')
            message.channel.sendEmbed(embed);
            break;

        case 'mob-enforcer':
            var embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/hABGveR.png')
            .addField('Mob Enforcer', 'Scoundrel Tank with enemy debuff ability and a thermal detonator.')
            .addField('Power', '8840', true)
            .addField('Speed', '132', true)
            .addField('Health', '21755', true)
            .addField('Dirty Fighting', 'Deal Physical damage to target enemy with an 80% chance to inflict Defense Down for 2 turns.')
            .addField('Thermal Detonator', 'Place a Thermal Detonator on target enemy that explodes after 2 Turns with a 40% chance for Mob Enforcer to gain 25% Turn Meter.')
            .addField('Underworld Moxie', 'Mob Enforcer gains 15% Max Health for each living Scoundrel ally. In addition, whenever an ally falls below 30% Health, there is a 70% chance that Mob Enforcer will gain Offense Up for 2 turns.')
            .setColor('0xFF0000')
            message.channel.sendEmbed(embed);
            break;

        default:
            message.channel.sendMessage('Invalid command!');
    }
});

client.login(settings.token);