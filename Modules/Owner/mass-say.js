const Discord = require("discord.js");
const creator = '441954631539490857';
module.exports.run = async (client, message, args, err, succ) => {
    if(message.author.id !== creator) return err('Developer only.')
    let att = [];
    if(message.attachments.size > 0) message.attachments.forEach(attachment => att.push(attachment.url));
            client.guilds.forEach(guild => {
                let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(guild.members.get(client.user.id)).has('SEND_MESSAGES'));
                if (channels.size > 0) channels.first().send(`${args.join(' ')}\n${att.join('\n')}`);
            });
}

module.exports.help = {
    name: ["mass-say"],
    desc: "Массовое сообщение.",
  desc2: "Mass message.",
  use: "mass-say <сообщение>",
  use2: "mass-say <message>",
  otdel: "Owner"
   
}