let Discord = require('discord.js');
let fs = require('fs');
let config = require('../../config.json')
let db = require('quick.db');
exports.run = async (client, message, args, err, succ) => {
  let prefixee = db.fetch(`prefix_${message.guild.id}`) || "+";
  
  if(db.fetch(`langru_${message.guild.id}`)) {
  if(args[0]) {
    let command = args[0];
    if(client.commands.has(command)) {
       command = client.commands.get(command);
     // if(command === undefined) return message.reply('ты даун да')
      let embed = new Discord.RichEmbed()
    .setTitle(`Команда ${command.help.name.join(' | ')}`)
    .addField(`Название:`, `**${command.help.name.join(' | ')}**`,true)
    .addField(`Описание:`, `**${command.help.desc}**`, true)
    .addField(`Использование:`, `**${command.help.use}**`, true)
    .addField(`Модуль:`, `**${command.help.otdel}**`,true)
    .setFooter(`JeggyBot, 2018-2019. ©`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setColor('GREEN')
    .setTimestamp()
      message.channel.send(embed)
    }
  }
    if(!args[0]) {
    var embed2 = new Discord.RichEmbed()
    .setColor('#b442ec')
    .setTitle('INFORMATION')
    .setDescription(`
**| - Аргумент "Или".**
**Аргумент <> обязятелен**
**Аргумент [] НЕ обязателен**
Текущий префикс бота на этом сервере \`${prefixee}\`
Поменять можно командой \`${prefixee}set-prefix\`
Поддержать авторов бота \`${prefixee}donate\``)
.addField('HELP', `Помощь по отделам бота:
• Главное: **${prefixee}help** \`general\` | \`основное\`
• Модерация: **${prefixee}help** \`moderation\` | \`модерация\`
• Утилита: **${prefixee}help** \`util\` | \`utility\` | \`утиль\` | \`утилита\`
• NSFW: **${prefixee}help** \`nsfw\` | \`18+\`
• Фан: **${prefixee}help** \`fun\` | \`фан\`
• Мини-игры: **${prefixee}help** \`minigames\` | \`миниигры\`
• Информация: **${prefixee}help** \`information\` | \`информация\`
• Role Play: **${prefixee}help** \`role-play\` | \`rp\` | \`роле-плей\`
• SAY: **${prefixee}help** \`say\` | \`сей\`
• Экономика: **${prefixee}help** \`economy\` | \`экономика\`
• Музыка: **${prefixee}help** \`music\` | \`музыка\``)
.addField('SUPPORT', `
Нашли ошибку? Отправьте \`${prefixee}bug\` <Описание ошибки>
Хотите дать идею? Отправьте \`${prefixee}idea\` <Описание идеи>
Помощь с настройкой эмбеда: \`${prefixee}help embed\`
Сервер для помощи: https://discord.gg/gbAC9sa
Изменить язык: \`${prefixee}language ru-RU, en-EN\`
ru-RU - Русский (Россия)
en-EN - English (United Kingdom)`)
.addField('LINKS', `
[Пригласи меня!](https://discordapp.com/oauth2/authorize?client_id=551829966602502183&permissions=21469588398&scope=bot) | [Invite me!](https://discordapp.com/oauth2/authorize?client_id=551829966602502183&permissions=21469588398&scope=bot)\n[Проголосуй за меня!](https://discordbots.org/bot/551829966602502183/vote) | [Vote the bot!](https://discordbots.org/bot/551829966602502183/vote)\n[Freedom Inc.](https://freedom-inc.wixsite.com/freedom) | [Freedom Inc. (server)](https://discord.gg/S8gkmtg)`)
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp()
.setAuthor(message.author.tag, message.author.avatarURL)
message.channel.send(embed2);
   } else if(args[0].toLowerCase() === 'economy' || args[0].toLowerCase() === 'экономика'){
 const embed = new Discord.RichEmbed()
    .setTitle('Отдел: ECONOMY')
    .setDescription(`**Справка:**
Аргумент **<>** обязателен.
Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}rep** <@пользователь> - Дать репутацию пользователю.
◽ **${prefixee}daily** - Получить ежедневные монетки.
◽ **${prefixee}profile** [@пользователь] - Посмотреть свой или чужой профиль.
◽ **${prefixee}status** <статус> - Установить статус.
◽ **${prefixee}family** <семья> - Создать или вступить в семью.
◽ **${prefixee}balance** [@пользователь] - Проверить количество монеток.
◽ **${prefixee}pay** <@пользователь> <количество> - Перевести деньги другому пользователю.
◽ **${prefixee}shop** - Посмотреть глобальный магазин.
◽ **${prefixee}buy** <предмет> - Купить предмет из глобального магазина.
◽ **${prefixee}box** - Открыть ящик. `)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setColor('#36393E');
    message.channel.send(embed);
 } else if(args[0].toLowerCase()  === 'fun' || args[0].toLowerCase()  === 'фан' || args[0].toLowerCase()  === 'fan'){
  const embed = new Discord.RichEmbed()
  .setTitle('Отдел: FUN')
  .setDescription(`**Справка:**
Аргумент **<>** обязателен.
Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}bird** - Показывает птичку.
◽ **${prefixee}cat** - Показывает котика.
◽ **${prefixee}dog** - Показывает собаку.
◽ **${prefixee}space** - Показывает космос.
◽ **${prefixee}turtle** - Показывает черепаху.
◽ **${prefixee}food** - Показывает еду.
◽ **${prefixee}meme** - Показывает рандомный мемасик.
◽ **${prefixee}coin** - Подбросить монетку.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
 } else if(args[0].toLowerCase()  === 'general' || args[0].toLowerCase()  === 'основное') {
  const embed = new Discord.RichEmbed()
  .setTitle('Отдел: GENERAL')
  .setDescription(`**Справка:**
Аргумент **<>** обязателен.
Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}authors** - Посмотреть авторов бота.
◽ **${prefixee}bug** <описание ошибки> - Написать ошибку создателю.
◽ **${prefixee}donate** - Поддержать создателей бота.
◽ **${prefixee}donaters** - Посмотреть топ донатеров.
◽ **${prefixee}idea** <описание идеи> - Написать идею создателю.
◽ **${prefixee}invite** - Получить приглашение на бота.
◽ **${prefixee}set-prefix** <префикс> - Установить свой префикс на сервере.
◽ **${prefixee}support** - Получить приглашение на сервер помощи.
◽ **${prefixee}update** - Посмотреть текущее обновление.
◽ **${prefixee}version** - Посмотреть текущую версию бота.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
 } else if(args[0].toLowerCase()  === 'role-play' || args[0].toLowerCase()  === 'ролеплей' || args[0].toLowerCase()  === 'rp' || args[0].toLowerCase()  === 'рп') {
      const embed = new Discord.RichEmbed()
      .setTitle('Отдел: ROLE PLAY')
      .setDescription(`**Справка:**
Аргумент **<>** обязателен.
Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}fuck** <@пользователь> - Послать пользователя. 
◽ **${prefixee}hug** <@пользователь> - Обнять пользователя.
◽ **${prefixee}cut** <@пользователь> - Порезать пользователя.
◽ **${prefixee}kiss** <@пользователь> - Поцеловать пользователя.
◽ **${prefixee}bite** <@пользователь> - Укусить пользователя.
◽ **${prefixee}cry** - Заплакать.
◽ **${prefixee}die** - Сделать суицид.
◽ **${prefixee}lick** <@пользователь> - Лизнуть пользователя.
◽ **${prefixee}pat** <@пользователь> - Погладить пользователя.
◽ **${prefixee}poke** <@пользователь> - Тыкнуть в пользователя.
◽ **${prefixee}punch** <@пользователь> - Ударить пользователя.
◽ **${prefixee}sad** - Загрустить.
◽ **${prefixee}shoot** <@пользователь> - Застрелить пользователя.
◽ **${prefixee}smoke** - Покурить.`)
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
      .setTimestamp()
      .setColor('#36393E');
      message.channel.send(embed);
 } else if(args[0].toLowerCase()  === 'information' || args[0].toLowerCase()  === 'информация'){
  const embed = new Discord.RichEmbed()
  .setTitle('Отдел: INFORMATION')
  .setDescription(`**Справка:**
Аргумент **<>** обязателен.
Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}botinfo** - Информация о боте.
◽ **${prefixee}role-info** <@роль> - Информация о роли.
◽ **${prefixee}role-perms** <@роль> - Информация о правах роли.
◽ **${prefixee}server-info** - Информация о сервере.
◽ **${prefixee}server-icon** - Аватарка сервера.
◽ **${prefixee}stats** - Статистика бота.
◽ **${prefixee}uptime** - Время работы бота.
◽ **${prefixee}user-info** - Информация о пользователе.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
 } else if(args[0].toLowerCase()  === 'minigames' || args[0].toLowerCase()  === 'миниигры' || args[0].toLowerCase()  === 'мини-игры' || args[0].toLowerCase() === 'mini-games'){
  const embed = new Discord.RichEmbed()
  .setTitle('Отдел: MINI-GAMES')
  .setDescription(`**Справка:**
  Аргумент **<>** обязателен.
  Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}capitals** - Мини-игра "Угадай столицу страны".
◽ **${prefixee}country** - Мини-игра "Угадай флаг страны".
◽ **${prefixee}ttt** <@пользователь> - Мини-игра "Крестики-нолики".`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
} else if(args[0].toLowerCase() === 'moderation' || args[0].toLowerCase() === 'модерация'){
  const embed = new Discord.RichEmbed()
  .setTitle('Отдел: MODERATION')
  .setDescription(`**Справка:**
Аргумент **<>** обязателен.
Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}addrole** <@пользователь> <@роль> - Выдать роль пользователю.
◽ **${prefixee}ban** <@пользователь> [причина] - Забанить пользователя.
◽ **${prefixee}сlear** <количество> - Очистить сообщения на сервере.
◽ **${prefixee}kick** <@пользователь> [причина] - Кикнуть пользователя.
◽ **${prefixee}mc** - Посчитать количество человек на сервере. 
◽ **${prefixee}mute** <@пользователь> <время 1s/1m/1h/1d..> [причина] - Замутить пользователя. 
◽ **${prefixee}removerole** <@пользователь> <@роль> - Забрать роль у пользователя.
◽ **${prefixee}report** <@пользователь> <причина> - Пожаловаться на пользователя.
◽ **${prefixee}unban** <ID пользователя> - Разбанить пользователя.
◽ **${prefixee}unmute** <@пользователь> [причина] - Размутить пользователя.
◽ **${prefixee}warn** <@пользователь> [причина] - Дать предупреждение пользователю.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
} else if(args[0].toLowerCase() === 'nsfw' || args[0].toLowerCase() === '18+' || args[0].toLowerCase() === 'нсфв'){
  const embed = new Discord.RichEmbed()
  .setTitle('Отдел: NSFW')
  .setDescription(`**Справка:**
Аргумент **<>** обязателен.
Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}4k** - 4k porn.
◽ **${prefixee}anal** - anal porn.
◽ **${prefixee}ass** - ass.
◽ **${prefixee}coffee** - coffee.
◽ **${prefixee}gah** - gah.
◽ **${prefixee}gonewild** - gonewild.
◽ **${prefixee}hentai** - hentai porn.
◽ **${prefixee}hentai-anal** - hentai anal porn.
◽ **${prefixee}holo** - holo porn.
◽ **${prefixee}kanna** - kanna.
◽ **${prefixee}kemonomimi** - kemonomimi.
◽ **${prefixee}lewdkitsune** - lewdkitsune.
◽ **${prefixee}lewdneko** - lewdneko porn.
◽ **${prefixee}neko** - neko porn.
◽ **${prefixee}porn-gif** - porn GIF's.
◽ **${prefixee}pussy** - pussy.
◽ **${prefixee}thigh** - thigh.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
} else if(args[0].toLowerCase() === 'say' || args[0].toLowerCase() ===  'сей' || args[0].toLowerCase() === 'говорить') {
  const embed = new Discord.RichEmbed()
    .setTitle('Отдел: SAY')
    .setDescription(`**Справка:**
Аргумент **<>** обязателен.
Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}embed-say** - Сделать красивый эмбед. Настройку можно посмотреть через команду "${prefixee}help-embed"
◽ **${prefixee}esay** <сообщение> - Старый вид эмбеда.
◽ **${prefixee}say** <сообщение> - Написать сообщение от лица бота.`)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setColor('#36393E');
    message.channel.send(embed);
} else if(args[0].toLowerCase() === 'util' || args[0].toLowerCase() === 'утилита' || args[0].toLowerCase() === 'utility' || args[0].toLowerCase() === 'утиль') {
  const embed = new Discord.RichEmbed()
    .setTitle('Отдел: UTILITY')
    .setDescription(`**Справка:**
Аргумент **<>** обязателен.
Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}8ball** <вопрос> - Шар предсказаний.
◽ **${prefixee}afk** <причина> - Уйти в афк.
◽ **${prefixee}unafk** - Выйти из афк.
◽ **${prefixee}avatar** [@пользователь] - Посмотреть свою или чужую аватарку.
◽ **${prefixee}calc** <пример> - Калькулятор.
◽ **${prefixee}color** <#HEX> - Посмотреть информацию о цвете.
◽ **${prefixee}dm** <@пользователь> <сообщение> - Написать в ЛС пользователю.
◽ **${prefixee}giveaway** <время 1m 10m 1h..> <приз> - Начать розыгрыш. 
◽ **${prefixee}ping** - Посмотреть пинг бота.
◽ **${prefixee}poll** <вопрос>; <вариант 1>; <вариант 2> ... - Создать голосование с вариантами ответа. P.S. ";" ставьте обязательно!
◽ **${prefixee}rand** <число> <число> - Рандомное число.
◽ **${prefixee}reverse** <сообщение> - Перевернуть сообщение.
◽ **${prefixee}serverinv** - Создать приглашение на текущий сервер.
◽ **${prefixee}set-color** <HEX> - Создать роль с определённым цветом.
◽ **${prefixee}set-nick** <@пользователь> <ник> - Установить ник пользователю.
◽ **${prefixee}weather** <нас. пункт> - Посмотреть погоду.
◽ **${prefixee}vote** <вопрос> - Голосование без вариантов ответа.`)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setColor('#36393E');
    message.channel.send(embed);
} else if(args[0].toLowerCase() === 'эмбед' || args[0].toLowerCase() === 'embed' ||args[0] === 'ембед' || args[0].toLowerCase() === 'emdeb') {
  const embed = new Discord.RichEmbed()
  .setDescription(`
Сначала идёт сам текст, а ниже пример как его пихать в команду.
Вот полная настройка эмбеда:`)
.addField('Описание:', `
{description: текст}
Пример: {description: Всем привет!}`, true)
.addField('Заголовок:', `
{title: текст}
Пример: {title: Всем привет!}`, true)
.addField('Новая строка:', `
{field: текст | value: текст | inline}
Пример: {field: Всем | value: Привет! | inline} inline - Можно не делать.`)
.addField('Таймштамп:', `
{timestamp: дата}
Пример: {timestamp: 1/10/1000} - Если вы хотите дату создания сообщения, то напишите так: {timestamp}`)
.addField('URL в заголовок', `
{url: url}
Пример: {url: url в заголовок}`)
.addField('Нижняя сноска:', `
{footer: текст}
Пример: {footer: я маленький текст!}`, true)
.addField('Цвет:', `
{color: #hex}
Пример: {color: #ff00ff}`, true)
.addField('Картинка:', `
{image: URL}
Пример: {image: URL }`, true)
.addField('Картинка справа:', `
{thumbnail: URL}
Пример: {thumbnail: URL }`, true)
.addField('Автор:', `
{author: автор | icon: аватар-ссылка | url: ссылка}
Пример: {author: MrVaDiM4iK | icon: URL | url: URL} - icon, url - Не обязательно`)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setColor('BLURPLE')
  message.channel.send(embed);

} else if(args[0].toLowerCase() === 'music' || args[0].toLowerCase() === 'музыка') {
  const embed = new Discord.RichEmbed()
  .setTitle('Отдел: MUSIC')
  .setDescription(`**Справка:**
Аргумент **<>** обязателен.
Аргумент **[]** НЕ обязателен.
__**Делать два раза пробел в команде нельзя!**__

◽ **${prefixee}m play** <название или URL> - Включить музыку на сервере.
◽ **${prefixee}search** <название трека> - Поиск нужного трека.
◽ **${prefixee}m stop** - Остановить музыку на сервере.
◽ **${prefixee}m skip** - Пропустить трек. 
◽ **${prefixee}m pause** - Поставить музыку на паузу. 
◽ **${prefixee}m resume** - Снять музыку с паузы.
◽ **${prefixee}m np** - Посмотреть текущий трек.
◽ **${prefixee}m queue** - Все добавленные треки.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);  
  }
  }

  // ENGLISH
  if(db.fetch(`langen_${message.guild.id}`)) {
     if(args[0]) {
    let command = args[0];
    if(client.commands.has(command)) {
       command = client.commands.get(command);
      let embed = new Discord.RichEmbed()
    .setTitle(`Command ${command.help.name.join(' | ')}`)
    .addField(`Name:`, `**${command.help.name.join(' | ')}**`,true)
    .addField(`Description:`, `**${command.help.desc2}**`, true)
    .addField(`Using:`, `**${command.help.use2}**`, true)
    .addField(`Module:`, `**${command.help.otdel}**`,true)
    .setFooter(`JeggyBot, 2018-2019. ©`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setColor('GREEN')
    .setTimestamp()
      message.channel.send(embed)
    }
  }
    if(!args[0]) {
    var embed2 = new Discord.RichEmbed()
    .setColor('#b442ec')
    .setTitle('INFORMATION')
    .setDescription(`
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

The current bot prefix on this server \`${prefixee}\`
You can change the prefix \`${prefixee}set-prefix \`
Support the bot authors \`${prefixee}donate\``)
.addField('HELP', `Help for bot departments:
• General: **${prefixee}help** \`general\`
• Moderation: **${prefixee}help** \`moderation\` 
• Utility: **${prefixee}help** \`util\` | \`utility\`
• NSFW: **${prefixee}help** \`nsfw\` | \`18+\`
• Fun: **${prefixee}help** \`fun\`
• Mini-games: **${prefixee}help** \`minigames\` 
• Information: **${prefixee}help** \`information\` 
• Role Play: **${prefixee}help** \`role-play\` | \`rp\`
• SAY: **${prefixee}help** \`say\`
• Economy: **${prefixee}help** \`economy\` 
• Music: **${prefixee}help** \`music\``)
.addField('SUPPORT', `
Found a bug? Send \`${prefixee}bug\` <Error Description>
Want to give an idea? Send \`${prefixee}idea\` <Description of the idea>
Help with custom embed: \`${prefixee}help embed\`
Server for help: https://discord.gg/gbAC9sa
Change language: \`${prefixee}language ru-RU, en-EN\`
ru-RU - Русский (Россия)
en-EN - English (United Kingdom)`)
.addField('LINKS', `
[Invite me!](https://discordapp.com/oauth2/authorize?client_id=551829966602502183&permissions=21469588398&scope=bot)\n[Vote the bot!](https://discordbots.org/bot/551829966602502183/vote)\n[Freedom Inc. (RU)](https://discord.gg/S8gkmtg)`)
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp()
.setAuthor(message.author.tag, message.author.avatarURL)
  message.channel.send(embed2);
  } else if(args[0].toLowerCase() === 'economy' || args[0].toLowerCase() === 'экономика'){
 const embed = new Discord.RichEmbed()
    .setTitle('Module: ECONOMY')
    .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

◽ **${prefixee}addrep** <@user> - Give rep to user.
◽ **${prefixee}daily** - Daily coins.
◽ **${prefixee}profile** [@user] - View your or someone else’s profile.
◽ **${prefixee}profile-status** <status> - Set status.
◽ **${prefixee}profile-family** <family name> - Create else's enter family.
◽ **${prefixee}balance** [@user] - View your or someone else’s balance.
◽ **${prefixee}pay** <@user> <amount> - Transfer money to another user.
◽ **${prefixee}shop** - View global store.
◽ **${prefixee}buy** <item> - Buy item on global store.
◽ **${prefixee}box** - Open box. `)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setColor('#36393E');
    message.channel.send(embed);
 } else if(args[0].toLowerCase() === 'fun' || args[0].toLowerCase() === 'фан' || args[0].toLowerCase() === 'fan'){
  const embed = new Discord.RichEmbed()
  .setTitle('Module: FUN')
  .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

◽ **${prefixee}bird** - Shows a bird.
◽ **${prefixee}cat** - Shows a cat.
◽ **${prefixee}dog** - Shows a dog.
◽ **${prefixee}space** - Shows a space.
◽ **${prefixee}turtle** - Shows a turtle.
◽ **${prefixee}food** - Shows a food.
◽ **${prefixee}meme** - Shows a meme [RU].
◽ **${prefixee}coin** - Toss a coin.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
 } else if(args[0] === 'general' || args[0] === 'основное') {
  const embed = new Discord.RichEmbed()
  .setTitle('Module: GENERAL')
  .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

◽ **${prefixee}authors** - View bot authors.
◽ **${prefixee}bug** <description of bug> - Send bug to creator.
◽ **${prefixee}donate** - Support the creators of the bot.
◽ **${prefixee}donaters** - View top donaters.
◽ **${prefixee}idea** <description of idea> - Send idea to creator.
◽ **${prefixee}invite** - Invite a bot.
◽ **${prefixee}set-prefix** <prefix> - Set your prefix on the server.
◽ **${prefixee}support** - Support Server Invitation.
◽ **${prefixee}update** - Inspect the current update.
◽ **${prefixee}version** - View the current version of the bot.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
 } else if(args[0].toLowerCase() === 'role-play' || args[0].toLowerCase() === 'ролеплей' || args[0].toLowerCase() === 'rp' || args[0].toLowerCase() === 'рп') {
      const embed = new Discord.RichEmbed()
      .setTitle('Module: ROLE PLAY')
     .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__
  
◽ **${prefixee}fuck** <@user> - Fuck user.
◽ **${prefixee}hug** <@user> - Hug user.
◽ **${prefixee}cut** <@user> - Cut user.
◽ **${prefixee}kiss** <@user> - Kiss user.
◽ **${prefixee}bite** <@user> - Bite user.
◽ **${prefixee}cry** - Cry.
◽ **${prefixee}die** - Make suicide.
◽ **${prefixee}lick** <@user> - Lick user.
◽ **${prefixee}pat** <@user> - Pat user.
◽ **${prefixee}poke** <@user> - Poke user.
◽ **${prefixee}punch** <@user> - Punch user.
◽ **${prefixee}sad** - Sad.
◽ **${prefixee}shot** <@user> - Shot user.
◽ **${prefixee}smoke** - Smoke.`)
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
      .setTimestamp()
      .setColor('#36393E');
      message.channel.send(embed);
 } else if(args[0].toLowerCase() === 'information' || args[0].toLowerCase() === 'информация'){
  const embed = new Discord.RichEmbed()
  .setTitle('Module: INFORMATION')
 .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

◽ **${prefixee}botinfo** - About Jeggy.
◽ **${prefixee}role-info** <@role> - Role info.
◽ **${prefixee}role-perms** <@role> - Information about role rights.
◽ **${prefixee}server-info** - Server info.
◽ **${prefixee}server-icon** - Server avatar.
◽ **${prefixee}stats** - Stats Jeggy.
◽ **${prefixee}uptime** - Uptime Jeggy.
◽ **${prefixee}user-info** - User info.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
 } else if(args[0].toLowerCase() === 'minigames' || args[0].toLowerCase() === 'миниигры' || args[0].toLowerCase() === 'мини-игры' || args[0].toLowerCase() === 'mini-games'){
  const embed = new Discord.RichEmbed()
  .setTitle('Module: MINI-GAMES')
  .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

◽ **${prefixee}capitals** - Mini game "Guess the capital of the country".
◽ **${prefixee}country** - Mini game "Guess the flag of the country".
◽ **${prefixee}ttt** <@user> - Mini game "Tic Tac Toe".`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
} else if(args[0].toLowerCase() === 'moderation' || args[0].toLowerCase() === 'модерация'){
  const embed = new Discord.RichEmbed()
  .setTitle('Module: MODERATION')
 .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

◽ **${prefixee}addrole** <@user> <@role> - Add role user.
◽ **${prefixee}ban** <@user> [reason] - Ban user.
◽ **${prefixee}сlear** <amount> - Clear messages on the server.
◽ **${prefixee}kick** <@user> [reason] - Kick user.
◽ **${prefixee}mc** - Count the number of people on the server.
◽ **${prefixee}mute** <@user> <time 1s/1m/1h/1d..> [reason] - Mute user.
◽ **${prefixee}removerole** <@user> <@role> - Remove user role.
◽ **${prefixee}report** <@user> <reason> - Report in user.
◽ **${prefixee}unban** <user ID> - Unban user.
◽ **${prefixee}unmute** <@user> [reason] - Unmute user.
◽ **${prefixee}warn** <@user> [reason] - Give warning to user.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
} else if(args[0].toLowerCase() === 'nsfw' || args[0].toLowerCase() === '18+' || args[0].toLowerCase() === 'для взрослых'){
  const embed = new Discord.RichEmbed()
  .setTitle('Module: NSFW')
  .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

◽ **${prefixee}4k** - 4k porn.
◽ **${prefixee}anal** - anal porn.
◽ **${prefixee}ass** - ass.
◽ **${prefixee}coffee** - coffee.
◽ **${prefixee}gah** - gah.
◽ **${prefixee}gonewild** - gonewild.
◽ **${prefixee}hentai** - hentai porn.
◽ **${prefixee}hentai-anal** - hentai anal porn.
◽ **${prefixee}holo** - holo porn.
◽ **${prefixee}kanna** - kanna.
◽ **${prefixee}kemonomimi** - kemonomimi.
◽ **${prefixee}lewdkitsune** - lewdkitsune.
◽ **${prefixee}lewdneko** - lewdneko porn.
◽ **${prefixee}neko** - neko porn.
◽ **${prefixee}porn-gif** - porn GIF's.
◽ **${prefixee}pussy** - pussy.
◽ **${prefixee}thigh** - thigh.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed);
} else if(args[0].toLowerCase() === 'say' || args[0].toLowerCase() ===  'сей' || args[0].toLowerCase() === 'говорить') {
  const embed = new Discord.RichEmbed()
    .setTitle('Module: SAY')
    .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

◽ **${prefixee}embed-say** - Make a beautiful embed. The setting can be viewed through the command "${prefixee}help embed"
◽ **${prefixee}esay** <message> - An older type of embed.
◽ **${prefixee}say** <message> - Write a message on behalf of the bot.`)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setColor('#36393E');
    message.channel.send(embed);
} else if(args[0].toLowerCase() === 'util' || args[0].toLowerCase() === 'утилита' || args[0].toLowerCase() === 'utility' || args[0].toLowerCase() === 'утиль') {
  const embed = new Discord.RichEmbed()
    .setTitle('Module: UTILITY')
   .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

◽ **${prefixee}8ball** <question> - Crystal Ball.
◽ **${prefixee}afk** <reason> - Get off to afk.
◽ **${prefixee}unafk** - Return from afk.
◽ **${prefixee}avatar** [@user] - View your or someone else's avatar.
◽ **${prefixee}calc** <number> - Calculator.
◽ **${prefixee}color** <#HEX | RGB> - View color information.
◽ **${prefixee}dm** <@user> <message> - Send to DM user.
◽ **${prefixee}giveaway** <Время 1m 10m 1h..> <prize> - Start the giveaway.
◽ **${prefixee}ping** - Bot ping.
◽ **${prefixee}poll** <question>; <option 1>; <option 2> ... - Create a poll with answer options. P.S. ";" be sure to put it!
◽ **${prefixee}rand** <number> <number> - Random number.
◽ **${prefixee}reverse** <message> - Message reverse.
◽ **${prefixee}serverinv** - Create an invitation to the current server.
◽ **${prefixee}set-color** <HEX> - Create a role with a specific color.
◽ **${prefixee}set-nick** <@user> <nick> - Set nickname to user.
◽ **${prefixee}weather** <city> - View weather.
◽ **${prefixee}vote** <question> - Voting without answer options.`)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setColor('#36393E');
    message.channel.send(embed);
} else if(args[0].toLowerCase() === 'эмбед' || args[0].toLowerCase() === 'embed' ||args[0].toLowerCase() === 'ембед' || args[0].toLowerCase() === 'emdeb') {
  const embed = new Discord.RichEmbed()
  .setDescription(`
First comes the text itself, and below is an example of how to shove it into a team.
Here is the full embed setting:`)
.addField('Description:', `
{description: text}
Example: {description: Hi everyone!}`, true)
.addField('Title:', `
{title: text}
Example: {title: Hi everyone!}`, true)
.addField('Field:', `
{field: text | value: text | inline}
Example: {field: Everyone | value: Hello! | inline} inline - Not required.`)
.addField('Timestamp:', `
{timestamp: date}
Example: {timestamp: 1/10/1000} : {timestamp}`)
.addField('URL to title', `
{url: url}
Example: {url: url to title}`)
.addField('Footer:', `
{footer: text}
Example: {footer: I little text!}`, true)
.addField('Color:', `
{color: #hex}
Example: {color: #ff00ff}`, true)
.addField('Image:', `
{image: URL}
Example: {image: URL}`, true)
.addField('Thumbnail:', `
{thumbnail: URL}
Example: {thumbnail: URL}`, true)
.addField('Author:', `
{author: author | icon: url | url: url}
Example: {author: MrVaDiM4iK | icon: URL | url: URL} icon, url - Not required.`)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setColor('BLURPLE')
  message.channel.send(embed);

} else if(args[0].toLowerCase() === 'music' || args[0].toLowerCase() === 'музыка') {
  const embed = new Discord.RichEmbed()
  .setTitle('Module: MUSIC')
  .setDescription(`**Help:**
The argument **<>** is required.
The argument **[]** is optional.
__ **You cannot make a space in a team twice!**__

◽ **${prefixee}m play** <name or URL> - Turn on music on the server.
◽ **${prefixee}search** <name> - Search for the desired track.
◽ **${prefixee}m stop** - Stop music on the server.
◽ **${prefixee}m skip** - Skip track.
◽ **${prefixee}m pause** - Pause the music.
◽ **${prefixee}m resume** - Continue track.
◽ **${prefixee}m np** - View the current track.
◽ **${prefixee}m queue** - All added tracks.`)
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp()
  .setColor('#36393E');
  message.channel.send(embed); 
}
 }
}
exports.help = {
  name: ["help"],
  desc: "Помощь",
  desc2: "Help",
  use2: "help [category] or [command name]",
  use: "help [отдел] или [команда]",
  otdel: "General"
}