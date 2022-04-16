const Discord = require('discord.js');

module.exports = {
    name: 'appacceptSAFR',
    aliases: ['acfd', 'acfr', 'applicationacceptSAFR'],
    category: 'applications',
    utilisation: '{prefix}appacceptSAFR <@user> <reason>',

    async execute(client, message, args) {

        const guild = client.guilds.cache.get('959582693333532718')
        const mbr = await guild.members.fetch(message.author)
        if(mbr.roles.cache.has('959582925563760662')) {

            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");

            if (!member) return message.channel.send(`:warning: | You need to mention a user to accept, duh.`);
            if (!reason) return message.channel.send(`:warning: | You need to specify a reason for acception`);



            let SAFRacceptEmbed = new Discord.MessageEmbed()
                .setTitle(`@${member.user.tag} has been accepted to San Andreas Fire & Rescue!`)
                .setAuthor(`Accepted by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
                .setColor('#f44336')
                .setDescription(`Congratulations @${member.user.tag}! You have been accepted to San Andreas Fire & Rescue! You will begin as a Cadet and will rank up as we see fit. You will see when the next training session is once you join the SAFR's Discord server. \n\n If you have any questions or concerns, create a ticket or speak with a member of SAFR to further assist you. \n\n Reason for acception: ${reason}`)

            message.delete();
            message.channel.send(SAFRacceptEmbed)
            member.roles.add('959582925119172679'); // SAFR role
            member.roles.add('959582930513035314'); // Probationary Firefighter role
        } else {
            message.channel.send(`:warning: | You need to have the ` + "`" + `SAFR - Supervisor` + "`" + ` role to use this command.`);
        }
    }}