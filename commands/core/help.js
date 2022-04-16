const Discord = require("discord.js")


module.exports = {
    name: 'help',
    aliases: ["h"],
    category: ['core'],
    utilisation: '{prefix}help',


    async execute(client, message, args) {

        //We have to set a argument for the help command beacuse its going to have a seperate argument.
        let helpArray = message.content.split(" ");
        let helpArgs = helpArray.slice(1);

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
        if(!helpArgs[0]) {
            var embed = new Discord.MessageEmbed()
                .setAuthor(`Here are the current bot commands:`)
                .setDescription('```hack | appacceptDEPT | appdenyDEPT | help | 8ball | avatar | meme | ping```')
                .addFields({ name: 'Prefix', value: '```>```', inline: true})
                .setColor('#00FFF3')
            
            message.channel.send(embed);
        }

        //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
        if(helpArgs[0]) {
            let command = helpArgs[0];

            if(client.commands.has(command)) {
            
                command = client.commands.get(command);
                var embed = new Discord.MessageEmbed()
                    .setAuthor(`${helpArgs} Command`)
                    .setDescription(`
                    - **Command's Description** ${command.description || "There is no Description for this command."}
                    - **Command's Usage:** ${command.utilisation || "No Usage"}
                    - **Command's Aliases:** ${command.aliases || "No Aliases"}
                    - **Command's Category:** ${command.category || "No Category"}
                    `)
                    .setColor('#2EFF00')

            message.channel.send(embed);
    }}
}}
