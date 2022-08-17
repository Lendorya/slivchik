const Discord = require("discord.js");
const bugs = '564406341486247946';
let bugged = new Map();
let suka = 1000 * 60 * 30;
let db = require('quick.db')
let moment = require('moment')
module.exports.run = async (client, message, args, err, succ) => {
    function send(id, msg) {
        client.channels.get(id).send(msg);
        };
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
} 
const elf = random(0, 1000000)
if(db.fetch(`langru_${message.guild.id}`)){
   moment.locale('ru')
   let cww = bugged.get(message.author.id);
        if(cww === undefined) {
      if (!args[0]) return err('Вы не указали баг.');
      let bug = args.join(" ");
      const embed = new Discord.RichEmbed()
      .setTitle('Новая ошибка')
      .addField('Тикет ошибки:', `**${elf}**`)
      .addField(`Сервер:`, `**${message.guild.name}** (ID ${message.guild.id})`)
      .addField(`Создатель:`, `**${message.guild.owner.user.tag}** (ID ${message.guild.ownerID})`)
      .addField(`Пользователь:`, `**${message.author.tag}** (ID ${message.author.id})`)
      .addField(`Канал:`, `**${message.channel}** (ID ${message.channel.id})`)
      .setDescription(`Описание ошибки: **${bug}**`)
      .setColor('RED')
      send(bugs, embed);
      succ(`Баг был успешно отправлен. Запомните тикет: ${elf}.`);
   bugged.set(message.author.id, Date.now() + 1000 * 60 *30)
            setTimeout(() => {
                bugged.delete(message.author.id);
            }, suka) 
        } else {
          return err(`Вы уже отправляли баг, отправляйте снова ${moment(cww).fromNow()}`)
        }
}
  if(db.fetch(`langen_${message.guild.id}`)){
   moment.locale('en')
   let cww = bugged.get(message.author.id);
        if(cww === undefined) {
      if (!args[0]) return err('You did not indicate an bug.');
      let bug = args.join(" ");
      const embed = new Discord.RichEmbed()
      .setTitle('Новая ошибка [ENGLISH]')
      .addField('Тикет ошибки:', `**${elf}**`)
      .addField(`Сервер:`, `**${message.guild.name}** (ID ${message.guild.id})`)
      .addField(`Создатель:`, `**${message.guild.owner.user.tag}** (ID ${message.guild.ownerID})`)
      .addField(`Пользователь:`, `**${message.author.tag}** (ID ${message.author.id})`)
      .addField(`Канал:`, `**${message.channel}** (ID ${message.channel.id})`)
      .setDescription(`Описание ошибки: **${bug}**`)
      send(bugs, embed);
      succ(`Bug send. Remember the ticket: ${elf}.`);
   bugged.set(message.author.id, Date.now() + 1000 * 60 *30)
            setTimeout(() => {
                bugged.delete(message.author.id);
            }, suka) 
        } else {
          return err(`You already sent an bug, send again ${moment(cww).fromNow()}`)
        }
}
}

module.exports.help = {
    name: ["bug"],
    desc: "Отправка ошибки.",
  desc2: "Bug send.",
  use: "bug <Описание>",
  use2: "bug <Description>",
  otdel: 'General'
}