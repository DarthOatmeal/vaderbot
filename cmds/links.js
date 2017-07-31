const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()
        .addField('Docs', '- AAT Teams https://docs.google.com/document/d/16rhot6Wlcr5afVw1ra7NfOwdY-9jAzrFFEMO8kX5Az4/mobilebasic \n\n- ATT Teams https://docs.google.com/spreadsheets/d/1AU1J-KTCek6GVgKCpjt8bpblhAAlTKNwq7cXunAyNgI/edit#gid=0 \n\n- ATT Teams https://docs.google.com/spreadsheets/d/1H6U-hLJY30OczpvVYapEZDK_u2zkYxRqHVGOILzmdKM/edit#gid=0 \n\n- Gear and Mods https://docs.google.com/spreadsheets/d/1G7fRR1taw83uBzsh5Ss9LDNqHXplvDK4cHZ6pBQ4jns/edit#gid=1679694163 \n\n- Ranking Table https://hydra314.github.io/SWGOH_ranking_table/ranking_tables/rankingtable.html')
        .addField('Forums', '- Official https://forums.galaxy-of-heroes.starwars.ea.com/ \n\n- Reddit https://www.reddit.com/r/SWGalaxyOfHeroes')
        .addField('General', '- SWGOH.GG http://swgoh.gg \n\n- SWGOH In Depth https://swgohindepth.com/ \n\n- Gaming-Fans http://gaming-fans.com/')
        .addField('Mods and Tools', '- Crouching Rancor http://apps.crouchingrancor.com \n\n- SWGOH Mods http://swgohmods.com \n\n- SWGOH Life http://www.swgoh.life/ \n\n- Roster Progress http://petebutler.co.uk/mrpi/')
        .addField('YouTube', '- Smithie D https://www.youtube.com/channel/UCS3DjNR8y6tKX7LSjV_RRKA \n\n- AhnaldT101 https://www.youtube.com/user/AhnaldT101 \n\n- McMole2 https://www.youtube.com/channel/UCD6cp5LBYWVe4U9I4C2gDCg \n\n- MobileGamer https://www.youtube.com/channel/UCKjqnZEvjlf4TPtt9dmqhYw \n\n- General Grayvus https://www.youtube.com/channel/UC2C4PX0BmsnUdcMQEDGbCjg \n\n- Warrior https://www.youtube.com/channel/UCJpX9j3jZP5h6y-qMA_I5-Q')

        .setColor('0x00FF00')
        message.author.send({embed: embed});
}

module.exports.help = {
    name: "links"
}