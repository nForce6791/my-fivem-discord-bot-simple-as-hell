const config = require('../config.json')
const chalk = require('chalk')

const url = (process.env.MONGO)

module.exports = async (client) => {
    console.log(chalk.green(`[READY] ${client.user.tag} is online!`));

    setInterval(function() {

        let lol = ['nForce RP', "for help | >help"];

        let f = ['WATCHING'];

        let status = lol[Math.floor(Math.random() * lol.length)];

        client.user.setActivity(
            status, {
                type: f[Math.floor(Math.random() * f.length)]
            })

    }, 8000)

    client.user.setPresence({
        status: 'dnd'
    })

}