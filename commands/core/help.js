const Discord = require("discord.js")


module.exports = {
    name: 'help',
    aliases: ["h"],
    category: ['core'],
    utilisation: '{prefix}help',


    async execute(client, message, args) {

        let helpEmbed = new Discord.MessageEmbed()
            .setTitle(`Help Panel`)
            .setAuthor(`nForce RP Help | Prefix: >`)
            .setColor('#FF0000')
            .setDescription(`Welcome to the nForce RP help panel! Here you can find all the commands you can use in the server. \n\n **Application Commands:** \n ____>appacceptDEPT <user> <reason>____ \n EG: **>appacceptbcso @nForce#6377 Seems like they know everything such as 10-codes well, has prior knowledge.** \n Those application commands work for staff, SAFR/SAFD, BCSO, LSPD, SAHP + soon to be more. Also works if you do **>acDISCRIMINATOR <user> <reason>**\n The discriminator is what the dept is know as. BCSO is SO, LSPD is PD, so on, so forth. Example: **>acpd @Dyno For no reason** \n\n **>appdenyDEPT <user> <reason>** also works, and so does **>adDISCRIMINATOR <user> <reason>** \n\n **Other commands:** \n ____>ping____ \n Shows bots ping \n\n **Core Commands:** \n ____>help____ \n Displays *this* help message \n\n **Fun Commands:**\n ____>hack <user>____ \n Hacks another user (not real, fake things, promise. not possible through a discord bot) \n ____>8ball____ <question> \n Asks the *magic* 8ball a question \n ____>avatar____ <member> \n displays the mentioned users avatar, if no user is mentioned, it will show your own avatar.`)
            .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
            .setTimestamp()

        message.delete();
        message.channel.send(helpEmbed);

    }}