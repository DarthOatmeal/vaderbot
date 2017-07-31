const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

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
    'What is thy bidding, ',
    'I do not want the Emperor\'s prize damaged. We will test it... on Captain ',
    'Perhaps I can find new ways to motivate them ',
    'The Emperor will show you the true nature of the Force. He is your Master now ',
    'There will be a substantial reward for the one who finds the Millennium Falcon. You are free to use any methods necessary, but I want them alive. No disintegrations ',
    'Perhaps you think you\'re being treated unfairly ',
    'Alert my Star Destroyer to prepare for my arrival ',
    'The Emperor does not share your optimistic appraisal of the situation ',
    'I see you have constructed a new light saber. Your skills are complete. Indeed you are powerful as the Emperor has foreseen ',
    'Anakin Skywalker was weak. I destroyed him ',
    'Then you will die braver than most ',
    'You were not summoned here to grovel, ',
    'Be careful not to choke on your aspirations, ',
    'Hunt down this new enemy. And if they will not serve the Empire, eliminate them along with any surviving Jedi who trained them. This is my master\'s command '
    ];

    message.channel.sendMessage(vaderisims[Math.floor(Math.random() * vaderisims.length)] + message.author.username + '.');
}

module.exports.help = {
    name: "rng"
}