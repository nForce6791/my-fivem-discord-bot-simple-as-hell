const Discord = require('discord.js');

module.exports = {
    name: 'hack',
    aliases: ['heck'],
    category: 'fun',
    utilisation: '{prefix}hack @user',

    async execute(client, message, args) {

        var email = [
            "@gmail.com",
            "@yahoo.com",
            "@hotmail.com",
            "@outlook.com",
            "@aol.com",
            "@msn.com",
            "@live.com",
            "@ymail.com",
            "@mail.com",
            "@mail.ru",
            "@inbox.com",
            "@proton.me",
            "@protonmail.com"
        ]

        var adress = [
            "123 Seasame Street",
            "69 West Street",
            "92 Orange Boulevard",
            "420 West Avenue",
            "123 East Street",
            "164 East Street",
            "905 Pumpkin Lane",
            "19 Pine Street",
            "16 Maple Street",
            "164 Oak Street",
            "58 North Avenue"
        ]

        var randomEmailAppend = email[Math.floor(Math.random() * email.length)]
        var randomIP = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
        var randomAdress = adress[Math.floor(Math.random() * adress.length)]

        let member = message.mentions.members.first();

        if (!member) return message.channel.send(`you need to mention a user to hack, duh.`);



        let hackEmbed = new Discord.MessageEmbed()
            .setTitle(`@${member.user.tag} just just been hacked!`)
            .setColor('RANDOM')
            .setDescription(`Your name: **${member.user.tag}** \n Your email: **${member.user.tag}${randomEmailAppend}** \n Your IP: **${randomIP}** \n Your password: **${Math.floor(Math.random() * 100000000)}** \n Your phone number: **${Math.floor(Math.random() * 100000000000)}** \n Your credit card number: **${Math.floor(Math.random() * 1000000000000)}** \n Your adress: **${randomAdress}**`)
            .setFooter(`Hacked by ${message.author.username}`, `${message.author.displayAvatarURL()}`, `*this is not real, just a joke. not anyones personal information, not possible through a normal bot.*`)
            .setTimestamp()


        message.delete();
        message.channel.send(hackEmbed)
    },
};