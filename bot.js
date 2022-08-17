const Discord = require("discord.js");
const config = require("./config.json");
const os = require('os');
const moment = require("moment");
const fs = require('fs');
const db = require("quick.db");
//const sql = require('mysql2/promise')
const client = new Discord.Client({disableEveryone: true});

const version = config.version;
const leave = '564406545715298304';
const join = '564406563842818048';
const cooldown = new Map();

const serverbl = [];
const blocked = [];
fs.readdir("./Modules/Owner", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) console.log("Нет команд из Owner!");
    console.log(`Загружено ${jsfile.length} команд из "Owner"`);
    jsfile.forEach((f, i) => {
      let props = require(`./Modules/Owner/${f}`);
      props.help.name.forEach(pr => {
    client.commands.set(pr, props);
        });
      })});
fs.readdir("./Modules/Utility", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) console.log("Нет команд из Utility!");
    console.log(`Загружено ${jsfile.length} команд из "Utility"`);
    jsfile.forEach((f, i) => {
      let props = require(`./Modules/Utility/${f}`);
      props.help.name.forEach(pr => {
    client.commands.set(pr, props);
        });
      })});
fs.readdir("./Modules/Information", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) console.log("Нет команд из Information!");
    console.log(`Загружено ${jsfile.length} команд из "Information"`);
    jsfile.forEach((f, i) => {
      let props = require(`./Modules/Information/${f}`);
      props.help.name.forEach(pr => {
    client.commands.set(pr, props);
        });
      })});
fs.readdir("./Modules/Economy", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) console.log("Нет команд из Economy!");
    console.log(`Загружено ${jsfile.length} команд из "Economy"`);
    jsfile.forEach((f, i) => {
      let props = require(`./Modules/Economy/${f}`);
      props.help.name.forEach(pr => {
    client.commands.set(pr, props);
        });
      })});
fs.readdir("./Modules/Helps", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) console.log("Нет команд из Helps!");
    console.log(`Загружено ${jsfile.length} команд из "Helps"`);
    jsfile.forEach((f, i) => {
      let props = require(`./Modules/Helps/${f}`);
      props.help.name.forEach(pr => {
    client.commands.set(pr, props);
        });
      })});
fs.readdir("./Modules/General", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) console.log("Нет команд из Genral!");
    console.log(`Загружено ${jsfile.length} команд из "General"`);
    jsfile.forEach((f, i) => {
      let props = require(`./Modules/General/${f}`);
      props.help.name.forEach(pr => {
    client.commands.set(pr, props);
        });
      })});
      
fs.readdir("./Modules/Moderation", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) console.log("Нет команд из Moderation!");
    console.log(`Загружено ${jsfile.length} команд из "Moderation"`);
    jsfile.forEach((f, i) => {
      let props = require(`./Modules/Moderation/${f}`);
      props.help.name.forEach(pr => {
    client.commands.set(pr, props);
        });
      })});
 client.commands = new Discord.Collection();

            client.on("ready", async () => {
   /*           client.db = await sql.createPool({
  host: 'remotemysql.com',
  user: 'baVKhTdB0X',
  database: 'baVKhTdB0X',
  password: 'gzg5cdWBgj',
  multipleStatements: true
}); */
                console.log(`
                  <===========JeggyBot===========>
                         <== Servers: ${client.guilds.size} ==>
                         <== Users: ${require('mathjs').eval(client.guilds.map(g => g.memberCount).join('+'))} ==>
                         <== Emojis: ${client.emojis.size} ==>
                         <== Channels: ${client.channels.size} ==>
                         <== Ping: ${Math.floor(client.ping)} MS ==>
                         <== Memory: ${(Math.round(process.memoryUsage().rss / 1024 / 1024 ))} MB/1024 MB ==>
                         <== Voice connections: ${client.voiceConnections.size} ==>
                         <== CPU: ${os.cpus().map(i => `${i.model}`)[0]} ==>
                         <== Library: discord.js v${Discord.version} ==> 
                         <== Arch: ${os.arch()} ==>
                         <== Platform: ${os.platform()} ==>
                         <== Creator: MrVaDiM4iK#0232 ==>
                         <== Version: ${version} ==>
                         <== Creator tag: 441954631539490857 ==>
                         <== Authorize: ${client.user.tag} ==>
                         <== ID: ${client.user.id} ==>
                         <== Good Working! ==>
                  <==============================>`)
                          setInterval(() => {
    let days = 0;
    let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    if(hours > 23){
        days = days + 1;
        hours = 0;}
    if(minutes > 60){
        minutes = 0;}
    uptime += `${hours}h ${minutes}m`;
                            if(client.shard.id == 0) {
                    client.channels.get('602230731468701696').edit({name: `Servers: ${client.guilds.size}/${((client.guilds.size-(client.guilds.size%50)))+50}`})
                    client.channels.get('602230771234766848').edit({name:`Users: ${require('mathjs').eval(client.guilds.map(g => g.memberCount).join('+'))}`})
                    client.channels.get('602230798438891550').edit({name:`Channels: ${client.channels.size}`})
                    client.channels.get('602230953418424320').edit({name:`Emojis: ${client.emojis.size}`})
                    client.channels.get('602230868400013388').edit({name:`Ping: ${client.ping}`})
                    client.channels.get('603891578611957760').edit({name:`Uptime: ${uptime}`})
                            }}, 60000);
            });

  function randomStatus() {
let status = [`${config.prefix}help || Music playing: ${client.voiceConnections.size} on shard #${client.shard.id}`, 
`${config.prefix}help || Giveaways!`,
`${config.prefix}help || Music!`,
`${config.prefix}help || Languages!`,
`${config.prefix}help || Custom embeds!`, 
`${config.prefix}help || Economy!`,
`${config.prefix}help || Moderation!`,
`${config.prefix}help || Mini-Games!`,
`${config.prefix}help || Utility!`,
`${config.prefix}help || Polls!`, 
`${config.prefix}help || ${client.guilds.size} servers on shard #${client.shard.id}`, 
`${config.prefix}help || Auto-role!`, 
`${config.prefix}help || Custom prefix!`, 
`${config.prefix}help || ${version}, bot created: 3.03.2019`,
`by MrVaDiM4iK#0232`,
`${config.prefix}help || Support: discord.gg/gbAC9sa`,
`${config.prefix}help || Съешь ещё этих мягких французских булок, да выпей чаю`, 
`${config.prefix}help || ${require('mathjs').eval(client.guilds.map(g => g.memberCount).join('+'))} users on shard #${client.shard.id}`, 
`${config.prefix}help || ${client.channels.size} channels on shard #${client.shard.id}`, 
`${config.prefix}help || ${client.emojis.size} emojis on shard #${client.shard.id}`,
`${config.prefix}help || Go to ${((client.guilds.size-(client.guilds.size%50)))+50} servers!`]
  let rstatus = Math.floor(Math.random() * status.length);
  client.user.setActivity(status[rstatus], {
    type: "STREAMING",
    url: "https://www.twitch.tv/mrvadim4ik_yt"
  }); 
}; setInterval(randomStatus, 15000);

  client.on('message', async message => {
    async function errr (text, perms) {
        const embed = new Discord.RichEmbed()
        .setColor('ff5555')
        .setTitle('Error <:CheckYup:594045920119619614>')
        .setDescription(`**${text}**`)
        .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
        if (perms) embed.setDescription(`**You have no "${perms}" permission**`);
      if(db.fetch(`langru_${message.guild.id}`)){
        embed.setTitle('Ошибка <:CheckYup:594045920119619614>')
        if(perms) embed.setDescription(`**У вас нет права "${perms}".**`);
      }
        return message.channel.send({embed});
      }
   async function succc (text) {
        const embed = new Discord.RichEmbed()
        .setColor('55ff55')
        .setTitle('Succesfully! <:CheckYes:594045985982775296>')
        .setDescription(`**${text}**`)
        .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
        if(text==='') embed.setDescription(``);
     if(db.fetch(`langru_${message.guild.id}`)){
        embed.setTitle('Успешно! <:CheckYes:594045985982775296>')
      }
        return message.channel.send({embed});
    }
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return client.channels.get('602235874733719552').send(`${message.author.tag} (${message.author.id}) -> ${message.content}\nНаписано: ${message.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}`);
    //  if(message.content) client.channels.get('615276984456708096').send(`${message.author.tag} написав: ${message.content}`)
    let prefiz = db.fetch(`prefix_${message.guild.id}`) || "+";
    let command = client.commands;
    if(client.commands.has(command)) {
       command = client.commands.get(command);
    } 
    if(db.fetch(`langru_${message.guild.id}`)){
         if(!message.member.hasPermission("ADMINISTRATOR")){
        if(db.fetch(`mat_${message.guild.id}`, 'true')){
          let mat = new RegExp(`/bitch|fucking|gay|fag|fucking|dick|magnifier|fagot|fucked up|fucked|anal|fucked up|bullshit|to fuck|to fuck|to fuck|сука|блять|гей|пидор|еблан|хуй|залупа|пидр|пиздец|ебал|анал|заебал|хуйня|ебать|поебать|заебать/g`)
          let embed = new Discord.RichEmbed()
          .setTitle('Защита от нецензурных слов включена!')
          .setDescription('Пожалуйста, будьте адекватнее :smile:')
          .setColor('RED')
          .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
          .setTimestamp()
  if(mat.test(message.content.toLowerCase()))/*if(message.content.indexOf(mat))*/ return await message.delete(), message.reply(embed).then(msg => msg.delete(7000))
  }}}
    if(db.fetch(`langen_${message.guild.id}`)){
         if(!message.member.hasPermission("ADMINISTRATOR")){
        if(db.fetch(`mat_${message.guild.id}`, 'true')){
          let mat = new RegExp(`/bitch|fucking|gay|fag|fucking|dick|magnifier|fagot|fucked up|fucked|anal|fucked up|bullshit|to fuck|to fuck|to fuck|сука|блять|гей|пидор|еблан|хуй|залупа|пидр|пиздец|ебал|анал|заебал|хуйня|ебать|поебать|заебать/g`)
          let embed = new Discord.RichEmbed()
          .setTitle ('Protection against obscene words is enabled!')
          .setDescription ('Please be more adequate :smile:')
          .setColor('RED')
          .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
          .setTimestamp()
  if(mat.test(message.content.toLowerCase()))/*if(message.content.indexOf(mat))*/ return await message.delete(), message.reply(embed).then(msg => msg.delete(7000))
  }}}
     if(db.fetch(`mat_${message.guild.id}`, 'false')){}
      if(db.fetch(`langru_${message.guild.id}`)){
        if(db.fetch(`url_${message.guild.id}`, 'true')){
          if(!message.member.hasPermission("MANAGE_GUILD")){
        let url = new RegExp(`(discord.gg|discordapp.com/invite)/(.+)`);
            let embed = new Discord.RichEmbed()
            .setTitle(`Предупреждение ${message.author.tag}`)
            .setDescription('Пользователь отправил ссылку-приглашение на сервер.')
            .setColor('RED')
            .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
if(url.test(message.content)) return await message.delete(), message.channel.send(embed)
  }}};
         if(db.fetch(`langen_${message.guild.id}`)){
        if(db.fetch(`url_${message.guild.id}`, 'true')){
          if(!message.member.hasPermission("MANAGE_GUILD")){
        let url = new RegExp(`(discord.gg|discordapp.com/invite)/(.+)`);
            let embed = new Discord.RichEmbed()
            .setTitle(`Warn ${message.author.tag}`)
            .setDescription('The user sent an invitation link to the server.')
            .setColor('RED')
            .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
if(url.test(message.content)) return await message.delete(), message.channel.send(embed)
  }}};
        if(db.fetch(`url_${message.guild.id}`, 'false')){}
    if(db.fetch(`langru_${message.guild.id}`)){
      let embed = new Discord.RichEmbed()
      .setTitle('Короткая инструкция')
      .setDescription(`
Если вы забыли префикс бота, то он \`${prefiz}\`
Для прочтения того, что я могу: \`${prefiz}help\`
Подробнее о команде: \`${prefiz}help <Имя команды>\`
Чтобы настроить бота под ваш сервер: \`${prefiz}settings\``)
      .setColor('BLUE')
      .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
      .setTimestamp()
      if(message.content === '<@!'+client.user.id+'>') return message.channel.send(embed);
      if(message.content === '<@'+client.user.id+'>') return message.channel.send(embed);
      }
    if(db.fetch(`langen_${message.guild.id}`)){
       let embed = new Discord.RichEmbed()
.setTitle('Short instruction')
.setDescription(`
If you forget the bot prefix, this \`${prefiz}\`
To read what i can: \`${prefiz}help\`
More about the command: \`${prefiz}help <Command>\`
To configure a bot for your server: \`${prefiz}settings\``)
.setColor('BLUE')
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp ()
      if(message.content === '<@!'+client.user.id+'>') return message.channel.send(embed);
      if(message.content === '<@'+client.user.id+'>') return message.channel.send(embed);
    }
    let u = db.fetch(`money_${message.guild.id}_${message.author.id}`) || 0;
    let uxp = db.fetch(`xp_${message.guild.id}_${message.author.id}`) || 0;
    let ulvl = db.fetch(`lvl_${message.guild.id}_${message.author.id}`) || 1;
    let curlvl = db.fetch(`lvl_${message.guild.id}_${message.author.id}`);
    let curXp = db.fetch(`xp_${message.guild.id}_${message.author.id}`);
    let nxtLvlxp = curlvl * 478;
if(!db.fetch(`money_${message.guild.id}_${message.author.id}`)) db.set(`money_${message.guild.id}_${message.author.id}`, 0)
if(!db.fetch(`xp_${message.guild.id}_${message.author.id}`)) db.set(`xp_${message.guild.id}_${message.author.id}`, 0)
if(!db.fetch(`lvl_${message.guild.id}_${message.author.id}`)) db.set(`lvl_${message.guild.id}_${message.author.id}`, 1)
if(!db.fetch(`bank_${message.guild.id}_${message.author.id}`)) db.set(`bank_${message.guild.id}_${message.author.id}`, 0)
    if(db.fetch(`langru_${message.guild.id}`)){
if(!db.fetch(`family_${message.guild.id}_${message.author.id}`)) db.set(`family_${message.guild.id}_${message.author.id}`, 'Нет семьи')
if(!db.fetch(`status_${message.guild.id}_${message.author.id}`)) db.set(`status_${message.guild.id}_${message.author.id}`, 'Нет статуса')
    }
    if(db.fetch(`langen_${message.guild.id}`)) {
      if(!db.fetch(`family_${message.guild.id}_${message.author.id}`)) db.set(`family_${message.guild.id}_${message.author.id}`, 'Not family')
if(!db.fetch(`status_${message.guild.id}_${message.author.id}`)) db.set(`status_${message.guild.id}_${message.author.id}`, 'Not status')
    }
if(!db.fetch(`rep_${message.guild.id}_${message.author.id}`)) db.set(`rep_${message.guild.id}_${message.author.id}`, 0)
    
     let coinsAdd = Math.floor(Math.random() * 2) + 0;
     let xpAdd = Math.floor(Math.random() * 4) + 6;
    db.add(`money_${message.guild.id}_${message.author.id}`, coinsAdd)
    db.add(`xp_${message.guild.id}_${message.author.id}`, xpAdd)
    db.add(`box_${message.guild.id}_${message.author.id}`, 0)
   db.add(`bank_${message.guild.id}_${message.author.id}`, 0)
    if(uxp >= nxtLvlxp) {
        uxp = db.set(`xp_${message.guild.id}_${message.author.id}`, 0)
        ulvl += db.add(`lvl_${message.guild.id}_${message.author.id}`, 1)
      if(db.fetch(`langru_${message.guild.id}`)){
     if(db.fetch(`lvlup_${message.guild.id}`, 'true')){
      let lvlup = new Discord.RichEmbed()
 .setTitle(`${message.author.tag}, у вас новый уровень!`)
 .setDescription(`Ваш уровень теперь **${curlvl + 1}**\n\nПоздравляем!`)
 .setColor('PURPLE')
   .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
 message.channel.send(lvlup).then(msg => msg.delete(5000));
     }}
       if(db.fetch(`langen_${message.guild.id}`)){
           if(db.fetch(`lvlup_${message.guild.id}`, 'true')){
           let lvlup = new Discord.RichEmbed()
 .setTitle(`${message.author.tag}, you got a new level!`)
 .setDescription(`Your level **${curlvl + 1}**\n\Congratulations!`)
 .setColor('PURPLE')
   .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
 message.channel.send(lvlup).then(msg => msg.delete(5000))
                                  }}}
       if(db.fetch(`lvlup_${message.guild.id}`, 'false')){}
    if(message.content == prefiz) return;
    if(!message.content.startsWith(prefiz)) return;
       let cw = cooldown.get(message.author.id);
  if(cw === undefined) { } else {
    if(db.fetch(`langru_${message.guild.id}`)){
  if((cw - Date.now()) / 1000 > 1) return message.channel.send(`Стоит задержка по использованию команд. Подождите ещё **${(cw - Date.now()) / 1000 | 0}** секунд(ы).`).then(msg => msg.delete(cw-Date.now()) / 1000 |0);
  };
    if(db.fetch(`langen_${message.guild.id}`)){
 if((cw - Date.now()) / 1000 > 1) return message.channel.send(`There is a delay in using commands. Wait **${(cw - Date.now()) / 1000 | 0}** seconds.`).then(msg => msg.delete(cw-Date.now()) / 1000 |0);
  }}
if(serverbl.includes(message.guild.id)) return;
if(blocked.includes(message.author.id)) return;
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0].toLowerCase();
      let args = messageArray.slice(1);
    let err = errr;
    let plus = config.premium.includes(message.author.id);
    let succ = succc;
    let owner = '441954631539490857';
  //  let cfg = require('../../config.json')
     let commandfile = client.commands.get(cmd.slice(prefiz.length));
     if(commandfile) commandfile.run(client, message, args, err, succ, plus, owner);
      if(message.content.indexOf(prefiz) !== 0) return;
 cooldown.set(message.author.id, Date.now() + 1000 * 5);
 if(cooldown === '1000') return cooldown.delete();
  });




  client.on('guildCreate', (guild) => {
    let prefiz = db.fetch(`prefix_${guild.id}`) || "+";
    db.set(`langen_${guild.id}`, 'true')
    const embed = new Discord.RichEmbed()
    .setTitle(`:inbox_tray: Новый сервер под названием \`${guild.name}\``)
    .setColor('55ff55')
    .setDescription(`Информация:
Название сервера: **${guild.name}**   
Сокращение и ID: **${guild.nameAcronym} | ${guild.id}**
Создатель: **${guild.owner} (${guild.owner.user.tag})**
Количество пользователей: **${guild.memberCount}**
Количество эмодзи: **${guild.emojis.size}**
Количество ролей: **${guild.roles.size}**
Количество каналов: **${guild.channels.size}**
Сервер был создан: **${guild.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}**
    `)
    .setThumbnail(guild.iconURL)
    .setFooter(`У нас теперь ${client.guilds.size} серверов.`)
    .setTimestamp()
    client.channels.get(join).send({embed});

    const eembed = new Discord.RichEmbed()
    .setTitle('Hello, members!')
    .setDescription(`
Thank you for inviting me to your beautiful server!
Read the help to get started. \`${prefiz}help.\`
If you want to change my prefix, you can do this with the \`${prefiz}set-prefix\` command.
For more functionality, put the JeggyBot role above all roles and it is advisable to give it all the rights!

**SUPPORT**
If you see an bug, you can write the \`${prefiz}bug\` <bug description> command in it.
Idea \`${prefiz}idea\` <idea description>.
Server support. https://discord.gg/gbAC9sa
You can change the bot settings of the command \`${prefiz}settings\`

**LINKS**
Invite me to other servers! [Invite!](https://discordapp.com/oauth2/authorize?client_id=551829966602502183&permissions=21469588398&scope=bot)
Vote the bot! [Vote!](https://discordbots.org/bot/551829966602502183)`)
.setFooter('Jeggy will definitely help you with the server!')
.setTimestamp()
    let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(guild.members.get(client.user.id)).has('SEND_MESSAGES'));
if (channels.size > 0) channels.first().send(eembed)
});
client.on('guildDelete', (guild) => {
  db.set(`prefix_${guild.id}`, '+')
  const embed = new Discord.RichEmbed()
        .setTitle(`:outbox_tray: Я покинула сервер \`${guild.name}\``)
        .setColor('ff5555')
        .setDescription(`Информация:
Название сервера: **${guild.name}**   
Сокращение и ID: **${guild.nameAcronym} | ${guild.id}**
Создатель: **${guild.owner} (${guild.owner.user.tag})**
Количество пользователей: **${guild.memberCount}**
Количество эмодзи: **${guild.emojis.size}**
Количество ролей: **${guild.roles.size}**
Количество каналов: **${guild.channels.size}**
Сервер был создан: **${guild.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}**
`)
    .setThumbnail(guild.iconURL)
    .setFooter(`Нас осталось ${client.guilds.size} серверов.`)
    .setTimestamp()
    client.channels.get(leave).send({embed});
});





const Util = require('discord.js');
const ytdl = require("ytdl-core")
const YouTube = require("simple-youtube-api")
const queue = new Map();
const youtube = new YouTube('AIzaSyC13wB9BAun35DSWEufR-VLk0OmWxyOa0w');
   client.on('message', async message => {
     const serverQueue = queue.get(message.guild.id);
  function err (text, perms) {
        const embed = new Discord.RichEmbed()
        .setColor('ff5555')
        .setTitle('Error <:CheckYup:594045920119619614>')
        .setDescription(`Reason: **${text}**`)
        .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
        if (perms) embed.setDescription(`**You have no right "${perms}"**`);
        return message.channel.send({embed});
      }
      function succ (text) {
        const embed = new Discord.RichEmbed()
        .setColor('55ff55')
        .setTitle('Succesfully! <:CheckYes:594045985982775296>')
        .setDescription(`**${text}**`)
        .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
        .setTimestamp()
        if(text==='') embed.setDescription(``);
        return message.channel.send({embed});
    }
    let prefix = db.fetch(`prefix_${message.guild.id}`) || "+";
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'play') {
      const searchString = args.join(' ');
const url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
        if(!args[0]) return err('Напишите название трека или URL видео.')
const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return err('Вы должны быть в голосовом канале.');
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return err('Я не могу подключиться к этому каналу.');
		}
		if (!permissions.has('SPEAK')) {
			return err('Я не могу говорить в этом канале.');
		}
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
      //succ(`Добавлено ${playlist.size} треков.`)
			return message.channel.send(`✅ Плейлист: **${playlist.title}** | Добавлен: **${message.author.tag}** был добавлен в очередь!`);
		} else {
			try {
                var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    const embed = new Discord.RichEmbed()
                    .setTitle('Выбор трека:')
                    .setDescription(`
                    ${videos.map(video2 => `**${++index}:** [${video2.title}](${video2.url})`).join('\n')}
                    \nНапишите цифру от 1 до 10 в чат для выбора трека.`)
                    .setColor('BLURPLE')
                    .setFooter('Freedom Inc, 2019.', client.user.avatarURL)
                    .setTimestamp();
					message.channel.send(embed);
					// eslint-disable-next-line max-depth
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
                        });
					} catch (errr) {
						console.error(errr);
						return err('Поиск отменён, время выбора вышло.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (error) {
					return err('Произошла ошибка YouTube API. Повторите попытку позже.');
				}
			}
			return handleVideo(video, message, voiceChannel);
        }
} else if(command === 'skip') {
        if (!message.member.voiceChannel) return err('Вы не в голосовом канале.');
		if (!serverQueue) return err('Сейчас ничего не играет.');
        serverQueue.connection.dispatcher.end('Skip command has been used!');
        succ('Текущая песня была пропущена!');
        return undefined;
  } else if(command === 'stop') {
    if (!message.member.voiceChannel) return err('Вы не в голосовом канале.');
    if (!serverQueue) return err('Сейчас ничего не играет.');
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end('Stop command has been used!');
    succ('Плеер был остановлен.');
    return undefined;

  } else if(command === 'np') {
    if (!serverQueue) return err('Сейчас ничего не играет.');
    return message.channel.send(`Сейчас проигрывается: **${serverQueue.songs[0].title}**`);

  } else if(command === 'pause') {
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return succ('⏸ Плеер поставлен на паузу.');
    }
    return err('Сейчас ничего не играет.');
} else if(command === 'resume') {
    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        return succ('▶ Плеер снят с паузы.');
    }
    return err('Плеер сейчас не на паузе!');
} else if(command === 'volume') {
  if(message.author.id != '441954631539490857') return;
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		if (!args[0]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[0];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
		return message.channel.send(`I set the volume to: **${args[0]}**`);
  
  } else if(command === 'queue') {
    if (!serverQueue) return err('Сейчас ничего не играет.');
    if(serverQueue > 1) return err('В очереди слишком много треков!')
    const embed = new Discord.RichEmbed()
    .setTitle('Все треки:')
    .setDescription(`
    ${serverQueue.songs.map(song => `**->** ${song.title}`).join('\n')}
    \n**Сейчас играет:** ${serverQueue.songs[0].title}`)
    .setColor('BLURPLE')
    .setFooter('JeggyBot, 2018-2019.', client.user.avatarURL)
    .setTimestamp();
    return message.channel.send(embed);
  }
  return undefined;
    
     async function handleVideo(video, message, voiceChannel, playlist = false) {
        const serverQueue = queue.get(message.guild.id);
        const song = {
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: `https://www.youtube.com/watch?v=${video.id}`
        };
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 0.5,
                playing: true
            };
            queue.set(message.guild.id, queueConstruct);
    
            queueConstruct.songs.push(song);
    
            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(message.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`Я не могу подключится в голосовой канал: ${error}`);
                queue.delete(message.guild.id);
                return err(`Я не могу подключится в голосовой канал: ${error}`);
            }
        } else {
            serverQueue.songs.push(song);
            if (playlist) return undefined;
            else return message.channel.send(`✅ **${song.title}** добавлена в очередь!`);
        }
        return undefined;
    }
    
    function play(guild, song) {
        const serverQueue = queue.get(guild.id);
    
        if (!song) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }
    
        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
            .on('end', reason => {
                if (reason === 'Stream is not generating quickly enough.');
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
            .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(0.5);
    
        serverQueue.textChannel.send(`Началось воспроизведение: **${song.title}** | Добавлена: **${message.author.tag}**.`);
        }
   });
client.login(process.env.BOT_TOKEN).then(() => delete process.env.BOT_TOKEN);