const Discord = require('discord.js');

module.exports = {
    name: 'coinflip',
    aliases: ['flipcoin', 'cf', 'fc'],
    category: 'fun',
    description: 'Flip a coin!',
    utilisation: '{prefix}coinflip',

    async execute(client, message, args) {

        var result = [
            "Heads",
            "Tails"
        ]


        var randomResult = result[Math.floor(Math.random() * result.length)]

        if(randomResult == "Tails") {

            let TailsEmbed = new Discord.MessageEmbed()
                .setTitle(`Coin Flip!`)
                .setColor('RANDOM')
                .setDescription(`You got Tails!`)
                .setImage('https://cdn.discordapp.com/attachments/959583022838063134/965321277789327360/tails.png')
                .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL())
                .setTimestamp()


            message.delete();
            message.channel.send(TailsEmbed)
        } else {
            let HeadsEmbed = new Discord.MessageEmbed()
                .setTitle(`Coin Flip!`)
                .setColor('RANDOM')
                .setDescription(`You got Heads!`)
                .setImage('https://cdn.discordapp.com/attachments/959583022838063134/965321277571211374/heads.png')
                .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL())
                .setTimestamp()

            message.delete();
            message.channel.send(HeadsEmbed)
    }
}};