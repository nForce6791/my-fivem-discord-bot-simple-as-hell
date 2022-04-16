const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['av', 'pfp'],
    category: 'fun',
    utilisation: '{prefix}avatar @user',

    async execute(client, message, args) {


        var member = message.mentions.members.first();

        if (!member) {
            let embed = new Discord.MessageEmbed()
                .setTitle(`Your avatar`)
                .setImage(`${message.author.displayAvatarURL()}`)
                .setColor('RANDOM')
                .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
                .setTimestamp()
            
            message.delete();
            message.channel.send(embed);
        }



        if (member) {
            let embed2 = new Discord.MessageEmbed()
                .setTitle(`@${member.user.tag}'s avatar`)
                .setImage(`${member.user.displayAvatarURL()}`)
                .setColor('RANDOM')
                .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
                .setTimestamp()


            message.delete();
            message.channel.send(embed2)
        }
    },
};