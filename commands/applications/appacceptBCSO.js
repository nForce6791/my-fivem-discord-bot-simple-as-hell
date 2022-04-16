const Discord = require('discord.js');

module.exports = {
    name: 'appacceptbcso',
    aliases: ['acso', 'applicationacceptbcso'],
    category: 'applications',
    utilisation: '{prefix}appacceptbcso <@user> <reason>',

    async execute(client, message, args) {

        const guild = client.guilds.cache.get('959582693333532718')
        const mbr = await guild.members.fetch(message.author)
        if(mbr.roles.cache.has('959582900385353750')) {
            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");

            if (!member) return message.channel.send(`:warning: | You need to mention a user to accept, duh.`);
            if (!reason) return message.channel.send(`:warning: | You need to specify a reason for acception`);



            let bcsoacceptEmbed = new Discord.MessageEmbed()
                .setTitle(`@${member.user.tag} has been accepted to the Blaine County Sheriff's Office!`)
                .setAuthor(`Accepted by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
                .setColor('#033323')
                .setDescription(`Congratulations @${member.user.tag}! You have been accepted to the Blaine County Sheriff's Office! You will begin as a Probationary Deputy and will rank up as we see fit. You will see when the next training session is once you join the BCSO's Discord server. \n\n If you have any questions or concerns, create a ticket or speak with a member of BCSO to further assist you. \n\n Reason for acception: ${reason}`)

            message.delete();
            message.channel.send(bcsoacceptEmbed)
            member.roles.add('959582887978618880'); // bcso role
            member.roles.add('959582906232209418'); // probationary deputy role
        } else {
            message.channel.send(`:warning: | You need to have the ` + "`" + `BCSO - Supervisor` + "`" + ` role to use this command.`);
        }
    }}