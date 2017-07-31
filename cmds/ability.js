const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    if(args[0] === 'aayla' || args[0] === 'aayla' && args[1] === 'secura') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/bHtZVQS.png')
            .addField('Aayla Secura', 'Versatile attacker with high survivability through Dodge, Hitpoints, and self healing.')
            .addField('Inspiring Strike', 'Deal Physical damage to target enemy with a 35% chance to call an ally to Assist. If the assisting ally is a Jedi, they deal 50% more damage.')
            .addField('Survivor', 'Deal Physical damage to target enemy and recover Health equal to 65% of the damage dealt.')
            .addField('Jedi Valor', 'Jedi allies gain 40% Tenacity and recover 10% of thier Max Health when they ward off an effect.')
            .addField('Superior Riposte', 'Aayla has +10% Critical Chance, 65% Counter Chance and +50% Counter Damage. In addition, she Stuns her target for 1 turn whenever she critically hits.')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else
    
    if(args[0] === 'ackbar' || args[0] === 'admiral' && args[1] === 'ackbar') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/YmjNJSt.png')
            .addField('Admiral Ackbar', 'Rebel Support that can Dispel debuffs and grant allies extra turns.')
            .addField('Quick Shot', 'Deal Physical damage to target enemy with a 55% chance to gain 45% Turn Meter.')
            .addField('It\'s a Trap!', 'Dispel all negative status effects from all allies. Each ally recovers 9% of thier Max Health for each effect dispelled this way. Admiral Ackbar has a 25% chance to gain 40% Turn Meter.')
            .addField('Tactical Genius', 'Ackbar grants each ally the Tactical Genius effect. The first ally to use a Special ability while they have this effect gains 100% Turn Meter and recovers 30% of thier Max Health. Tactical Genius ends whenever an ally triggers this effect or at the end of Ackbar\'s next turn.')
            .addField('Rebel Coordination', 'Rebel allies have +25 speed and +10% Tenacity. In addition, whenever an ally uses an ability that isn\'t an attack, they call a Rebel ally to Assist.')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'ahsoka' || args[0] === 'ahsoka' && args[1] === 'tano' || args[0] === 'snips') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/pHRl8nU.png')
            .addField('Ahsoka Tano', 'Versatile Attacker with healing and superior stats as long as she can avoid suffering Critical Hits.')
            .addField('Energetic Slash', 'Deal Physical damage to target enemy and Ahsoka recovers Health equal to 20% of her Max Health, increased to 30% on a Critical Hit.')
            .addField('Protective Maneuver', 'Deal Physical damage to target enemy. If the target had 50% Health or more, all allies recover Health equal to 30% of Ahsoka\'s Max Health; otherwise, thisattack deals 50% more damage.')
            .addField('Quick Steps', 'Jedi and Nightsister allies have +14% Evasion, and gain 20% Turn Meter whenever they Evade.')
            .addField('Daring Padawan', 'Ahsoka has +45% Health, +45 Speed, and +15% Critical Chance. When Critically Hit, she lses one effect. When she defeats an enemy, she regains all of them. If Jedi Knight Anakin is present, Ahsoka gains Critical Hit Immunity for 2 turns at the start of each encounter and whenever she uses a Special ability.')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'fulcrum' || args[0] === 'fat' || args[0] === 'atf' || args[0] === 'ashla') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/dDv5DA5.png')
            .addField('Ahsoka Tano \(Fulcrum\)', 'Enduring Rebel Attacker who shrugs off debuffs and consumes buffs to deal extra damage.')
            .addField('Cruel Strike', 'Deal Physical damage to target enemy with a 35% chance to Stun for 1 turn.')
            .addField('Endless Wrath', 'Deal Special damage to all enemies and refresh all cooldowns on a finishing blow.')
            .addField('Whirlwind', 'Consume all non-unique buffs on Ahsoka and deal Physical damage to target enemy. This attack scores an additional hit for each type of buff consumed. The target can\'t Evade and has -50% Armor against this attack.')
            .addField('Perseverance', 'Ahsoka is immune to Damage Over Time effects and gains 30% Critical Avoidance. At the end of each turn, Ahsoka dispels all debuffs on herself and loses 10% Health for each debuff dispelled, then recovers 5% Health for each buff on her. This Health Loss can\'t defeat Ahsoka.')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'asajj' || args[0] === 'ventress' || args[0] === 'asajj' && args[1] === 'ventress') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/0wWJvKI.png')
            .addField('Asajj Ventress', 'Nightsister controller with self healing who generates attack power on enemy death.')
            .addField('Balance Strike', 'Deal Physical damage to target enemy, gain Protection Up \(40%\) for 2 turns, and grant Protection Up \(40%\) to a random ally that doesn\'t have it for 2 turns.')
            .addField('Meditate', 'Ahsoka gains Foresight, Retribution, and each non-unique buff \(excluding Taunt\) present on other allies for 2 turns, then gains 15% Turn Meter for each buff on her.')
            .addField('Nightsister Swiftness', 'Nightsister allies gain 28 Speed, gain 50% Turn Meter when they fall below 100% Health, and have a 50% chance to remove 20% Turn Meter when they damage an enemy. This Turn Meter removal can\'t be Resisted.')
            .addField('Rampage', 'Whenever an ally or enemy is defeated, Asajj Ventress gains Offense Up and Critical Chance Up for two actions and gains 50% Turn Meter. Asajj Ventress gains 15 Speed for each enemy with no buffs.')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'b2' || args[0] === 'battle' && args[1] === 'droid') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/kOuiAfw.png')
            .addField('B2 Super Battle Droid', 'Droid Tank that relentlessly punishes enemies that evade attacks or damage allies.')
            .addField('Heavy Arms', 'Deal Physical damage to target enemy and inflict Evasion Down for 2 turns.')
            .addField('Mow Down', 'Deal Physical damage to all enemies and Dispel all positive status effects on them, with a 65% chance to also inflict Buff Immunity for 2 turns \(applied before damage\).')
            .addField('Relentless Barrage', 'B2 has a 40% chance to gain 100% Turn Meter whenever another ally is Evaded or damaged by an attack.')
            .setColor('0xFF0000')
            message.author.send({embed :embed});
    } else

    if (args[0] === 'barriss' || args[0] === 'barriss' && args[1] === 'offee') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/sDOwrIL.png')
            .addField('Barriss Offee', 'Jedi Healer that can balance party Health and Dispel allied Jedi frequently.')
            .addField('Invigorating Strike', 'Deal Physical damage to target enemy with a 45% chance for all allies to recover 6% of Barriss Offee\'s Max Health.')
            .addField('Force Healer', 'All allies have their current Health percentages equalized. \(Health equalizing effects ignore Healing Immunity\). Then, each ally recovers 15% of their Max Health and gains Defense Up for 2 turns.')
            .addField('No One Left Behind', 'Jedi allies gain 20% Max Health, and other allies gain half that amount. In addition, at the start of each of their turns, Jedi allies heal for 8% of Barriss Offee\'s Max Health, and other allies heal half that amount.')
            .addField('Swift Recovery', 'At the end of each of her turns, Barriss Dispels all debuffs from the debuffed ally with the lowest Health and gains 10% Turn Meter for each effect removed. Whenever an ally is Critically Hit, that ally recovers 20% of their Max Health and Barriss gaons 10% Turn Meter. This effect is disabled while Barriss is defeated.')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'baze' || args[0] === 'baze' && args[1] === 'malbus') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/VrT5LNX.png')
            .addField('Baze Malbus', 'Fearsome Rebel Tank who Taunts, dispels buffs, and inflicts debuffs.')
            .addField('Heavy Repeater Cannon', 'Deal Physical damage to target enemy with a 70% chance to inflict Speed Down for 3 turns. If Chirrut Imwe is present, he gains 10% Turn Meter.')
            .addField('Unload', 'Deal Physical damage to all enemies and Dispel all buffs on them. Empire enemies and enemies who were not buffed take bonus damage equal to 25% of their Max Health. If Chirrut Imwe is present, he is called to Assist.')
            .addField('Fierce Reprisal', 'Deal Physical damage to target enemy and dispel all buffs on them. For each buff dispelled, inflict the opposite debuff, if any, for 2 turns.')
            .addField('For Jedha', 'Baze Malbus gains Taunt and Retribution for 1 turn at the start of each encounter, whenever an enemy is defeated, and whenever Chirrut Imwe falls below 100% Health. Baze Malbus gains 5% Turn Meter whenever an enemy gains a buff.')
            .addField('Dauntless Courage', 'Baze Malbus gains Max Health equal to 20% of his Max Health. Chirrut Imwe also gains that much Max Health.')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'biggs' || args[0] === 'biggs' && args[1] === 'darklighter') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/9uLGhdJ.png')
            .addField('Biggs Darklighter', 'Rebel Support with Critical Hit synergies who calls Assists.')
            .addField('Cadet\'s Aim', 'Deal Physical damage to target enemy with a 50% chance to gain Critical Chance Up for 2 turns. On a Criical Hit grant a random ally Critical Damage Up for 2 turns.')
            .addField('Comrade-in-Arms', 'Deal Physical damage to target enemy and call an Assist. All attacks have 75% more Critical Chance.')
            .addField('Adrenaline Rush', 'Biggs Darklighter gains 100% Turn Meter and Evasion Up for 2 turns after surviving any damage from an Empire enemy or a Critical Hit from any enemy.')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'bistan') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/OBDOApm.png')
            .addField('Bistan', 'Wild Rebel Attacker who gains Frenzy, debuffs enemies, and removes Turn Meter.')
            .addField('Blast\'Em', 'Deal Physical damage to target enemy with a 70% chance to inflict Damage Over Time for 3 turns.')
            .addField('Frenzy', 'Bistan gains Frenzy for 4 turns and all other allies gain 20% Turn Meter. Frenzy: Whenever another ally uses a Special ability, this unit gains 100% Turn Meter.')
            .addField('Gunner Tactics', 'Deal Physical damage to target enemy and remove Turn Meter equal to Bistan\'s Potency.')
            .addField('Amped Up', 'Bistan gains 10% Potency for each Rebel ally and each debuffed enemy.')
            .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'boba') {
            let embed = new Discord.RichEmbed()
                .setThumbnail('http://i.imgur.com/cmWpFqI.png')
                .addField('Boba Fett', 'Ruthless Bounty Hunter Attacker who ignores Taunts, Ability Blocks and self-revives.')
                .addField('EE-3 Carbine', 'Deal Physical damage to target enemy with a 50% chance (doubled against Scoundrels) to attack again. Each attack has a 70% chance to inflict Damage Over Time for 2 turns.')
                .addField('Death From Above', 'Deal Physical damage to all enemies with an 80% chance to inflict Ability Block for 1 turn and a 50% chance to inflict Damage Over Time for 2 turns. Inflict Ability Block on the selected target for 2 turns.')
                .addField('Execute', 'Deal Physical damage to target enemy and dispel all status effects on them. Deal 30% more damage for each effect dispelled. Enemies defeated by this ability can\'t be revived. Reduce all cooldowns by 1 on a finishing blow. This attack can\'t be Evaded.')
                .addField('Dead or Alive', 'All allies gain 50% Critical Damage and 10% Critical Chance. Bounty Hunter allies gain 15 Speed for each debuffed enemy, gain Max Health equal to 50% of the total Potency of all Bounty Hunter allies, and gain 15% Turn Meter whenever a Thermal Detonator explodes.')
                ,addField('Bounty Hunter\'s Resolve', 'At the start of battle, and whenever he defeats an enemy, Boba Fett recovers 100% Protection and gains Bounty Hunter\'s Resolve until he is defeated. Bounty Hunter\'s Resolve: Boba Fett ignores Taunts during his turn. When defeated, revive at 100% Health. Can\'t be Dispelled or Prevented.')
                .setColor('0x0000FF')
            message.author.send({embed: embed});
    } else





    if (args[0] === 'mob' && args[1] === 'enforcer') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/hABGveR.png')
            .addField('Mob Enforcer', 'Scoundrel Tank with enemy debuff ability and a thermal detonator.')
            .addField('Dirty Fighting', 'Deal Physical damage to target enemy with an 80% chance to inflict Defense Down for 2 turns.')
            .addField('Thermal Detonator', 'Place a Thermal Detonator on target enemy that explodes after 2 Turns with a 40% chance for Mob Enforcer to gain 25% Turn Meter.')
            .addField('Underworld Moxie', 'Mob Enforcer gains 15% Max Health for each living Scoundrel ally. In addition, whenever an ally falls below 30% Health, there is a 70% chance that Mob Enforcer will gain Offense Up for 2 turns.')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else

    if (args[0] === 'veers' || args[0] === 'general' && args[1] === 'veers') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/QUCNRZR.png')
            .addField('General Veers', 'Aggressive Empire Support that becomes stronger as enemies are defeated.')
            .addField('Daring Attack', 'Deal Physical damage to target enemy with a 70% chance each to grant Speed Up for 2 turns to General Veers and a random Imperial Trooper ally who doesn\'t have it.')
            .addField('Ruthless Assault', 'Deal Special damage to all enemies with a 55% chance to inflict Ability Block for 1 turn, dealing 10% more damage for each living Rebel enemy. Call all other Imperial Trooper allies to assist, dealing 40% less damage.')
            .addField('Imperial Assault Commander', 'Empire allies gain 30% Offense. Imperial Trooper allies gain 20 Speed and gain 10% Turn Meter whenever they gain a buff.')
            .addField('Aggresive Tactician', 'Whenever an enemy is defeated while Veers is active, Imperial Trooper allies gain Offense Up for 2 turns, gain 50% Turn Meter, and recover 10% Protection. While Veers is active, Imperial Trooper allies have +15% Critical Chance.')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    } else


    if (args[0] === 'zam' || args[0] === 'zam' && args[1] === 'wesell') {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/J1Ud7Zr.png')
            .addField('Zam Wesell', 'Lightning fast Scoundrel attacker that inflicts Evasion Down and detonates bombs.')
            .addField('Detonating Shot', 'Deal Physical damage to target enemy. All Thermal Detonators on the target explode, dealing damage immediately. If any Thermal Detonators explode, Zam gains 20% Turn Meter for each living Scoundrel ally.')
            .addField('See What Sticks', 'Place Thermal Detonators on all enemies that explode after 2 Turns with a 70% chance for Zam to gain Speed Up for 3 turns.')
            .addField('Electro-goggles', 'Inflict Evasion Down on all enemies for 4 turns and Expose the primary target for 2 turns with a 50% chance to gain 50% Turn Meter. This attack can\'t be Evaded')
            .addField('Shapeshifter', 'Zam gains 18% Evasion. This bonus is doubled while she is suffering a negative status effect. Whenever Zam Evades an attack, she also dispels all negative status effects on herself. Whenever Zam is Critically Hit, she gains Evasion Up for 2 turns.')
            .setColor('0xFF0000')
            message.author.send({embed: embed});
    }

}

module.exports.help = {
    name: "ability"
}