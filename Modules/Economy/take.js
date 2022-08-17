let Discord = require('discord.js');
let db = require('quick.db');
let config = require('../../config.json')

exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
       if(args[0] === 'all'){
   let oo = db.fetch(`bank_${message.guild.id}_${message.author.id}`)
   if(oo === 0) return err('У вас нет монеток в банке.')
    db.add(`bank_${message.guild.id}_${message.author.id}`, -oo)
     db.add(`money_${message.guild.id}_${message.author.id}`, +oo)
      db.set(`bank_${message.guild.id}_${message.author.id}`, 0)
    let embed = new Discord.RichEmbed()
    .setTitle('Успешно! <:CheckYes:594045985982775296>')
   .setDescription(`Вы сняли с банка **${oo}** монеток.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
  } else {
    let oo = db.fetch(`bank_${message.guild.id}_${message.author.id}`)
   if(!args[0]) return err('Укажите сумму.')
     if(isNaN(args[0])) return err('Это не является суммой.')
    if(parseInt(args[0]) < 1) return err('Сумма должна быть больше 0.')
   if(parseInt(args[0]) > oo) return err('В банке нет столько монет.')
    const mon = parseInt(args[0])
    db.add(`bank_${message.guild.id}_${message.author.id}`, -mon)
     db.add(`money_${message.guild.id}_${message.author.id}`, +mon)
    let embed = new Discord.RichEmbed()
    .setTitle('Успешно! <:CheckYes:594045985982775296>')
   .setDescription(`Вы сняли с банка **${mon}** монеток.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
  }
  }
   if(db.fetch(`langen_${message.guild.id}`)){
       if(args[0] === 'all'){
   let oo = db.fetch(`bank_${message.guild.id}_${message.author.id}`)
   if(oo === 0) return err('У вас нет монеток в банке.')
    db.add(`bank_${message.guild.id}_${message.author.id}`, -oo)
     db.add(`money_${message.guild.id}_${message.author.id}`, +oo)
      db.set(`bank_${message.guild.id}_${message.author.id}`, 0)
    let embed = new Discord.RichEmbed()
    .setTitle('Успешно! <:CheckYes:594045985982775296>')
   .setDescription(`Вы сняли с банка **${oo}** монеток.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
  } else {
    let oo = db.fetch(`bank_${message.guild.id}_${message.author.id}`)
   if(!args[0]) return err('Укажите сумму.')
     if(isNaN(args[0])) return err('Это не является суммой.')
    if(parseInt(args[0]) < 1) return err('Сумма должна быть больше 0.')
   if(parseInt(args[0]) > oo) return err('В банке нет столько монет.')
    const mon = parseInt(args[0])
    db.add(`bank_${message.guild.id}_${message.author.id}`, -mon)
     db.add(`money_${message.guild.id}_${message.author.id}`, +mon)
    let embed = new Discord.RichEmbed()
    .setTitle('Успешно! <:CheckYes:594045985982775296>')
   .setDescription(`Вы сняли с банка **${mon}** монеток.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
}
   }
  }
exports.help = {
  name: ["take", "with", "withdraw"],
  desc: "Снять деньги с банка.",
  desc2: "Take coins on bank.",
  use: "take <количество> | all",
  use2: "take <amount> | all",
  otdel: "Economy"
}