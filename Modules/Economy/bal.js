let db = require('quick.db')
const Discord = require('discord.js');

module.exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
const member = message.guild.member(message.mentions.users.first()) || client.users.get(args[0]) || message.member;
  if(db.fetch(`langru_${message.guild.id}`)){
  if(member.user.bot) return err('У ботов нет монеток.')
    if(db.fetch(`money_${message.guild.id}_${member.id}`) === null) db.set(`money_${message.guild.id}_${member.id}`, 0)
    let curcoins = db.fetch(`money_${message.guild.id}_${member.id}`) || 0;
    let bank = db.fetch(`bank_${message.guild.id}_${member.id}`) || 0;
const embed=new Discord.RichEmbed()
.setTitle(`Баланс пользователя`)
.setDescription(`Пользователь: ${member.user.tag}`)
.addField(`Наличные:`, `**${curcoins}** монеток`, true)
.addField(`Банк:`, `**${bank}** монеток`, true)
.addField(`Всего:`, `**${bank+curcoins}** монеток`, true)
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp()
.setColor('PURPLE')
message.channel.send(embed)
  }
   if(db.fetch(`langen_${message.guild.id}`)){
  if(member.user.bot) return err('Bots have no coins.')
    if(db.fetch(`money_${message.guild.id}_${member.id}`) === null) db.set(`money_${message.guild.id}_${member.id}`, 0)
    let curcoins = db.fetch(`money_${message.guild.id}_${member.id}`) || 0;
       let bank = db.fetch(`bank_${message.guild.id}_${member.id}`) || 0;
const embed=new Discord.RichEmbed()
.setTitle(`User balance`)
.setDescription(`User: ${member.user.tag}`)
.addField(`Cash:`, `**${curcoins}** coins`, true)
.addField(`Bank:`, `**${bank}** coins`, true)
.addField(`All:`, `**${bank+curcoins}** coins`, true)
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp()
.setColor('PURPLE')
message.channel.send(embed)
   }
}
module.exports.help = {
    name: ["bal" , "balance" , "money", "$"],
  desc: "Показывает текущий ваш или чужой баланс.",
  desc2: "Shows your current or someone else's balance.",
  use: 'bal [@пользователь]',
  use2: 'bal [@user]',
  otdel: "Economy"
}