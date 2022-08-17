const Discord = require("discord.js")
const creator = '441954631539490857';
const creator2 = "590843580793356307";
module.exports.run = async (client, message, args, err, succ) => {
    if (message.author.id !== creator) return err('Developer only.')
 message.channel.send('Command is obraboting..').then(msg => msg.edit(require('child_process').execSync(args.join(' ')).toString('utf8') + ' '))
}

module.exports.help = {
    name: ["shell"],
    desc: 'Обрабатывает код.',
    desc2: "Handles the code.",
    use2: "shell <code>",
    use: 'shell <код>',
    otdel: 'Owner'
}