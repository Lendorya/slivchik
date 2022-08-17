const Discord = require('discord.js')
let db = require('quick.db');
module.exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
    const mon = db.fetch(`money_${message.guild.id}_${message.author.id}`)
    if(!args[0]) return err('Вы не указали предмет.')
    if(args[0].toLowerCase() === 'ящик' || args[0].toLowerCase() === 'box') {
        if(mon < 50) return err('У вас недостаточно монет для покупки ящика.')
        succ('Вы купили один ящик.');
      db.add(`money_${message.guild.id}_${message.author.id}`, -50)
         db.add(`box_${message.guild.id}_${message.author.id}`, +1)

    } else if(args[0].toLowerCase() === 'реп' || args[0].toLowerCase() === 'rep') {
        if(mon < 200) return err('У вас недостаточно монет для покупки репутации.')
        succ('Вы купили одну репутацию.');
         db.add(`money_${message.guild.id}_${message.author.id}`, -200)
         db.add(`rep_${message.guild.id}_${message.author.id}`, +1)

    } else if(args[0].toLowerCase() === 'буст'|| args[0].toLowerCase() === 'boost') {
        if(mon < 400) return err('У вас недостаточно монет для покупки буста.')
        succ(`Вы купили один буст хр. Вам добавлено 1200 xp`);
          db.add(`money_${message.guild.id}_${message.author.id}`, -400)
         db.add(`xp_${message.guild.id}_${message.author.id}`, +1200)
    }
  }
    if(db.fetch(`langen_${message.guild.id}`)){
    const mon = db.fetch(`money_${message.guild.id}_${message.author.id}`)
    if(!args[0]) return err('You did not specify an item.')
    if(args[0].toLowerCase() === 'ящик' || args[0].toLowerCase() === 'box') {
        if(mon < 50) return err('You do not have enough coins to buy a box.')
        succ('You bought one box.');
      db.add(`money_${message.guild.id}_${message.author.id}`, -50)
         db.add(`box_${message.guild.id}_${message.author.id}`, +1)

    } else if(args[0].toLowerCase() === 'реп' || args[0].toLowerCase() === 'rep') {
        if(mon < 200) return err('You do not have enough coins to buy a rep.')
        succ('You have bought one reputation.');
         db.add(`money_${message.guild.id}_${message.author.id}`, -200)
         db.add(`rep_${message.guild.id}_${message.author.id}`, +1)

    } else if(args[0].toLowerCase() === 'буст'|| args[0].toLowerCase() === 'boost') {
        if(mon < 400) return err('You do not have enough coins to buy a xp.')
        succ(`You bought one boost XP. You have added 1200 xp`);
          db.add(`money_${message.guild.id}_${message.author.id}`, -400)
         db.add(`xp_${message.guild.id}_${message.author.id}`, +1200)
    }
    }
}
module.exports.help = {
    name: ["buy"],
  desc: "Купить вещь из глобального магазина.",
  desc2: "Buy item on global shop.",
  use: "buy <предмет>",
  use2: "buy <item>",
  otdel: "Economy"
}