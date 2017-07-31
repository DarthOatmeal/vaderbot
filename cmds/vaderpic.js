const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    var vadercheese = [
    'cmds/vpics/v1.png',
    'cmds/vpics/v2.png',
    'cmds/vpics/v3.png',
    'cmds/vpics/v4.png',
    'cmds/vpics/v5.png',
    'cmds/vpics/v6.png',
    'cmds/vpics/v7.png',
    'cmds/vpics/v8.png',
    'cmds/vpics/v9.png',
    'cmds/vpics/v10.png',
    'cmds/vpics/v11.png',
    'cmds/vpics/v12.png',
    'cmds/vpics/v13.png',
    'cmds/vpics/v14.png',
    'cmds/vpics/v15.png',
    'cmds/vpics/v16.png',
    'cmds/vpics/v17.png',
    'cmds/vpics/v18.png',
    'cmds/vpics/v19.png',
    'cmds/vpics/v20.png',
    'cmds/vpics/v21.png',
    'cmds/vpics/v22.png',
    'cmds/vpics/v23.png',
    'cmds/vpics/v24.png',
    'cmds/vpics/v25.png',
    'cmds/vpics/v26.png',
    'cmds/vpics/v27.png',
    'cmds/vpics/v28.png',
    'cmds/vpics/v29.png',
    'cmds/vpics/v30.png',
    'cmds/vpics/v31.png',
    'cmds/vpics/v32.png',
    'cmds/vpics/v33.png',
    'cmds/vpics/v34.png',
    'cmds/vpics/v35.png'
    ];

    message.channel.sendFile(vadercheese[Math.floor(Math.random() * vadercheese.length)]);
}

module.exports.help = {
    name: "vader"
}