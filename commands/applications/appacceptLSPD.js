const Discord = require('discord.js');

module.exports = {
    name: 'appacceptLSPD',
    aliases: ['acpd', 'applicationacceptlspd'],
    category: 'applications',
    utilisation: '{prefix}appacceptlspd <@user> <reason>',

    async execute(client, message, args) {

        const guild = client.guilds.cache.get('959582693333532718')
        const mbr = await guild.members.fetch(message.author)
        if(mbr.roles.cache.has('959582845276397580')) {

            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");

            if (!member) return message.channel.send(`:warning: | You need to mention a user to accept, duh.`);
            if (!reason) return message.channel.send(`:warning: | You need to specify a reason for acception`);



            let LSPDacceptEmbed = new Discord.MessageEmbed()
                .setTitle(`@${member.user.tag} has been accepted to the Los Santos Police Department!`)
                .setAuthor(`Accepted by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
                .setColor('#2986cc')
                .setDescription(`Congratulations @${member.user.tag}! You have been accepted to the Los Santos Police Department! You will begin as a Cadet and will rank up as we see fit. You will see when the next training session is once you join the LSPD's Discord server. \n\n If you have any questions or concerns, create a ticket or speak with a member of LSPD to further assist you. \n\n Reason for acception: ${reason}`)

            message.delete();
            message.channel.send(LSPDacceptEmbed)
            member.roles.add('959582839576346675'); // LSPD role
            member.roles.add('959582850674483210'); // cadet role
        } else {
            message.channel.send(`:warning: | You need to have the ` + "`" + `LSPD - Supervisor` + "`" + ` role to use this command.`);
        }
    }}