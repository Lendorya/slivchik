
const Discord = require("discord.js");
let config = require('../../config.json')
  const db = require ('quick.db')
const creator = '441954631539490857';
module.exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
   let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  let curlvl = db.fetch(`lvl_${message.guild.id}_${member.id}`);
  let curXp = db.fetch(`xp_${message.guild.id}_${member.id}`);
  let nxtLvlxp = curlvl * 478;
  if(db.fetch(`langru_${message.guild.id}`)){
    if(member.user.bot) return err('У ботов не может быть профилей!')
      if(member.id === creator || member.id === '590843580793356307') {
        message.channel.startTyping()
        let cembed = new Discord.RichEmbed()
        .setTitle(`Статистика ${member.user.tag} [STAFF] [PREMIUM <:medal:613778322945474561>]`)
        .setAuthor(`${member.user.tag}`, member.user.avatarURL)
        .addField('Статус:', `\`\`\`yaml\n${db.fetch(`status_${message.guild.id}_${member.id}` || "Нет статуса")}\`\`\``)
        .addField('Уровень:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1")} уровень** `, true)
        .addField('Следующий уровень:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1") + 1} уровень**`, true)
        .addField('Количество монет:', `**${db.fetch(`money_${message.guild.id}_${member.id}` || "0")} наличными**`, true)
        .addField('Количество монет:', `**${db.fetch(`bank_${message.guild.id}_${member.id}` || "0")} в банке**`, true)
        .addField('Всего XP:', `**${db.fetch(`xp_${message.guild.id}_${member.id}` || "10")}**`, true)
        .addField('Количество XP:', `**${curXp}/${nxtLvlxp}**` || "0", true)
        .addField('Репутация:', `**${db.fetch(`rep_${message.guild.id}_${member.id}` || "0")} репутации**`, true)
        .addField(`Ящиков:`, `**${db.fetch(`box_${message.guild.id}_${member.id}` || "0")} ящиков**`, true)
        .addField('Семья:', `\`\`\`fix\n${db.fetch(`family_${message.guild.id}_${member.id}`)}\`\`\``)
        .setColor('BLURPLE')
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
        message.channel.send(cembed);
        message.channel.stopTyping();
      } else if(config.premium.includes(member.id)) {
        if(member.user.bot) return err('У ботов не может быть профилей!')
    if(db.fetch(`xp_${message.guild.id}_${member.id}`) === null) db.set(`xp_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`rep_${message.guild.id}_${member.id}`) === null) db.set(`rep_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`lvl_${message.guild.id}_${member.id}`) === null) db.set(`lvl_${message.guild.id}_${member.id}`, 1)
         if(db.fetch(`money_${message.guild.id}_${member.id}`) === null) db.set(`money_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`box_${message.guild.id}_${member.id}`) === null) db.set(`box_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`bank_${message.guild.id}_${member.id}`) === null) db.set(`bank_${message.guild.id}_${member.id}`, 0)
        if(db.fetch(`status_${message.guild.id}_${member.id}`) === null) db.set(`status_${message.guild.id}_${member.id}`, "Нет статуса")
        if(db.fetch(`family_${message.guild.id}_${member.id}`) === null) db.set(`family_${message.guild.id}_${member.id}`, "Нет семьи")
    message.channel.startTyping()
    let lvlembed = new Discord.RichEmbed()
        .setTitle(`Статистика ${member.user.tag} [PREMIUM <:medal:613778322945474561>]`)
        .setAuthor(`${member.user.tag}`, member.user.avatarURL)
        .addField('Статус:', `\`\`\`yaml\n${db.fetch(`status_${message.guild.id}_${member.id}` || 'Нет статуса')}\`\`\``)
        .addField('Уровень:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1")} уровень** `, true)
        .addField('Следующий уровень:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1") + 1} уровень**`, true)
        .addField('Количество монет:', `**${db.fetch(`money_${message.guild.id}_${member.id}` || "0")} наличными**`, true)
        .addField('Количество монет:', `**${db.fetch(`bank_${message.guild.id}_${member.id}` || "0")} в банке**`, true)
        .addField('Всего XP:', `**${db.fetch(`xp_${message.guild.id}_${member.id}` || "10")}**`, true)
        .addField('Количество XP:', `**${curXp}/${nxtLvlxp}**` || "0", true)
        .addField('Репутация:', `**${db.fetch(`rep_${message.guild.id}_${member.id}` || "0")} репутации**`, true)
        .addField(`Ящиков:`, `**${db.fetch(`box_${message.guild.id}_${member.id}` || "0")} ящиков**`, true)
        .addField('Семья:', `\`\`\`fix\n${db.fetch(`family_${message.guild.id}_${member.id}`)}\`\`\``)
        .setColor('BLURPLE')
     .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
        message.channel.send(lvlembed);
        message.channel.stopTyping();
      } else {
   if(member.user.bot) return err('У ботов не может быть профилей!')
    if(db.fetch(`xp_${message.guild.id}_${member.id}`) === null) db.set(`xp_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`rep_${message.guild.id}_${member.id}`) === null) db.set(`rep_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`lvl_${message.guild.id}_${member.id}`) === null) db.set(`lvl_${message.guild.id}_${member.id}`, 1)
         if(db.fetch(`money_${message.guild.id}_${member.id}`) === null) db.set(`money_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`box_${message.guild.id}_${member.id}`) === null) db.set(`box_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`bank_${message.guild.id}_${member.id}`) === null) db.set(`bank_${message.guild.id}_${member.id}`, 0)
        if(db.fetch(`status_${message.guild.id}_${member.id}`) === null) db.set(`status_${message.guild.id}_${member.id}`, "Нет статуса")
        if(db.fetch(`family_${message.guild.id}_${member.id}`) === null) db.set(`family_${message.guild.id}_${member.id}`, "Нет семьи")
    message.channel.startTyping()
    let lvlembed = new Discord.RichEmbed()
        .setTitle(`Статистика ${member.user.tag} [USER]`)
        .setAuthor(`${member.user.tag}`, member.user.avatarURL)
        .addField('Статус:', `\`\`\`yaml\n${db.fetch(`status_${message.guild.id}_${member.id}` || 'Нет статуса')}\`\`\``)
        .addField('Уровень:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1")} уровень** `, true)
        .addField('Следующий уровень:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1") + 1} уровень**`, true)
        .addField('Количество монет:', `**${db.fetch(`money_${message.guild.id}_${member.id}` || "0")} наличными**`, true)
        .addField('Количество монет:', `**${db.fetch(`bank_${message.guild.id}_${member.id}` || "0")} в банке**`, true)
        .addField('Всего XP:', `**${db.fetch(`xp_${message.guild.id}_${member.id}` || "10")}**`, true)
        .addField('Количество XP:', `**${curXp}/${nxtLvlxp}**` || "0", true)
        .addField('Репутация:', `**${db.fetch(`rep_${message.guild.id}_${member.id}` || "0")} репутации**`, true)
        .addField(`Ящиков:`, `**${db.fetch(`box_${message.guild.id}_${member.id}` || "0")} ящиков**`, true)
        .addField('Семья:', `\`\`\`fix\n${db.fetch(`family_${message.guild.id}_${member.id}`)}\`\`\``)
        .setColor('BLURPLE')
     .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
        message.channel.send(lvlembed);
        message.channel.stopTyping();
        }
        }
  
  
if(db.fetch(`langen_${message.guild.id}`)){
  if(member.user.bot) return err('Bots cannot have profiles!')
  if(member.id == creator || member.id === '590843580793356307') {
        message.channel.startTyping()
        let cembed = new Discord.RichEmbed()
        .setTitle(`Profile ${member.user.tag} [STAFF] [PREMIUM <:medal:613778322945474561>]`)
        .setAuthor(`${member.user.tag}`, member.user.avatarURL)
        .addField('Status:', `\`\`\`yaml\n${db.fetch(`status_${message.guild.id}_${member.id}` || "Not status")}\`\`\``)
        .addField('Level:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1")} level** `, true)
        .addField('Next level:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1") + 1} level**`, true)
        .addField('Coins:', `**${db.fetch(`money_${message.guild.id}_${member.id}` || "0")} cash**`, true)
        .addField('Coins:', `**${db.fetch(`bank_${message.guild.id}_${member.id}` || "0")} on bank**`, true)
        .addField('All XP:', `**${db.fetch(`xp_${message.guild.id}_${member.id}` || "10")}**`, true)
        .addField('XP amount:', `**${curXp}/${nxtLvlxp}**` || "0", true)
        .addField('Reputation:', `**${db.fetch(`rep_${message.guild.id}_${member.id}` || "0")} rep**`, true)
        .addField(`Boxes:`, `**${db.fetch(`box_${message.guild.id}_${member.id}` || "0")} box**`, true)
        .addField('Family:', `\`\`\`fix\n${db.fetch(`family_${message.guild.id}_${member.id}`)}\`\`\``)
        .setColor('BLURPLE')
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
        message.channel.send(cembed);
        message.channel.stopTyping();
     } else if(config.premium.includes(member.id)) {
        if(member.user.bot) return err('Bots cannot have profiles!')
    if(db.fetch(`xp_${message.guild.id}_${member.id}`) === null) db.set(`xp_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`rep_${message.guild.id}_${member.id}`) === null) db.set(`rep_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`lvl_${message.guild.id}_${member.id}`) === null) db.set(`lvl_${message.guild.id}_${member.id}`, 1)
         if(db.fetch(`money_${message.guild.id}_${member.id}`) === null) db.set(`money_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`bank_${message.guild.id}_${member.id}`) === null) db.set(`bank_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`box_${message.guild.id}_${member.id}`) === null) db.set(`box_${message.guild.id}_${member.id}`, 0)
        if(db.fetch(`status_${message.guild.id}_${member.id}`) === null) db.set(`status_${message.guild.id}_${member.id}`, "Not status")
        if(db.fetch(`family_${message.guild.id}_${member.id}`) === null) db.set(`family_${message.guild.id}_${member.id}`, "Not family")
    message.channel.startTyping()
    let lvlembed = new Discord.RichEmbed()
        .setTitle(`Profile ${member.user.tag} [PREMIUM <:medal:613778322945474561>]`)
        .setAuthor(`${member.user.tag}`, member.user.avatarURL)
        .addField('Status:', `\`\`\`yaml\n${db.fetch(`status_${message.guild.id}_${member.id}` || 'Not status')}\`\`\``)
        .addField('Level:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1")} level** `, true)
        .addField('Next level:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1") + 1} level**`, true)
        .addField('Coins:', `**${db.fetch(`money_${message.guild.id}_${member.id}` || "0")} cash**`, true)
        .addField('Coins:', `**${db.fetch(`bank_${message.guild.id}_${member.id}` || "0")} on bank**`, true)
        .addField('All XP:', `**${db.fetch(`xp_${message.guild.id}_${member.id}` || "10")}**`, true)
        .addField('XP amount:', `**${curXp}/${nxtLvlxp}**` || "0", true)
        .addField('Reputation:', `**${db.fetch(`rep_${message.guild.id}_${member.id}` || "0")} rep**`, true)
        .addField(`Boxes:`, `**${db.fetch(`box_${message.guild.id}_${member.id}` || "0")} box**`, true)
        .addField('Family:', `\`\`\`fix\n${db.fetch(`family_${message.guild.id}_${member.id}`)}\`\`\``)
        .setColor('BLURPLE')
     .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
        message.channel.send(lvlembed);
        message.channel.stopTyping();
      } else {
         if(member.user.bot) return err('Bots cannot have profiles!');
     if(db.fetch(`xp_${message.guild.id}_${member.id}`) === null) db.set(`xp_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`rep_${message.guild.id}_${member.id}`) === null) db.set(`rep_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`lvl_${message.guild.id}_${member.id}`) === null) db.set(`lvl_${message.guild.id}_${member.id}`, 1)
         if(db.fetch(`money_${message.guild.id}_${member.id}`) === null) db.set(`money_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`box_${message.guild.id}_${member.id}`) === null) db.set(`box_${message.guild.id}_${member.id}`, 0)
         if(db.fetch(`bank_${message.guild.id}_${member.id}`) === null) db.set(`bank_${message.guild.id}_${member.id}`, 0)
        if(db.fetch(`status_${message.guild.id}_${member.id}`) === null) db.set(`status_${message.guild.id}_${member.id}`, "Not Status")
        if(db.fetch(`family_${message.guild.id}_${member.id}`) === null) db.set(`family_${message.guild.id}_${member.id}`, "Not Family")
         message.channel.startTyping()
        let lvlembed = new Discord.RichEmbed()
        .setTitle(`Profile ${member.user.tag} [USER]`)
        .setAuthor(`${member.user.tag}`, member.user.avatarURL)
        .addField('Status:', `\`\`\`yaml\n${db.fetch(`status_${message.guild.id}_${member.id}` || 'Not status')}\`\`\``)
        .addField('Level:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1")} level** `, true)
        .addField('Next level:', `**${db.fetch(`lvl_${message.guild.id}_${member.id}` || "1") + 1} level**`, true)
        .addField('Coins:', `**${db.fetch(`money_${message.guild.id}_${member.id}` || "0")} cash**`, true)
        .addField('Coins:', `**${db.fetch(`bank_${message.guild.id}_${member.id}` || "0")} on bank**`, true)
        .addField('All XP:', `**${db.fetch(`xp_${message.guild.id}_${member.id}` || "10")}**`, true)
        .addField('XP amount:', `**${curXp}/${nxtLvlxp}**` || "0", true)
        .addField('Reputation:', `**${db.fetch(`rep_${message.guild.id}_${member.id}` || "0")} rep**`, true)
        .addField(`Boxes:`, `**${db.fetch(`box_${message.guild.id}_${member.id}` || "0")} box**`, true)
        .addField('Family:', `\`\`\`fix\n${db.fetch(`family_${message.guild.id}_${member.id}`)}\`\`\``)
        .setColor('BLURPLE')
       .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
        message.channel.send(lvlembed);
        message.channel.stopTyping();
        }
}
  }
module.exports.help = {
  name: ["prof" , "profile"],
  desc: "Показать ваш или чужой профиль.",
  desc2: "Wiew your or member profile (on this server)",
  use: "profile [@пользователь]",
  use2: "profile [@user]",
  otdel: "Economy"
}