const Discord = require("discord.js");
let db = require('quick.db')
module.exports.run = async (client, message, args, err) => {
   if(db.fetch(`utility_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
let uuser = message.mentions.users.first() || message.member;
  if(!uuser) return err('Пользователь не найден.')
const embed = new Discord.RichEmbed()
.setTitle('Просмотр аватара')
.setColor('BLURPLE')
.setDescription(`Пользователь: **${uuser.user.tag}**
**[Аватар данного пользователя](${uuser.user.avatarURL})**`)
.setImage(uuser.user.avatarURL)
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp();
message.channel.send({embed});
  }
  if(db.fetch(`langen_${message.guild.id}`)){
    let uuser = message.mentions.users.first() || message.member;
  if(!uuser) return err('User not found.')
const embed = new Discord.RichEmbed()
.setTitle('Avatar view')
.setColor('BLURPLE')
.setDescription(`User: **${uuser.user.tag}**
**[Avatar link](${uuser.user.avatarURL})**`)
.setImage(uuser.user.avatarURL)
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp();
message.channel.send({embed});
  }
}

module.exports.help = {
    name: ["avatar", "ava"],
    desc: "Посмотреть аватар себя или чужого пользователя.",
  desc2: "View your or user avatar.",
  use: "avatar [@Пользователь]",
  use2: "avatar [@User]",
  otdel: "Utility"
}