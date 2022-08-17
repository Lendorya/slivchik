const Discord = require("discord.js");
let db = require('quick.db')
module.exports.run = async (client, message, args, err, succ) => {
  
  if(db.fetch(`utility_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
    if(!args[0]) return err('Введите текст.')
  if(!message.member.hasPermission('ADMINISTRATOR')){
var url = new RegExp(`(discord.gg|discordapp.com/invite)/(.*?)`);
  let embed = new Discord.RichEmbed()
  .setTitle('Сработала защита от приглашений.')
  .setDescription(`Сработала автоматическая защита от приглашений в команде **say**. Автор сообщения: **${message.author.tag}**, чтобы такого не произошло, у вас должно быть право \`ADMINISTRATOR\``)
  .setColor('RED')
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
if(url.test(message.content)) return await message.delete(), message.channel.send(embed)
  }
   else message.delete(), message.channel.send(args.join(' '))
  }
   if(db.fetch(`langen_${message.guild.id}`)){
  if(!message.member.hasPermission('ADMINISTRATOR')){
var url = new RegExp(`(discord.gg|discordapp.com/invite)/(.*?)`);
  let embed = new Discord.RichEmbed()
  .setTitle('Invitation protection worked.')
  .setDescription(`Automatic protection against invitees to the team has worked on command **say**. Author: **${message.author.tag}**, to prevent this from happening, you must have the right \`ADMINISTRATOR\``)
  .setColor('RED')
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
if(url.test(message.content)) return await message.delete(), message.channel.send(embed)
  }
   else message.delete(), message.channel.send(args.join(' '))
  }
}
module.exports.help = {
    name: ["say"],
    desc: "Сказать от лица бота.",
  desc2: "Say on face the bot.",
  use: "say <Текст>",
  use2: "say <Text>",
  otdel: "Utility"
}