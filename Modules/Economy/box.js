const Discord = require("discord.js");
let db = require('quick.db')

module.exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
    if(db.fetch(`langru_${message.guild.id}`)){
let dp = Math.floor(Math.random() * 150) 
if(db.fetch(`box_${message.guild.id}_${message.author.id}`) < 1) return err('У вас нет ящиков для открытия.');
db.add(`box_${message.guild.id}_${message.author.id}`, -1)
    const embed = new Discord.RichEmbed()
        .setColor('ORANGE')
        .setTitle('Открытие..')
        .setDescription(`Открываем ящик..`)
        .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp();
let msg;
await message.channel.send(embed).then(m => msg = m)
setTimeout(()=>{
msg.edit(embed.setDescription(`Вам выпало **${dp}** монеток.`, embed.setTitle('Открытие закончено.', embed.setColor('GREEN'))));
}, 3000)
db.add(`money_${message.guild.id}_${message.author.id}`, dp)
    }
   if(db.fetch(`langen_${message.guild.id}`)){
let dp = Math.floor(Math.random() * 150) 
if(db.fetch(`box_${message.guild.id}_${message.author.id}`) < 1) return err('You dont have boxes to open.');
db.add(`box_${message.guild.id}_${message.author.id}`, -1)
    const embed = new Discord.RichEmbed()
        .setColor('ORANGE')
        .setTitle('Opening..')
        .setDescription(`Open box..`)
        .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp();
let msg;
await message.channel.send(embed).then(m => msg = m)
setTimeout(()=>{
msg.edit(embed.setDescription(`You give **${dp}** coins.`, embed.setTitle('Open end.', embed.setColor('GREEN'))));
}, 3000)
db.add(`money_${message.guild.id}_${message.author.id}`, dp)
    }
}
module.exports.help = {
    name: ["box", "chest"],
  desc: "Открыть ящик с сюрпризом в виде монеток.",
    desc2: "Open a surprise box in the form of coins.",
  use: "box",
  use2: "box",
  otdel: "Economy"
}