const Discord = require('discord.js')
let db = require('quick.db')

module.exports.run = async (client, message,args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
    const user = message.guild.member(message.mentions.users.first())
    if(!user) return err('Вы не упомянули пользователя.')
    if(user.id === message.author.id) return err('Вы не можете передать монетки себе.')
    if(!args[1]) return err('Укажите сумму.')
    if(parseInt(args[1]) < 1) return err('Сумма должна быть больше 0.')
    if(isNaN(args[1])) return err('Это не является суммой.')
    const mon = parseInt(args[1])
    let comment = args.slice(2).join(' ')
    let kvi = Math.floor(Math.random() * 999999999)
   // if(mon.toString().startsWith('-')) return message.channel.send('Нельзя перевести отрицательное кол-во денег!')
    if(mon > db.fetch(`money_${message.guild.id}_${message.author.id}`)) return err('У вас нет столько монеток.')
  db.add(`money_${message.guild.id}_${message.author.id}`, - mon)
  db.add(`money_${message.guild.id}_${user.id}`, + mon)
    if(!comment) {
    succ(`Вы перевели __**${mon}**__ монеток **${user.user.username}**.
Система JeggyBank. Спасибо, что пользуетесь нами!
ID Перевода: **${kvi}**.`)
      let embed = new Discord.RichEmbed()
     .setTitle('Перевод')
      .addField('Вам пришли монетки от:', `**${message.author.username}**`)
      .addField('На сервере:', `**${message.guild.name}**`)
      .addField('ID Перевода:', `**${kvi}**`)
       .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
       .setColor('ORANGE')
      user.send(embed).catch(err=>{
return;
      })
    } else {
      succ(`Вы перевели __**${mon}**__ монеток **${user.user.username}**.
Система JeggyBank. Спасибо, что пользуетесь нами!
ID Перевода: **${kvi}.**
Комментарий: **${comment}**`)
      let embed = new Discord.RichEmbed()
.setTitle('Перевод')
      .addField('Вам пришли монетки от:', `**${message.author.username}**`)
      .addField('На сервере:', `**${message.guild.name}**`)
      .addField('ID Перевода:', `**${kvi}**`)
      .addField('Комментарий к переводу:', `**${comment}**`)
       .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
       .setColor('ORANGE')
        .setTimestamp()
      user.send(embed).catch(err=>{
return;
})
    }
  }
   if(db.fetch(`langen_${message.guild.id}`)){
    const user = message.guild.member(message.mentions.users.first())
    if(!user) return err('You did not mention the user.')
    if(user.id === message.author.id) return err('You cannot give coins to yourself.')
    if(!args[1]) return err('Indicate the amount.')
    if(parseInt(args[1]) < 1) return err('Amount must be greater than 0.')
    if(isNaN(args[1])) return err('This is not a sum.')
    const mon = parseInt(args[1])
    let comment = args.slice(2).join(' ')
    let kvi = Math.floor(Math.random() * 999999999)
   // if(mon.toString().startsWith('-')) return message.channel.send('Нельзя перевести отрицательное кол-во денег!')
    if(mon > db.fetch(`money_${message.guild.id}_${message.author.id}`)) return err('You do not have so many coins.')
  db.add(`money_${message.guild.id}_${message.author.id}`, - mon)
  db.add(`money_${message.guild.id}_${user.id}`, + mon)
      if(!comment) {
    succ(`You transferred __**${mon}**__ coins **${user.user.username}**.
JeggyBank system. Thank you for using us!
Translation ID: **${kvi}**.`)
      let embed = new Discord.RichEmbed()
     .setTitle('Translate')
      .addField('You received coins from:', `**${message.author.username}**`)
      .addField('On server:', `**${message.guild.name}**`)
      .addField('Translation ID:', `**${kvi}**`)
       .setColor('ORANGE')
       .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
      user.send(embed).catch(err=>{
return;
      })
    } else {
      succ(`You transferred __**${mon}**__ coins **${user.user.username}**.
JeggyBank system. Thank you for using us!
Translation ID: **${kvi}.**
Comment: **${comment}**`)
      let embed = new Discord.RichEmbed()
     .setTitle('Translate')
      .addField('You received coins from:', `**${message.author.username}**`)
      .addField('On server:', `**${message.guild.name}**`)
      .addField('Translation ID:', `**${kvi}**`)
      .addField('Comment on translate:', `**${comment}**`)
       .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
      .setColor('ORANGE')
        .setTimestamp()
      user.send(embed).catch(err=>{
return;
      })
    }
    }
}

    module.exports.help = {
        name: ["pay"],
      desc: "Перевести монетки другому пользователю.",
      desc2: "Transfer coins to another user.",
      use: "pay <@пользователь> <количество> [комментарий]",
      use2: "pay <@user> <amount> [comment]",
      otdel: "Economy"
    }