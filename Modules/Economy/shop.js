const Discord = require("discord.js");
let db = require(`quick.db`)
module.exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
    let curcoins = db.fetch(`money_${message.guild.id}_${message.author.id}`)
    let curreps = db.fetch(`rep_${message.guild.id}_${message.author.id}`)
    if(db.fetch(`langru_${message.guild.id}`)){
    const embed = new Discord.RichEmbed()
    .setColor('BLURPLE')
    .setTitle('Глобальный магазин бота')
    .setDescription(`У нас в наличии есть:

**1 Ящик для открытия. Открыть +box. Цена: 50 монеток. (+buy ящик)**
**+1 Репутация вам. Цена: 200 монеток. (+buy реп)**
**1200 XP к вашему уровню. Цена: 400 монеток. (+buy буст)**

У вас **${curcoins}** монеток.
У вас **${curreps}** репутаций.`)
   .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
    .setColor('GREEN')
    message.channel.send(embed);
    }
  if(db.fetch(`langen_${message.guild.id}`)){
    const embed = new Discord.RichEmbed()
    .setColor('BLURPLE')
    .setTitle('Global store.')
    .setDescription(`We have available:

**1 Box for opening. Open +box. Price: 50 coins. (+buy box)**
**+1 Reputation to you. Price: 200 coins. (+buy rep)**
**1200 XP to your level. Price: 400 coins. (+buy boost)**

You have a **${curcoins}** coins.
You have a **${curreps}** reputation.`)
   .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
   .setTimestamp()
    .setColor('GREEN')
    message.channel.send(embed);
    }
}
module.exports.help = {
    name: ["shop"],
  desc: "Посмотреть глобальный магазин.",
  desc2: "View global store.",
  use: "shop",
  use2: "shop",
  otdel: "Economy"
}