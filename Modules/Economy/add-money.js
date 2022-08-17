let Discord = require('discord.js');
let db = require('quick.db');
let config = require('../../config.json')

exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
     if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером')
  if(args[0] !== 'cash' && args[0] !== 'bank') return err('Укажите аргумент "cash" или "bank".')
  if(args[0] === 'bank'){
  let aUser = message.guild.member(message.mentions.users.first());
  if(!args[1]) return err('Вы не упомянули пользователя.')
    if(!aUser) return err('Пользователь не найден.')
  if(aUser.user.bot) return err('Выдать монетки боту нельзя.');
   if(!args[2]) return err('Укажите сумму.')
     if(isNaN(args[2])) return err('Это не является суммой.')
    if(parseInt(args[2]) < 1) return err('Сумма должна быть больше 0.')
    const mon = parseInt(args[2])
    db.add(`bank_${message.guild.id}_${aUser.id}`, mon)
    let embed = new Discord.RichEmbed()
    .setTitle('Успешно! <:CheckYes:594045985982775296>')
    .setDescription(`Вы выдали пользователю **${aUser}** **${mon}** монеток в банк.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
  } else if(args[0] === 'cash') {
  if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером')
  let aUser = message.guild.member(message.mentions.users.first());
  if(!args[1]) return err('Вы не упомянули пользователя.')
    if(!aUser) return err('Пользователь не найден.')
  if(aUser.user.bot) return err('Выдать монетки боту нельзя.');
   if(!args[2]) return err('Укажите сумму.')
     if(isNaN(args[2])) return err('Это не является суммой.')
    if(parseInt(args[2]) < 1) return err('Сумма должна быть больше 0.')
    const mon = parseInt(args[2])
    db.add(`money_${message.guild.id}_${aUser.id}`, mon)
    let embed = new Discord.RichEmbed()
    .setTitle('Успешно! <:CheckYes:594045985982775296>')
    .setDescription(`Вы выдали пользователю **${aUser}** **${mon}** монеток наличными.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
  }}
    if(db.fetch(`langen_${message.guild.id}`)){
       if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild')
  if(args[0] !== 'cash' && args[0] !== 'bank') return err('Specify an argument "cash" else "bank".')
  if(args[0] === 'bank'){
  let aUser = message.guild.member(message.mentions.users.first());
  if(!args[1]) return err('You did not mention the user.')
    if(!aUser) return err('User not found.')
  if(aUser.user.bot) return err('Coins cannot be issued to the bot.');
   if(!args[2]) return err('Indicate the amount.')
     if(isNaN(args[2])) return err('This is not a sum.')
    if(parseInt(args[2]) < 1) return err('Amount must be greater than 0.')
    const mon = parseInt(args[2])
    db.add(`bank_${message.guild.id}_${aUser.id}`, mon)
    let embed = new Discord.RichEmbed()
    .setTitle('Succesfully! <:CheckYes:594045985982775296>')
    .setDescription(`You give a user **${aUser}** **${mon}** coins on bank.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
  } else if(args[0] === 'cash') {
  if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild')
  let aUser = message.guild.member(message.mentions.users.first());
  if(!args[1]) return err('You did not mention the user.')
    if(!aUser) return err('User not found.')
  if(aUser.user.bot) return err('Coins cannot be issued to the bot.');
   if(!args[2]) return err('Indicate the amount.')
     if(isNaN(args[2])) return err('This is not a sum.')
    if(parseInt(args[2]) < 1) return err('Amount must be greater than 0.')
    const mon = parseInt(args[2])
    db.add(`money_${message.guild.id}_${aUser.id}`, mon)
    let embed = new Discord.RichEmbed()
    .setTitle('Succesfully! <:CheckYes:594045985982775296>')
    .setDescription(`You give a user **${aUser}** **${mon}** coins on cash.`)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('BLURPLE')
    message.channel.send(embed)
  }
}}
exports.help = {
  name: ["add-money"],
  desc: "Добавить монетки пользователю.",
  desc2: "Add coins on user.",
  use: "add-money <cash | bank> <@пользователь> <количество>",
  use2: "add-money <cash | bank> <@user> <amount>",
  otdel: "Economy"
}