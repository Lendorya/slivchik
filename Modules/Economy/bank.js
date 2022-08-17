let Discord = require('discord.js');
let db = require('quick.db');
let config = require('../../config.json')

exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
    if(args[0] === 'all'){
   let oo = db.fetch(`money_${message.guild.id}_${message.author.id}`)
   if(oo === 0) return err('У вас нет монеток.')
      if(oo < 1) return err('У вас нет монеток')
    db.add(`bank_${message.guild.id}_${message.author.id}`, oo)
     db.add(`money_${message.guild.id}_${message.author.id}`, -oo)
      db.set(`money_${message.guild.id}_${message.author.id}`, 0)
    let embed = new Discord.RichEmbed()
    .setTitle('Успешно! <:CheckYes:594045985982775296>')
   .setDescription(`Вы положили в банк **${oo}** монеток.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
    } else {
        let oo = db.fetch(`money_${message.guild.id}_${message.author.id}`)
   if(!args[0]) return err('Укажите сумму.')
     if(isNaN(args[0])) return err('Это не является суммой.')
    if(parseInt(args[0]) < 1) return err('Сумма должна быть больше 0.')
   if(parseInt(args[0]) > oo) return err('У вас нет столько монеток.')
    const mon = parseInt(args[0])
    db.add(`bank_${message.guild.id}_${message.author.id}`, mon)
     db.add(`money_${message.guild.id}_${message.author.id}`, -mon)
    let embed = new Discord.RichEmbed()
    .setTitle('Успешно! <:CheckYes:594045985982775296>')
   .setDescription(`Вы положили в банк **${mon}** монеток.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed) 
    }
  }
   if(db.fetch(`langen_${message.guild.id}`)){
        if(args[0] === 'all'){
   let oo = db.fetch(`money_${message.guild.id}_${message.author.id}`)
   if(oo === 0) return err('You have 0 coins.')
          if(oo < 1) return err('You have 0 coins')
    db.add(`bank_${message.guild.id}_${message.author.id}`, oo)
     db.add(`money_${message.guild.id}_${message.author.id}`, -oo)
      db.set(`money_${message.guild.id}_${message.author.id}`, 0)
    let embed = new Discord.RichEmbed()
    .setTitle('Succesfully! <:CheckYes:594045985982775296>')
   .setDescription(`You put in the bank **${oo}** coins.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
   } else {
    let oo = db.fetch(`money_${message.guild.id}_${message.author.id}`)
   if(!args[0]) return err('Indicate the amount.')
     if(isNaN(args[0])) return err('This is not a sum.')
    if(parseInt(args[0]) < 1) return err('Amount must be greater than 0.')
   if(parseInt(args[0]) > oo) return err('You do not have so many coins.')
    const mon = parseInt(args[0])
    db.add(`bank_${message.guild.id}_${message.author.id}`, mon)
     db.add(`money_${message.guild.id}_${message.author.id}`, -mon)
    let embed = new Discord.RichEmbed()
    .setTitle('Succesfully! <:CheckYes:594045985982775296>')
   .setDescription(`You put in the bank **${mon}** coins.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
  }
}
}
exports.help = {
  name: ["bank", "deposit", "dep"],
  desc: "Положить деньги в банк.",
  desc2: "Put coins in the bank.",
  use: "bank <количество> | all",
  use2: "bank <amount> | all",
  otdel: "Economy"
}