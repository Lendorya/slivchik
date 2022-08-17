let Discord = require('discord.js');
let db = require('quick.db');
let moment = require('moment')
const vremya = 1000 * 60 * 60 * 3;
let dailed = new Map();
exports.run = async (client, message,args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  let crime = Math.random() * 4;
  let dp = Math.floor(Math.random() * 200)
  
  if(db.fetch(`langru_${message.guild.id}`)){
    let cww = dailed.get(message.author.id);
        if(cww === undefined) {
    let ura = [`Вы ограбили банк и получили **${dp}** монеток.`,
                `Вы забрали у бабушки сумку и взяли **${dp}** монеток.`,
                `Вы украли в магазине несколько бутылок алкоголя, которые в перепродаже стоили **${dp}** монеток.`,
               `Вы ограбили ювелирный магазин, и в общей сумме получили **${dp}** монеток.`,
               `Вы ограбили магазин и получили **${dp}** монеток.`]
    let suka = [`У вас не получилось ограбить банк и вас арестовали а также забрали у вас **${dp}** монеток..`,
               `У вас не получилось забрать сумку у бабушки и вам пришлось дать ей за моральный ущерб **${dp}** монеток..`,
               `Вы не смогли украсть в магазине алкоголь и у вас забрали **${dp}** монеток за разбитые бутылки..`,
               `Вы не смогли ограбить ювелирный магазин и сработала сигнализация.. У вас забрали **${dp}** монеток..`,
               `У вас не получилось ограбить магазин, потому что вас спалил покупатель.. Вам пришлось дать **${dp}** монеток..`]
    moment.locale('ru')
  if(crime < 2) {
    let embed = new Discord.RichEmbed()
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setTitle('Неудача')
    .setColor('RED')
    .setDescription(suka[Math.floor(Math.random() * suka.length)])
    message.channel.send(embed)
    db.add(`money_${message.guild.id}_${message.author.id}`, -dp)
  }
  if(crime > 2) {
    let embed = new Discord.RichEmbed()
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setColor('GREEN')
    .setTitle('Ограбление')
    .setDescription(ura[Math.floor(Math.random() * ura.length)])
    message.channel.send(embed)
     db.add(`money_${message.guild.id}_${message.author.id}`, dp)
  }
          dailed.set(message.author.id, Date.now() + 1000 * 60 *60 * 3)
            setTimeout(() => {
                dailed.delete(message.author.id);
            }, vremya) 
        } else {
          return err(`Вы уже грабили, передохните и продолжайте ${moment(cww).fromNow()}`)
        }
}
 if(db.fetch(`langen_${message.guild.id}`)){
    let cww = dailed.get(message.author.id);
        if(cww === undefined) {
          moment.locale('en')
    let ura = [`You robbed a bank and received **${dp}** coins.`
                `You took your bag from your grandmother and took ** ${dp}** coins.`
                `You stole several bottles of alcohol in a store that were worth ** ${dp}** coins on resale.`,
               `You robbed a jewelry store, and in total received ** ${dp}** coins.`,
               `You robbed a store and received **${dp}** coins.`]
    let suka = [`You didn’t succeed in robbing the bank and you were arrested and they still took **${dp}** coins from you..`,
               `You didn’t manage to take the bag from your grandmother and you had to give her **${dp}** coins for moral damage..`,
               `You could not steal alcohol in the store and you took ** ${dp}** coins for broken bottles..`,
               `You could not rob a jewelry store and the alarm went off.. **${dp}** coins were taken from you..`,
               `You didn’t succeed in robbing the store because the buyer burned you.. You had to give **${dp}** coins..`]
  if(crime < 2) {
    let embed = new Discord.RichEmbed()
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setTitle('Fail')
    .setColor('RED')
    .setDescription(suka[Math.floor(Math.random() * suka.length)])
    message.channel.send(embed)
    db.add(`money_${message.guild.id}_${message.author.id}`, -dp)
  }
  if(crime > 2) {
    let embed = new Discord.RichEmbed()
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setColor('GREEN')
    .setTitle('Crimed!')
    .setDescription(ura[Math.floor(Math.random() * ura.length)])
    message.channel.send(embed)
     db.add(`money_${message.guild.id}_${message.author.id}`, dp)
  }
          dailed.set(message.author.id, Date.now() + 1000 * 60 *60 * 3)
            setTimeout(() => {
                dailed.delete(message.author.id);
            }, vremya) 
        } else {
         return err(`You already robbed, take a break and continue ${moment(cww).fromNow()}`)
}
}
}
exports.help = {
  name: ["crime"],
  desc: "Ограбление.",
  desc2: "Crime.",
  use: "crime",
  use2: "crime",
  otdel: "Economy"
}