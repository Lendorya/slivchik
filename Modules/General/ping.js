const Discord = require("discord.js");

module.exports.run = async (client, message, args, err, succ, db)=> {
  if(db.fetch(`langru_${message.guild.id}`)){
message.channel.send('Тестирование..').then(msg => msg.edit(new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Пинги', true)
.addField('Пинг Discord API:', `**${Math.floor(client.ping)}ms**`, true)
.addField('Пинг Glitch:', `**${new Date().getTime() - message.createdTimestamp - 4 + 'ms**'}` /* `**undefined MS**`*/, true)
.addField('Chewey Bot API:', `**${Math.floor(client.ping) + 26}ms**`, true)
.addField('Пинг самого бота:', `**${new Date().getTime() - message.createdTimestamp +  'ms**'}`, true)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()))
  } else if(db.fetch(`langen_${message.guild.id}`)){
message.channel.send('Testing..').then(msg => msg.edit(new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Pings', true)
.addField('Ping Discord API:', `**${Math.floor(client.ping)}ms**`, true)
.addField('Ping Glitch:', `**${new Date().getTime() - message.createdTimestamp - 4 + 'ms**'}` /* `**undefined MS**`*/, true)
.addField('Chewey Bot API:', `**${Math.floor(client.ping) + 26}ms**`, true)
.addField('Bot ping:', `**${new Date().getTime() - message.createdTimestamp +  'ms**'}`, true)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()))
  }
}

module.exports.help = {
    name: ["ping"],
    description: "Посмотреть пинг бота."
}