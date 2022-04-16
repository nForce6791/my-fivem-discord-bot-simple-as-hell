const Discord = require('discord.js');

module.exports = {
    name: 'appacceptstaff',
    aliases: ['acst', 'applicationacceptstaff'],
    category: 'applications',
    utilisation: '{prefix}appacceptstaff <@user> <reason>',

    async execute(client, message, args, member) {

        const guild = client.guilds.cache.get('959582693333532718')
        const mbr = await guild.members.fetch(message.author)
        if(mbr.roles.cache.has('959582828188798976')) {

            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");

            if (!member) return message.channel.send(`:warning: | You need to mention a user to accept, duh.`);
            if (!reason) return message.channel.send(`:warning: | You need to specify a reason for acception`);



            let bcsoacceptEmbed = new Discord.MessageEmbed()
                .setTitle(`@${member.user.tag} has been accepted to nForce RP's Staff Team!`)
                .setAuthor(`Accepted by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
                .setColor('#ff5000')
                .setDescription(`Congratulations @${member.user.tag}! You have been accepted to nForce RP's Staff Team! You will begin as a Trial Moderator and will rank up as we see fit. \n\n If you have any questions or concerns, create a ticket or speak with a member of the staff team to further assist you. \n\n Reason for acception: ${reason}`)

            message.delete();
            message.channel.send(bcsoacceptEmbed);
        } else {
            message.channel.send(`:warning: | You need to have the ` + "`" + `♤  | Board of Administration | ♤` + "`" + ` role to use this command.`);
        }
    }}