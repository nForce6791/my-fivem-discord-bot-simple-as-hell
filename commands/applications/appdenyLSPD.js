const Discord = require('discord.js');

module.exports = {
    name: 'appdenyLSPD',
    aliases: ['adpd', 'applicationdenyLSPD'],
    category: 'applications',
    utilisation: '{prefix}appdenyLSPD <@user> <reason>',

    async execute(client, message, args) {

        const guild = client.guilds.cache.get('959582693333532718')
        const mbr = await guild.members.fetch(message.author)
        if(mbr.roles.cache.has('959582845276397580')) {
            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");

            if (!member) return message.channel.send(`:warning: | You need to mention a user to deny, duh.`);
            if (!reason) return message.channel.send(`:warning: | You need to specify a reason for denial`);



            let LSPDdenyEmbed = new Discord.MessageEmbed()
                .setTitle(`@${member.user.tag}'s LSPD application has been denied!`)
                .setAuthor(`Denied by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
                .setColor('#033323')
                .setDescription(`Sorry, @${member.user.tag}. Your LSPD application has been denied. This can be due to multiple reasons, the Supervisor+ that reviewed your application will go more in-depth below. \n\n Reason for denial: ${reason}`)

            message.delete();
            message.channel.send(LSPDdenyEmbed)
        } else {
            message.channel.send(`:warning: | You need to have the ` + "`" + `LSPD - Supervisor` + "`" + ` role to use this command.`);
        }
    }}