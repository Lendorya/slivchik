const Discord = require("discord.js");
const os = require('os')
const cpuStat = require("cpu-stat");
let db = require(`quick.db`)
const moment = require("moment")
const version = require("../../config.json")
module.exports.run = async (client, message, args, err, succ) => {
    if(db.fetch(`information_${message.guild.id}`, 'true')) return;
            let guilds;
              await client.shard.fetchClientValues('guilds.size').then(a => guilds = a)
              let channels;
              await client.shard.fetchClientValues('channels.size').then(a => channels = a)
              let users;
              await client.shard.fetchClientValues(`users.size`).then(a => users = a)
              let emojis;
              await client.shard.fetchClientValues('emojis.size').then(a => emojis = a)
              let voice;
              await client.shard.fetchClientValues('voiceConnections.size').then(a => voice = a) 
              let up;
              await client.shard.fetchClientValues('uptime').then(a => up = a) 
    cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
            if(db.fetch(`langru_${message.guild.id}`)){
const embed = new Discord.RichEmbed()
.setTitle(`Статистика JeggyBot`)
 .addField('Шард №0', `
**Серверов: ${guilds[0]}**
**Каналов: ${channels[0]}**
**Пользователей: ${users[0]}**
**Эмодзи: ${emojis[0]}**
**Гол. подключений: ${voice[0]}**
**Работает уже:** **${(Math.round(up[0] / (1000 * 60 * 60)))} часов, ${(Math.round(up[0] / (1000 * 60)) % 60)} минут**`, true)
.addField('Шард №1', `
**Серверов: ${guilds[1]}**
**Каналов: ${channels[1]}**
**Пользователей: ${users[1]}**
**Эмодзи: ${emojis[1]}**
**Гол. подключений: ${voice[1]}**
**Работает уже:** **${(Math.round(up[1] / (1000 * 60 * 60)))} часов, ${(Math.round(up[1] / (1000 * 60)) % 60)} минут**`, true)
.addField('CPU:', `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
.addField('Нагрузка процессора:', `**${percent.toFixed(2)}%**`, true)
.addField('ОЗУ:', `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB/${(os.totalmem() / 1024 / 1024).toFixed(2)}MB**`, true)
.addField('ОС:', `**${os.platform()}**`, true)
.addField(`Версия:`, `**${version.version}**`, true)
.addField(`Библиотека:`, `**discord.js v${Discord.version}**`, true)
.addField(`Node:`, `**${process.version}**`, true)
.addField(`Время по МСК:`, `**${message.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}**`, true)
.addField(`Авторизация:`, `**${client.user.tag}**`, true)
.setColor('BLURPLE')
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
message.channel.send(embed);
            } 
    })}
module.exports.help = {
    name: ["stats"],
    desc: "Посмотреть статистику бота.",
  desc2: "View stats on bot.",
  use: "stats",
  use2: "stats",
  otdel: "Information"
}