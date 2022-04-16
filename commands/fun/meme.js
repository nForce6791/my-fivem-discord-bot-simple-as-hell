const Discord = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = {
    name: 'meme',
    aliases: ['funny',],
    category: 'fun',
    utilisation: '{prefix}meme',

    async execute(client, message, args) {
     
        const subReddits = ["meme", "me_irl", "dankmemes", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setColor('RANDOM')
        .setURL(`http://reddit.com/${random}`)
        .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
        .setTimestamp()

        message.channel.send(embed);

    },
};