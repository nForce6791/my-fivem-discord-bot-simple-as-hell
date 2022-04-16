const Discord = require('discord.js');

module.exports = {
    name: 'appacceptSAHP',
    aliases: ['achp', 'applicationacceptSAHP'],
    category: 'applications',
    utilisation: '{prefix}appacceptSAHP <@user> <reason>',

    async execute(client, message, args) {

        const guild = client.guilds.cache.get('959582693333532718')
        const mbr = await guild.members.fetch(message.author)
        if(mbr.roles.cache.has('959582872556146710')) {

            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");

            if (!member) return message.channel.send(`:warning: | You need to mention a user to accept, duh.`);
            if (!reason) return message.channel.send(`:warning: | You need to specify a reason for acception`);



            let SAHPacceptEmbed = new Discord.MessageEmbed()
                .setTitle(`@${member.user.tag} has been accepted to the San Andreas Highway Patrol!`)
                .setAuthor(`Accepted by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
                .setColor('#d2b48c')
                .setDescription(`Congratulations @${member.user.tag}! You have been accepted to the San Andreas Highway Patrol! You will begin as a Probationary Trooper and will rank up as we see fit. You will see when the next training session is once you join the SAHP's Discord server. \n\n If you have any questions or concerns, create a ticket or speak with a member of SAHP to further assist you. \n\n Reason for acception: ${reason}`)

            message.delete();
            message.channel.send(SAHPacceptEmbed)
            member.roles.add('959582858182275123'); // SAHP role
            member.roles.add('959582876796596265'); // probationary trooper role
        } else {
            message.channel.send(`:warning: | You need to have the ` + "`" + `SAHP - Supervisor` + "`" + ` role to use this command.`);
        }
    }}