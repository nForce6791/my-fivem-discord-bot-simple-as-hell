const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    aliases: ['8b', 'ballofthetruth'],
    category: 'fun',
    utilisation: '{prefix}8ball <question>',

    async execute(client, message, args) {

        var answers = [
            "Yes",
            "No",
            "Maybe",
            "I don't know",
            "Ask again later",
            "I don't think so",
            "I don't know",
            "I don't want to answer that",
            "No, leave me alone",
            "Yes, definitely",
            "Yes, now leave me alone",
            "No, I don't think so",
            "I don't know, ask again later",
            "No clue"
        ]

        var randomResponse = answers[Math.floor(Math.random() * answers.length)]

        let question = args.slice(0).join(" ");

        if (!question) return message.channel.send(`you need to ask a question, duh.`);



        let ballEmbed = new Discord.MessageEmbed()
            .setTitle(`the magic 8ball says...`)
            .setColor('RANDOM')
            .setDescription(`Your question: **${question}** \n My answer: **${randomResponse}**`)
            .setFooter(`asked by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
            .setTimestamp()


        message.delete();
        message.channel.send(ballEmbed)
    },
};