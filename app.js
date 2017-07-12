//Constants
const settings = require("./settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = settings.prefix;
const bot = new Discord.Client({disableEveryone: true});

//Read Files
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

//Bot Online
bot.on("ready", async () => {
	console.log(`My name is ${bot.user.username} and I am ready to serve.`);
    console.log(bot.commands);
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    }
    catch(e) {
        console.log(e.stack);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);

    if(command === `${prefix}ability-aayla`) {
        let embed = new Discord.RichEmbed()
            .setThumbnail('http://imgur.com/bHtZVQS.png')
            .addField('Aayla Secura', 'Versatile attacker with high survivability through Dodge, Hitpoints, and self healing.')
            .addField('Inspiring Strike', 'Deal Physical damage to target enemy with a 35% chance to call an ally to Assist. If the assisting ally is a Jedi, they deal 50% more damage.')
            .addField('Survivor', 'Deal Physical damage to target enemy and recover Health equal to 65% of the damage dealt.')
            .addField('Jedi Valor', 'Jedi allies gain 40% Tenacity and recover 10% of thier Max Health when they ward off an effect.')
            .addField('Superior Riposte', 'Aayla has +10% Critical Chance, 65% Counter Chance and +50% Counter Damage. In addition, she Stuns her target for 1 turn whenever she critically hits.')
            .setColor('0x0000FF')
        message.author.send({embed: embed});

        return;
    }
});

bot.login(settings.token);