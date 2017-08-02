const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    if(args[0] === 'aayla' || args[0] === 'aayla' && args[1] === 'secura') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Aayla Secura', 'http://imgur.com/bHtZVQS.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/aayla-secura/')
            .addField('Mods', '**Primary:**\n- Critical Chance\n- Critical Chance\n- Critical Chance\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else
    
    if(args[0] === 'ackbar' || args[0] === 'admiral' && args[1] === 'ackbar') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Admiral Ackbar', 'http://imgur.com/YmjNJSt.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/admiral-ackbar/')
            .addField('Mods', '**Primary:**\n- Speed\n- Tenacity\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ahsoka' || args[0] === 'ahsoka' && args[1] === 'tano' || args[0] === 'snips') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Ahsoka Tano', 'http://imgur.com/pHRl8nU.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ahsoka-tano/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'fulcrum' || args[0] === 'fat' || args[0] === 'atf' || args[0] === 'ashla') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Ahsoka Tano \(Fulcrum\)', 'http://imgur.com/dDv5DA5.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ahsoka-tano-fulcrum/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'asajj' || args[0] === 'ventress' || args[0] === 'asajj' && args[1] === 'ventress') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Asajj Ventress', 'http://imgur.com/0wWJvKI.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/asajj-ventress/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'b2' || args[0] === 'battle' && args[1] === 'droid') {
        let embed = new Discord.RichEmbed()
            .setAuthor('B2 Super Battle Droid', 'http://imgur.com/kOuiAfw.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/b2-super-battle-droid/')
            .addField('Mods', '**Primary (HK-47 lead):**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Accuracy\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Potency\n\n**Primary:**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Accuracy\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed :embed});
    } else

    if (args[0] === 'barriss' || args[0] === 'barriss' && args[1] === 'offee') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Barriss Offee', 'http://imgur.com/sDOwrIL.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/barriss-offee/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Health\n**Circle:**\n- Health\n**Cross:**\n- Health')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'baze' || args[0] === 'baze' && args[1] === 'malbus') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Baze Malbus', 'http://imgur.com/VrT5LNX.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/baze-malbus/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'biggs' || args[0] === 'biggs' && args[1] === 'darklighter') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Biggs Darklighter', 'http://imgur.com/9uLGhdJ.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/biggs-darklighter/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'bistan') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Bistan', 'http://imgur.com/OBDOApm.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/bistan/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'boba' || args[0] === 'boba' && args[1] === 'fett') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Boba Fett', 'http://imgur.com/BmEYOAG.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/boba-fett/')
            .addField('Mods', '**Primary (Leader):**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection\n\n**Primary (Attacker):**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection\n\n**Primary (Support):**\n- Potency\n- Potency\n- Potency\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'bodhi' || args[0] === 'bodhi' && args[1] === 'rook') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Bodhi Rook', 'http://imgur.com/mBOzoWI.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/bodhi-rook/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'cad' || args[0] === 'cad' && args[1] === 'bane') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Cad Bane', 'http://imgur.com/E2QynhG.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/cad-bane/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'phasma' || args[0] === 'captain' && args[1] === 'phasma') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Captain Phasma', 'http://imgur.com/E9Woidk.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/captain-phasma/')
            .addField('Mods', '**Primary:**\n- Speed\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'cassian' || args[0] === 'cassian' && args[1] === 'andor') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Cassian Andor', 'http://imgur.com/2nTls2d.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/cassian-andor/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'cody') {
        let embed = new Discord.RichEmbed()
            .setAuthor('CC-2224 Cody', 'http://imgur.com/ITro3sI.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/cc-2224-cody/')
            .addField('Mods', '**Primary (Leader):**\n- Critical Damage\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection\n\n**Primary (Attacker):**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'chirpa' || args[0] === 'chief' && args[1] === 'chirpa') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Chief Chirpa', 'http://imgur.com/OrV0tZg.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/chief-chirpa/')
            .addField('Mods', '**Primary:**\n- Speed\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'nebit' || args[0] === 'chief' && args[1] === 'nebit') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Chief Nebit', 'http://imgur.com/miJjY6k.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/chief-nebit/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'chirrut' || args[0] === 'chirrut' && args[1] === 'imwe') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Chirrut Imwe', 'http://imgur.com/xJ1NIKD.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/chirrut-imwe/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'chopper') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Chopper', 'http://imgur.com/Tz6EoP3.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/chopper/')
            .addField('Mods', '**Primary:**\n- Speed\n- Defense\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed / Protection\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'clone' && args[1] === 'sergeant') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Clone Sergeant - Phase 1', 'http://imgur.com/QmCnpo2.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/clone-sergeant-phase-i/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'chewbacca' || args[0] === 'clone' && args[1] === 'wars' && args[2] === 'chewbacca') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Clone Wars Chewbacca', 'http://imgur.com/ui3xZUB.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/clone-wars-chewbacca/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'cup' || args[0] === 'coruscant' && args[1] === 'underworld' && args[2] === 'police' || args[0] === 'underworld' && args[1] === 'police') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Coruscant Underworld Police', 'http://imgur.com/WNm8BtH.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/coruscant-underworld-police/')
            .addField('Mods', '**Primary:**\n- Potency\n- Potency\n- Potency\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Defense\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'dooku' || args[0] === 'count' && args[1] === 'dooku') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Count Dooku', 'http://imgur.com/z2Xu5TW.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/count-dooku/')
            .addField('Mods', '**Primary:**\n- Offense\n- Tenacity\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

     if (args[0] === 'echo') {
        let embed = new Discord.RichEmbed()
            .setAuthor('CT-21-0408 Echo', 'http://imgur.com/KQXZTO6.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ct-21-0408-echo/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'fives') {
        let embed = new Discord.RichEmbed()
            .setAuthor('CT-5555 Fives', 'http://imgur.com/taU8g35.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ct-5555-fives/')
            .addField('Mods', '**Primary:**\n- Defense\n- Defense\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'rex') {
        let embed = new Discord.RichEmbed()
            .setAuthor('CT-7567 Rex', 'http://imgur.com/ki6KEWC.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ct-7567-rex/')
            .addField('Mods', '**Primary (Leader):**\n- Tenacity\n- Tenacity\n- Tenacity\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity\n\n**Primary (Support):**\n- Speed\n- Tenacity\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'maul' || args[0] === 'darth' && args[1] === 'maul') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Darth Maul', 'http://imgur.com/foArZ3F.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/darth-maul/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'nihilus' || args[0] === 'darth' && args[1] === 'nihilus') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Darth Nihilus', 'http://imgur.com/uyf1Kx0.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/darth-nihilus/')
            .addField('Mods', '**Primary (Leader):**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection\n\n**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'sidious' || args[0] === 'darth' && args[1] === 'sidious') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Darth Sidious', 'http://imgur.com/9429LZy.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/darth-sidious/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'vader' || args[0] === 'darth' && args[1] === 'vader') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Darth Vader', 'http://imgur.com/vPbYoSp.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/darth-vader/')
            .addField('Mods', '**Primary (Palp lead):**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection\n\n**Primary:**\n- Potency\n- Potency\n- Potency\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'dathcha') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Dathcha', 'http://imgur.com/2eZLTZL.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/dathcha/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'death' && args[1] === 'trooper' || args[0] === 'deathtrooper') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Death Trooper', 'http://imgur.com/Cut8jcL.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/death-trooper/')
            .addField('Mods', '**Primary (Krennic lead):**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection\n\n**Primary (Palp lead):**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection\n\n**Primary (Vader lead):**\n- Critical Damage\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'dengar') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Dengar', 'http://imgur.com/ezVa25m.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/dengar/')
            .addField('Mods', '**Primary:**\n- Critical Chance\n- Critical Chance\n- Potency\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'krennic' || args[0] === 'director' && args[1] === 'krennic') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Director Krennic', 'http://imgur.com/kHCeJ7B.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/director-krennic/')
            .addField('Mods', '**Primary: (Leader)**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection\n\n**Primary: (Palp lead)**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection\n\n**Primary: (Vader lead)**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'eeth' || args[0] === 'eeth' && args[1] === 'koth') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Eeth Koth', 'http://imgur.com/Nwey8CX.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/eeth-koth/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'palpatine' || args[0] === 'emperor' && args[1] === 'palpatine') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Emperor Palpatine', 'http://imgur.com/TX1rvQi.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/emperor-palpatine/')
            .addField('Mods', '**Primary (Leader):**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Protection\n\n**Primary:**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ewok' && args[1] === 'elder') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Ewok Elder', 'http://imgur.com/94azvWg.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ewok-elder/')
            .addField('Mods', '**Primary:**\n- Speed\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ewok' && args[1] === 'scout') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Ewok Scout', 'http://imgur.com/pXeU9IT.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ewok-scout/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ezra' || args[0] === 'ezra' && args[1] === 'bridger') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Ezra Bridger', 'http://imgur.com/hLf7Dsi.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ezra-bridger/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'finn') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Finn', 'http://imgur.com/GNkS6Wp.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/finn/')
            .addField('Mods', '**Primary:**\n- Speed\n- Defense\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'foo' || args[0] === 'first' && args[1] === 'order' && args[2] === 'officer') {
        let embed = new Discord.RichEmbed()
            .setAuthor('First Order Officer', 'http://imgur.com/J0lxEim.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/first-order-officer/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'fost' || args[0] === 'first' && args[1] === 'order' && args[2] === 'stormtrooper') {
        let embed = new Discord.RichEmbed()
            .setAuthor('First Order Stormtrooper', 'http://imgur.com/VSYGHK5.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/first-order-stormtrooper/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Potency\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'fotp' || args[0] === 'first' && args[1] === 'order' && args[2] === 'tie' && args[3] === 'pilot') {
        let embed = new Discord.RichEmbed()
            .setAuthor('First Order TIE Pilot', 'http://imgur.com/IGcU3ud.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/first-order-tie-pilot/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'gamorrean' && args[1] === 'guard' || args[0] === 'gam' && args[1] === 'guard') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Gamorrean Guard', 'http://imgur.com/xpUq9I4.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/gamorrean-guard/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'gar' && args[1] === 'saxon') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Gar Saxon', 'http://imgur.com/yn7jjqA.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/gar-saxon/')
            .addField('Mods', '**Primary:**\n- Potency\n- Potency\n- Potency\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'garazeb' && args[1] === 'orrelios' || args[0] === 'zeb' || args[0] === 'garazeb') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Garazeb "Zeb" Orrelios', 'http://imgur.com/V6GBw7t.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/garazeb-zeb-orrelios/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'general' && args[1] === 'grievous' || args[0] === 'grievous') {
        let embed = new Discord.RichEmbed()
            .setAuthor('General Grievous', 'http://imgur.com/V0mXnhU.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/general-grievous/')
            .addField('Mods', '**Primary (HK-47 lead):**\n- Critical Damage\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Potency\n\n**Primary:**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'general' && args[1] === 'kenobi') {
        let embed = new Discord.RichEmbed()
            .setAuthor('General Kenobi', 'http://imgur.com/ylsuJum.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/general-kenobi/')
            .addField('Mods', '**Primary:**\n- Tenacity\n- Defense\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'veers' || args[0] === 'general' && args[1] === 'veers') {
        let embed = new Discord.RichEmbed()
            .setAuthor('General Veers', 'http://imgur.com/QUCNRZR.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/general-veers/')
            .addField('Mods', '**Primary (Leader):**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Offense\n\nPrimary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'gs' || args[0] === 'geonosian' && args[1] === 'soldier') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Geonosian Soldier', 'http://imgur.com/aTg2EIU.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/geonosian-soldier/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'geonosian' && args[1] === 'spy') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Geonosian Spy', 'http://imgur.com/G8uIbCd.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/geonosian-spy/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'grand' && args[1] === 'admiral' && args[2] === 'thrawn' || args[0] === 'thrawn') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Grand Admiral Thrawn', 'http://imgur.com/T0LE0uG.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/grand-admiral-thrawn/')
            .addField('Mods', '**Primary:**\n- Speed\n- Tenacity\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'grand' && args[1] === 'master' && args[2] === 'yoda' || args[0] === 'yoda') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Grand Master Yoda', 'http://imgur.com/nwLZBkt.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/grand-master-yoda/')
            .addField('Mods', '**Primary:**\n- Speed\n- Tenacity\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'grand' && args[1] === 'moff' && args[2] === 'tarkin' || args[0] === 'tarkin') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Grand Moff Tarkin', 'http://imgur.com/tJQmfmf.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/grand-moff-tarkin/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'greedo') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Greedo', 'http://imgur.com/zq7nvnw.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/greedo/')
            .addField('Mods', '**Primary:**\n- Potency\n- Critical Chance\n- Critical Chance\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offence\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'han' || args[0] === 'han' && args[1] === 'solo') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Han Solo', 'http://imgur.com/m3J1kA7.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/han-solo/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'hera' || args[0] === 'hera' && args[1] === 'syndulla') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Hera Syndulla', 'http://imgur.com/rgNYaD0.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/hera-syndulla/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Tenacity\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'hk-47' || args[0] === 'hk47') {
        let embed = new Discord.RichEmbed()
            .setAuthor('HK-47', 'http://imgur.com/OGFqeR6.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/hk-47/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'hoth' && args[1] === 'rebel' && args[2] === 'scout') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Hoth Rebel Scout', 'http://imgur.com/bxYNt7U.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/hoth-rebel-scout/')
            .addField('Mods', '**Primary:**\n- Offense\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'hoth' && args[1] === 'rebel' && args[2] === 'soldier') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Hoth Rebel Soldier', 'http://imgur.com/5oLqq82.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/hoth-rebel-soldier/')
            .addField('Mods', '**Primary:**\n- Health\n- Defense\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ig-100' || args[0] === 'ig100' || args[0] === 'magnaguard' || args[0] === 'ig100' && args[1] === 'magnaguard' || args[0] === 'ig-100' && args[1] === 'magnaguard') {
        let embed = new Discord.RichEmbed()
            .setAuthor('IG-100 MagnaGuard', 'http://imgur.com/FkZSN7D.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ig-100-magnaguard/')
            .addField('Mods', '**Primary:**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ig-86' || args[0] === 'ig86' || args[0] === 'ig86' && args[1] === 'sentinel' && args[2] === 'droid' || args[0] === 'ig-86' && args[1] === 'sentinel' && args[2] === 'droid') {
        let embed = new Discord.RichEmbed()
            .setAuthor('IG-86 Sentinel Droid', 'http://imgur.com/3DM4rw1.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ig-86-sentinel-droid/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ig-88' || args[0] === 'ig88') {
        let embed = new Discord.RichEmbed()
            .setAuthor('IG-88', 'http://imgur.com/JVhX1v1.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ig-88/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ima-gun' && args[1] === 'di' || args[0] === 'ima' && args[1] === 'gun' && ars[2] === 'di') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Ima-Gun Di', 'http://imgur.com/TCGlNfv.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ima-gun-di/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'isc' || args[0] === 'imperial' && args[1] === 'super' && ars[2] === 'commando') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Imperial Super Commando', 'http://imgur.com/wEMBSzA.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/imperial-super-commando/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'jawa') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Jawa', 'http://imgur.com/WSpxUyV.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/jawa/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'je') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Jawa Engineer', 'http://imgur.com/VcFs2rb.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/jawa-engineer/')
            .addField('Mods', '**Primary:**\n- Speed\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'js') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Jawa Scavenger', 'http://imgur.com/huhSvfy.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/jawa-scavenger/')
            .addField('Mods', '**Primary:**\n- Critical Chance\n- Critical Chance\n- Critical Chance\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'jedi' && args[1] === 'consular') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Jedi Consular', 'http://imgur.com/wie7UOc.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/jedi-consular/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'jedi' && args[1] === 'knight' && args[2] === 'anakin') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Jedi Knight Anakin', 'http://imgur.com/bUXQJ2N.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/jedi-knight-anakin/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'jedi' && args[1] === 'knight' && args[2] === 'guardian') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Jedi Knight Guardian', 'http://imgur.com/ufbL4Li.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/jedi-knight-guardian/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'jyn' || args[0] === 'jyn' && args[1] === 'erso') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Jyn Erso', 'http://imgur.com/WFyDAoC.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/jyn-erso/')
            .addField('Mods', '**Primary:**\n- Critical Chance\n- Critical Chance\n- Critical Chance\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'k-2so' || args[0] === 'k2so') {
        let embed = new Discord.RichEmbed()
            .setAuthor('K-2SO', 'http://imgur.com/cvAUmmF.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/k-2so/')
            .addField('Mods', '**Primary:**\n- Tenacity\n- Tenacity\n- Tenacity\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'kanan' || args[0] === 'kanan' && args[1] === 'jarrus') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Kanan Jarrus', 'http://imgur.com/U22p3WL.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/kanan-jarrus/')
            .addField('Mods', '**Primary:**\n- Critical Chance\n- Critical Chance\n- Tenacity\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'kit' || args[0] === 'kit' && args[1] === 'fisto') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Kit Fisto', 'http://imgur.com/9MU8gOD.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/kit-fisto/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'kylo' || args[0] === 'kylo' && args[1] === 'ren') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Kylo Ren', 'http://imgur.com/6jgR4Th.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/kylo-ren/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'lando' || args[0] === 'lando' && args[1] === 'calrissian') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Lando Calrissian', 'http://imgur.com/GUOeeAU.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/lando-calrissian/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'lobot') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Lobot', 'http://imgur.com/PftXWTy.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/lobot/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'logray') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Logray', 'http://imgur.com/1EGt5iN.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/logray/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'luke' && args[1] === 'skywalker') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Luke Skywalker', 'http://imgur.com/CYAu4Ry.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/luke-skywalker/')
            .addField('Mods', '**Primary:**\n- Critical Chance\n- Critical Chance\n- Potency\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'luminara' && args[1] === 'unduli' || args[0] === 'luminara') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Luminara Unduli', 'http://imgur.com/mpcrYaD.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/luminara-unduli/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Health / Protection\n**Circle:**\n- Health / Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'mace' && args[1] === 'windu' || args[0] === 'mace') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Mace Windu', 'http://imgur.com/CsXSQyz.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/mace-windu/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'magmatrooper') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Magmatrooper', 'http://imgur.com/rFwotPy.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/magmatrooper/')
            .addField('Mods', '**Primary:**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'mob' && args[1] === 'enforcer') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Mob Enforcer', 'http://imgur.com/hABGveR.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/mob-enforcer/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'nightsister' && args[1] === 'acolyte') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Nightsister Acolyte', 'http://imgur.com/YH0U1KX.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/nightsister-acolyte/')
            .addField('Mods', '**Primary:**\n- Critical Chance\n- Health\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'nightsister' && args[1] === 'initiate') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Nightsister Initiate', 'http://imgur.com/DH3aqWO.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/nightsister-initiate/')
            .addField('Mods', '**Primary:**\n- Defense\n- Defense\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'nute' && args[1] === 'gunray' || args[0] === 'nute') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Nute Gunray', 'http://imgur.com/L6WvYfQ.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/nute-gunray/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'obi-wan' && args[1] === 'kenobi' || args[0] === 'obi' && args[1] === 'wan' && args[2] === 'kenobi' || args[0] === 'old' && args[1] === 'ben') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Obi-Wan Kenobi (Old Ben)', 'http://imgur.com/2QDU3sP.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/obi-wan-kenobi-old-ben/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'old' && args[1] === 'daka') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Old Daka', 'http://imgur.com/bCxYgX9.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/old-daka/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'pao') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Pao', 'http://imgur.com/2ktlMdi.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/pao/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'paploo') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Paploo', 'http://imgur.com/VFvUThf.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/paploo/')
            .addField('Mods', '**Primary (with Logray):**\n- Defense\n- Tenacity\n- Critical Chance\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity / Protection\n\n**Primary:**\n- Defense\n- Defense\n- Tenacity\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'plo' && args[1] === 'koon' || args[0] === 'plo') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Plo Koon', 'http://imgur.com/yMgIWjR.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/plo-koon/')
            .addField('Mods', '**Primary:**\n- Potency\n- Health\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'poe' && args[1] === 'dameron' || args[0] === 'poe') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Poe Dameron', 'http://imgur.com/XjaePkR.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/poe-dameron/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'poggle' && args[1] === 'the' && args[2] === 'lesser' || args[0] === 'poggle') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Poggle the Lesser', 'http://imgur.com/23UezZA.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/poggle-the-lesser/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'princess' && args[1] === 'leia') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Princess Leia', 'http://imgur.com/GLAQrlI.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/princess-leia/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'qui-gon' && args[1] === 'jinn' || args[0] === 'qui' && args[1] === 'gon' && args[2] === 'jinn' || args[0] === 'qgj') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Qui-Gon Jinn', 'http://imgur.com/DEgHXZU.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/qui-gon-jinn/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else
        
    if (args[0] === 'r2d2' || args[0] === 'r2-d2') {
        let embed = new Discord.RichEmbed()
            .setAuthor('R2-D2', 'http://imgur.com/4Abzqjg.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/r2-d2/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'resistance' && args[1] === 'pilot') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Resistance Pilot', 'http://imgur.com/g0bpN8q.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/resistance-pilot/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'resistance' && args[1] === 'trooper') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Resistance Trooper', 'http://imgur.com/BUH6TzB.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/resistance-trooper/')
            .addField('Mods', '**Primary:**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'rey') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Rey', 'http://imgur.com/1D2DgV1.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/rey/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Offense')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'rg' || args[0] === 'royal' && args[1] === 'guard') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Royal Guard', 'http://imgur.com/JOsLE7y.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/royal-guard/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Protection\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'sabine' && args[1] === 'wren' || args[0] === 'sabine') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Sabine Wren', 'http://imgur.com/aL9cHwT.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/sabine-wren/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'savage' && args[1] === 'opress' || args[0] === 'savage') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Savage Opress', 'http://imgur.com/0nu1W6K.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/savage-opress/')
            .addField('Mods', '**Primary (Nihilus lead):**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection\n\n**Primary:**\n- Health\n- Critical Chance\n- Critical Chance\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'scarif' && args[1] === 'rebel' && args[2] === 'pathfinder' || args[0] === 'pathfinder') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Scarif Rebel Pathfinder', 'http://imgur.com/j35Srt2.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/scarif-rebel-pathfinder/')
            .addField('Mods', '**Primary:**\n- Health\n- Defense\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'shoretrooper') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Shoretrooper', 'http://imgur.com/W0DEfgU.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/shoretrooper/')
            .addField('Mods', '**Primary (Tank):**\n- Health\n- Health\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Protection\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection\n\n**Primary (Taunt):**\n- Tenacity\n- Tenacity\n- Tenacity\n**Square:**\n- Offense\n**Arrow:**\n- Speed / Protection\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Tenacity')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'sith' && args[1] === 'assassin') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Sith Assassin', 'http://imgur.com/lb4A2KY.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/sith-assassin/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'sith' && args[1] === 'trooper') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Sith Trooper', 'http://imgur.com/aY5x7pY.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/sith-trooper/')
            .addField('Mods', '**Primary (Palp lead):**\n- Defense\n- Defense\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Protection\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection\n\n**Primary:**\n- Defense\n- Defense\n- Potency\n**Square:**\n- Offense\n**Arrow:**\n- Protection\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'snowtrooper') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Snowtrooper', 'http://imgur.com/7nyilrg.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/snowtrooper/')
            .addField('Mods', '**Primary:**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Protection\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'stormtrooper') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Stormtrooper', 'http://imgur.com/37tYh2R.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/stormtrooper/')
            .addField('Mods', '**Primary:**\n- Defense\n- Defense\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Protection\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'sthan') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Stormtrooper Han', 'http://imgur.com/T1KUbY6.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/stormtrooper-han/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'sun' && args[1] === 'fac') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Sun Fac', 'http://imgur.com/pLMbqZ3.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/sun-fac/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Defense\n**Square:**\n- Offense\n**Arrow:**\n- Speed / Protection\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'talia') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Talia', 'http://imgur.com/wQMZVbD.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/talia/')
            .addField('Mods', '**Primary:**\n- Health\n- Health\n- Health\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'teebo') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Teebo', 'http://imgur.com/tgxNxuL.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/teebo/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Chance / Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'tfp' || args[0] === 'tie' && args[1] === 'fighter' && args[2] === 'pilot') {
        let embed = new Discord.RichEmbed()
            .setAuthor('TIE Fighter Pilot', 'http://imgur.com/lhumc0m.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/tie-fighter-pilot/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'tusken' && args[1] === 'raider') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Tusken Raider', 'http://imgur.com/seHFT7P.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/tusken-raider/')
            .addField('Mods', '**Primary:**\n- Offense\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'tusken' && args[1] === 'shaman') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Tusken Shaman', 'http://imgur.com/SPv223w.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/tusken-shaman/')
            .addField('Mods', '**Primary:**\n- Speed\n- Health\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Protection')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'urorrurrr') {
        let embed = new Discord.RichEmbed()
            .setAuthor('URoRRuR\'R\'R', 'http://imgur.com/gj5M7R9.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/urorrurrr/')
            .addField('Mods', '**Primary:**\n- Speed\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ugnaught') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Ugnaught', 'http://imgur.com/XPscdl5.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ugnaught/')
            .addField('Mods', '**Primary:**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ugnaught') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Ugnaught', 'http://imgur.com/XPscdl5.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/ugnaught/')
            .addField('Mods', '**Primary:**\n- Offense\n- Potency\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Protection\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'wedge' || args[0] === 'wedge' && args[1] === 'antilles') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Wedge Antilles', 'http://imgur.com/HgpoCIF.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/wedge-antilles/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'wicket') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Wicket', 'http://imgur.com/vnRnOPR.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/wicket/')
            .addField('Mods', '**Primary:**\n- Critical Damage\n- Critical Chance\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Critical Damage / Critical Chance\n**Circle:**\n- Protection\n**Cross:**\n- Offense / Protection')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'zam' || args[0] === 'zam' && args[1] === 'wesell') {
        let embed = new Discord.RichEmbed()
            .setAuthor('Zam Wesell', 'http://imgur.com/J1Ud7Zr.png')
            .setTitle('Ability and Stats here')
            .setURL('https://swgoh.gg/characters/zam-wesell/')
            .addField('Mods', '**Primary:**\n- Speed\n- Offense\n-\n**Square:**\n- Offense\n**Arrow:**\n- Speed\n**Diamond:**\n- Defense\n**Triangle:**\n- Offense\n**Circle:**\n- Protection\n**Cross:**\n- Potency')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    }

}

module.exports.help = {
    name: "ability"
}