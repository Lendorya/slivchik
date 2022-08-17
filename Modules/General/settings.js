let Discord = require('discord.js');
let db = require('quick.db')
let reff = require('../../config.json')
exports.run = async (client, message, args, err, succ) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || reff.prefix
   let upr = db.fetch(`admin_${message.guild.id}`);
  if(db.fetch(`langru_${message.guild.id}`)){
  let lang = await db.fetch(`langru_${message.guild.id}`);
  let embedd = new Discord.RichEmbed()
  .setTitle('Настройки бота')
  .setDescription(`Параметры:
- Защита от приглашений: ${db.fetch(`url_${message.guild.id}`) ? '**Включено**' : '**Выключено**'}
- Язык: ${lang ? '**Русский**' : '**Английский**'}
- Сообщения о новом уровне: ${db.fetch(`lvlup_${message.guild.id}`) ? '**Включено**' : '**Выключено**'}
- Префикс: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}**
- Запретить нецензурные слова: ${db.fetch(`mat_${message.guild.id}`)? '**Включено**' : '**Выключено**'}
- Управляющий в боте: ${db.fetch(`admin_${message.guild.id}`) ? `**<@${upr}>**` : '**Отсутствует**'}

Включить/выключить защиту от приглашений: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings links <on/off>**
Чтобы поменять язык: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings language list или ru-RU или en-US**
Включить/выключить lvlup: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings lvlup <on/off>**
Чтобы поменять префикс: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings prefix <Префикс>**
Включить/выключить запрет нецензурных слов: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings swear <on/off>**
Включить/выключить управляющего в боте: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings admin <on/off> <@Пользователь>**

Чтобы перейти к настройкам модулей: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings 2**`)
  .setColor('ORANGE')
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp();
    if(!args[0]) return message.channel.send(embedd)
    if(args[0].toLowerCase() === '2'){
       let embed = new Discord.RichEmbed()
  .setTitle('Настройки модулей')
  .setDescription(`Параметры:
- Модуль **"Economy"**: ${db.fetch(`economy_${message.guild.id}`)? '**Выключен**' : '**Включен**'}
- Модуль **"Moderation"**: ${db.fetch(`moderation_${message.guild.id}`)? '**Выключен**' : '**Включен**'}
- Модуль **"Utility"**: ${db.fetch(`utility_${message.guild.id}`)? '**Выключен**' : '**Включен**'}
- Модуль **"General"**: ${db.fetch(`general_${message.guild.id}`)? '**Выключен**' : '**Включен**'}
- Модуль **"Information"**: ${db.fetch(`information_${message.guild.id}`)? '**Выключен**' : '**Включен**'}

Включить/выключить модуль: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings module <Имя> <on/off>**`)
  .setColor('ORANGE')
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp();
      message.channel.send(embed)
    }
    if(args[0] !== 'prefix'&&args[0] !== 'lvlup'&&args[0] !== 'language'&&args[0] !== 'links'&& args[0] !== 'swear'&&args[0] !== 'admin'&&args[0] !== '2' &&args[0] !== 'module') return err('Данный параметр не найден.')
    if(args[0].toLowerCase() === 'prefix'){
       if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером');
    if(!args[1]) return err('Укажите новый префикс.');
    if(args[1].length > 10) return err('Максимальная длина префикса 10 символов.');
    db.set(`prefix_${message.guild.id}`, args[1])
    let dembed = new Discord.RichEmbed()
    .setTitle('Префикс изменён <:CheckYes:594045985982775296>')
    .setColor('BLURPLE')
    .setDescription(`Новый префикс на сервере: \`${args[1]}\``)
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
  message.channel.send(dembed)
    let pUser = message.author;
const eembed = new Discord.RichEmbed()
.setTitle('Новый префикс!')
.setDescription(`Префикс: **${args[1]}**`)
.addField(`Сервер:`, `**${message.guild.name}** || ID ${message.guild.id}`)
.addField(`Создатель:`, `**${message.guild.owner}** || ID ${message.guild.ownerID}`)
.addField(`Пользователь:`, `**${pUser.tag}** || ID ${pUser.id}`)
.addField(`Канал:`, `**${message.channel}** || ID ${message.channel.id}`)
  client.channels.get('572828623686467595').send(eembed)
    } else if(args[0].toLowerCase() === 'links'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером');
    if(!args[1]) return err('Укажите аргумент "on" или "off".');
      if(args[1] !== 'on' && args[1] !== 'off') return err('Это не является аргументом.')
      if(args[1].toLowerCase() === 'on'){
        db.set(`url_${message.guild.id}`, 'true')
          succ('Вы включили защиту от приглашений.')
      } else if(args[1].toLowerCase() === 'off'){
        db.delete(`url_${message.guild.id}`)
        succ('Вы выключили защиту от приглашений.')
      }
    } else if(args[0].toLowerCase() === 'lvlup'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером');
    if(!args[1]) return err('Укажите аргумент "on" или "off".');
       if(args[1] !== 'on' && args[1] !== 'off') return err('Это не является аргументом.')
      if(args[1].toLowerCase() === 'on'){
        db.set(`lvlup_${message.guild.id}`, 'true')
          succ('Вы включили сообщения о новом уровне.')
      } else if(args[1].toLowerCase() === 'off'){
        db.delete(`lvlup_${message.guild.id}`)
        succ('Вы выключили сообщения о новом уровне.')
      }
      } else if(args[0].toLowerCase() === 'swear'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером');
    if(!args[1]) return err('Укажите аргумент "on" или "off".');
       if(args[1] !== 'on' && args[1] !== 'off') return err('Это не является аргументом.')
      if(args[1].toLowerCase() === 'on'){
        db.set(`mat_${message.guild.id}`, 'true')
          succ('Вы включили запрет нецензурных слов.')
      } else if(args[1].toLowerCase() === 'off'){
        db.delete(`mat_${message.guild.id}`)
        succ('Вы выключили запрет нецензурных слов.')
      }
      } else if(args[0].toLowerCase() === 'admin') {
        if(!message.member.hasPermission("ADMINISTRATOR")) return err(0, 'Администратор')
        if(!args[1]) return err('Укажите аргумент "on" или "off".')
        if(args[1].toLowerCase() === 'on'){
          let admin = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[2]);
        if(!admin) return err('Вы не указали управляющего.');
        succ(`Теперь управляющий ботом: ${admin}`)
        db.set(`admin_${message.guild.id}`, admin.id);
      } else if(args[1].toLowerCase() === 'off'){
        db.delete(`admin_${message.guild.id}`)
        succ('Вы выключили управляющего ботом.')
      }
        } else if(args[0].toLowerCase() === 'module'){
          if(!args[1]) return err(`Укажите модуль. Подробнее: ${prefix}settings 2`)
          
            if(args[1].toLowerCase() === 'economy'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером');
    if(!args[2]) return err('Укажите аргумент "on" или "off".');
       if(args[2] !== 'on' && args[2] !== 'off') return err('Это не является аргументом.')
      if(args[2].toLowerCase() === 'on'){
        db.set(`economy_${message.guild.id}`, false)
          succ('Вы включили модуль "Economy".')
      } else if(args[2].toLowerCase() === 'off'){
        db.set(`economy_${message.guild.id}`, true)
         succ('Вы выключили модуль "Economy".')
      }
            } else if(args[1].toLowerCase() === 'moderation'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером');
    if(!args[2]) return err('Укажите аргумент "on" или "off".');
       if(args[2] !== 'on' && args[2] !== 'off') return err('Это не является аргументом.')
      if(args[2].toLowerCase() === 'on'){
        db.set(`moderation_${message.guild.id}`, false)
          succ('Вы включили модуль "Moderation".')
      } else if(args[2].toLowerCase() === 'off'){
        db.set(`moderation_${message.guild.id}`, true)
         succ('Вы выключили модуль "Moderation".')
      }
            } else if(args[1].toLowerCase() === 'utility'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером');
    if(!args[2]) return err('Укажите аргумент "on" или "off".');
       if(args[2] !== 'on' && args[2] !== 'off') return err('Это не является аргументом.')
      if(args[2].toLowerCase() === 'on'){
        db.set(`utility_${message.guild.id}`, false)
          succ('Вы включили модуль "Utility".')
      } else if(args[2].toLowerCase() === 'off'){
        db.set(`utility_${message.guild.id}`, true)
         succ('Вы выключили модуль "Utility".')
      }
            } else if(args[1].toLowerCase() === 'information'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером');
    if(!args[2]) return err('Укажите аргумент "on" или "off".');
       if(args[2] !== 'on' && args[2] !== 'off') return err('Это не является аргументом.')
      if(args[2].toLowerCase() === 'on'){
        db.set(`information_${message.guild.id}`, false)
          succ('Вы включили модуль "Information".')
      } else if(args[2].toLowerCase() === 'off'){
        db.set(`information_${message.guild.id}`, true)
         succ('Вы выключили модуль "Information".')
      }
           } else if(args[1].toLowerCase() === 'general'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером');
            message.channel.send(err('Вы не можете включить/отключить системный модуль.'))
           }
  } else if(args[0].toLowerCase() === 'language'){
         if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Управление сервером');
          let embed = new Discord.RichEmbed()
          .setTitle('Доступные языки')
          .setDescription(`
ru-RU - Русский (Россия)
en-US - Английский (United States)`)
          .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
          .setColor('BLURPLE')
    if(!args[1]) return message.channel.send(embed)
    if(args[1] !== 'en-US' && args[1] !== 'ru-RU' && args[1]) return err(`\`${args.slice(1).join(' ')}\` не является языком. Доступные языки \`ru-RU, en-US\``)
    if(args[1] === 'en-US') {
      db.delete(`langru_${message.guild.id}`)
      db.set(`langen_${message.guild.id}`, 'true')
    let embed = new Discord.RichEmbed()
    .setTitle('Language set :flag_us:')
    .setColor('BLURPLE')
    .setDescription(`New language on this guild: \`${args[1]}\` :flag_us:`)
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
  message.channel.send(embed)
      }
  }
  }
  if(db.fetch(`langen_${message.guild.id}`)){
    let lang = await db.fetch(`langen_${message.guild.id}`);
  let embedd = new Discord.RichEmbed()
  .setTitle('Bot settings')
  .setDescription(`Configs:
- Invite Protection: ${db.fetch(`url_${message.guild.id}`) ? '**On**' : '**Off**'}
- Language: ${lang ? '**English**' : '**English**'}
- Level up messages: ${db.fetch(`lvlup_${message.guild.id}`) ? '**On**' : '**Off**'}
- Prefix: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}**
- Deny foul language: ${db.fetch(`mat_${message.guild.id}`)? '**On**' : '**Off**'}
- Bot manager: ${db.fetch(`admin_${message.guild.id}`) ? `**<@${upr}>**` : '**None**'}

On/Off invite protect: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings links <on/off>**
Change language: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings language ru-RU else en-US**
On/Off level up messages: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings lvlup <on/off>**
Change prefix: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings prefix <Prefix>**
On/Off barring obscene words: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings swear <on/off>**
On/Off bot manager: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings admin <on/off> <@User>**

To go to the modules settings: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings 2**`)
  .setColor('ORANGE')
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp();
    if(!args[0]) return message.channel.send(embedd)
    if(args[0].toLowerCase() === '2'){
       let embed = new Discord.RichEmbed()
  .setTitle('Modules settings')
  .setDescription(`Configs:
- Module "Economy": ${db.fetch(`economy_${message.guild.id}`)? '**Off**' : '**On**'}
- Module "Moderation": ${db.fetch(`moderation_${message.guild.id}`)? '**Off**' : '**On**'}
- Module "Utility": ${db.fetch(`utility_${message.guild.id}`)? '**Off**' : '**On**'}
- Module "General": ${db.fetch(`general_${message.guild.id}`)? '**Off**' : '**On**'}
- Module "Information": ${db.fetch(`information_${message.guild.id}`)? '**Off**' : '**On**'}

On/off module: **${db.fetch(`prefix_${message.guild.id}`) || reff.prefix}settings module <Имя> <on/off>**`)
  .setColor('ORANGE')
  .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
  .setTimestamp();
      message.channel.send(embed)
    }
    if(args[0] !== 'prefix'&&args[0] !== 'lvlup'&&args[0] !== 'language'&&args[0] !== 'links'&& args[0] !== 'swear'&&args[0] !== 'admin'&&args[0] !== '2' &&args[0] !== 'module') return err('This parameter was not found.')
    if(args[0].toLowerCase() === 'prefix'){
       if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild');
    if(!args[1]) return err('Specify a new prefix.');
    if(args[1].length > 10) return err('The maximum prefix length is 10 characters.');
    db.set(`prefix_${message.guild.id}`, args[1])
    let dembed = new Discord.RichEmbed()
    .setTitle('Prefix changed <:CheckYes:594045985982775296>')
    .setColor('BLURPLE')
    .setDescription(`New server prefix: \`${args[1]}\``)
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
  message.channel.send(dembed)
    let pUser = message.author;
const eembed = new Discord.RichEmbed()
.setTitle('Новый префикс! [ENGLISH]')
.setDescription(`Префикс: **${args[1]}**`)
.addField(`Сервер:`, `**${message.guild.name}** || ID ${message.guild.id}`)
.addField(`Создатель:`, `**${message.guild.owner}** || ID ${message.guild.ownerID}`)
.addField(`Пользователь:`, `**${pUser.tag}** || ID ${pUser.id}`)
.addField(`Канал:`, `**${message.channel}** || ID ${message.channel.id}`)
  client.channels.get('572828623686467595').send(eembed)
    } else if(args[0].toLowerCase() === 'links'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild');
    if(!args[1]) return err('Specify an argument "on" else "off".');
      if(args[1] !== 'on' && args[1] !== 'off') return err('This is not an argument.')
      if(args[1].toLowerCase() === 'on'){
        db.set(`url_${message.guild.id}`, 'true')
          succ('You have enabled invite protection.')
      } else if(args[1].toLowerCase() === 'off'){
        db.delete(`url_${message.guild.id}`)
        succ('You have disabled invite protection.')
      }
    } else if(args[0].toLowerCase() === 'lvlup'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild');
    if(!args[1]) return err('Specify an argument "on" else "off".');
       if(args[1] !== 'on' && args[1] !== 'off') return err('This is not an argument.')
      if(args[1].toLowerCase() === 'on'){
        db.set(`lvlup_${message.guild.id}`, 'true')
          succ('You have enabled level up messages.')
      } else if(args[1].toLowerCase() === 'off'){
        db.delete(`lvlup_${message.guild.id}`)
        succ('You have disabled level up messages.')
      }
      } else if(args[0].toLowerCase() === 'swear'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild');
    if(!args[1]) return err('Specify an argument "on" else "off".');
       if(args[1] !== 'on' && args[1] !== 'off') return err('This is not an argument.')
      if(args[1].toLowerCase() === 'on'){
        db.set(`mat_${message.guild.id}`, 'true')
          succ('You have enabled the prohibition of obscene words.')
      } else if(args[1].toLowerCase() === 'off'){
        db.delete(`mat_${message.guild.id}`)
        succ('You have disabled the prohibition of obscene words.')
      }
      } else if(args[0].toLowerCase() === 'admin') {
        if(!message.member.hasPermission("ADMINISTRATOR")) return err(0, 'Administrator')
        if(!args[1]) return err('Specify an argument "on" else "off".')
        if(args[1].toLowerCase() === 'on'){
          let admin = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[2]);
        if(!admin) return err('You did not specify a manager.');
        succ(`Now the bot manager: ${admin}`)
        db.set(`admin_${message.guild.id}`, admin.id);
      } else if(args[1].toLowerCase() === 'off'){
        db.delete(`admin_${message.guild.id}`)
        succ('You have disabled the bot manager.')
      }
        } else if(args[0].toLowerCase() === 'module'){
          if(!args[1]) return err(`Specify the module. More: ${prefix}settings 2`)
          
            if(args[1].toLowerCase() === 'economy'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild');
    if(!args[2]) return err('Specify an argument "on" else "off".');
       if(args[2] !== 'on' && args[2] !== 'off') return err('This is not an argument.')
      if(args[2].toLowerCase() === 'on'){
        db.set(`economy_${message.guild.id}`, false)
          succ('You have enabled the "Economy" module.')
      } else if(args[2].toLowerCase() === 'off'){
        db.set(`economy_${message.guild.id}`, true)
         succ('You have disabled the "Economy" module.')
      }
            } else if(args[1].toLowerCase() === 'moderation'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild');
    if(!args[2]) return err('Specify an argument "on" else "off".');
       if(args[2] !== 'on' && args[2] !== 'off') return err('This is not an argument.')
      if(args[2].toLowerCase() === 'on'){
        db.set(`moderation_${message.guild.id}`, false)
          succ('You have enabled the "Moderation" module.')
      } else if(args[2].toLowerCase() === 'off'){
        db.set(`moderation_${message.guild.id}`, true)
         succ('You have disabled the "Moderation" module.')
      }
            } else if(args[1].toLowerCase() === 'utility'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild');
    if(!args[2]) return err('Specify an argument "on" else "off".');
       if(args[2] !== 'on' && args[2] !== 'off') return err('This is not an argument.')
      if(args[2].toLowerCase() === 'on'){
        db.set(`utility_${message.guild.id}`, false)
          succ('You have enabled the "Utility" module.')
      } else if(args[2].toLowerCase() === 'off'){
        db.set(`utility_${message.guild.id}`, true)
         succ('You have disabled the "Utility" module.')
      }
            } else if(args[1].toLowerCase() === 'information'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild');
    if(!args[2]) return err('Specify an argument "on" else "off".');
       if(args[2] !== 'on' && args[2] !== 'off') return err('This is not an argument.')
      if(args[2].toLowerCase() === 'on'){
        db.set(`information_${message.guild.id}`, false)
          succ('You have enabled the "Information" module.')
      } else if(args[2].toLowerCase() === 'off'){
        db.set(`information_${message.guild.id}`, true)
         succ('You have disabled the "Information" module.')
      }
           } else if(args[1].toLowerCase() === 'general'){
           if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild');
            message.channel.send(err('You cannot enable/disable the system module.'))
           }
        } else if(args[0].toLowerCase() === 'language'){
          if(!message.member.hasPermission("MANAGE_GUILD")) return err(0, 'Manage guild');
          let embed = new Discord.RichEmbed()
          .setTitle('Avaiable languages')
          .setDescription(`
ru-RU - Russia (Russia)
en-US - English (United States)`)
          .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
          .setColor('BLURPLE')
    if(!args[1]) return message.channel.send(embed)
    if(args[1] !== "en-US" && args[1] !== "ru-RU") return err(`\`${args.slice(1).join(' ')}\` not a language. Available languages: \`ru-RU, en-US\`.`)
    if(args[1] === 'ru-RU'){
      db.delete(`langen_${message.guild.id}`)
      db.set(`langru_${message.guild.id}`, 'true')
    let embed = new Discord.RichEmbed()
    .setTitle('Язык установлен :flag_ru:')
    .setColor('BLURPLE')
    .setDescription(`Язык на этом сервере: \`${args[1]}\` :flag_ru:`)
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
  message.channel.send(embed)
   }
    }
  }
}
exports.help = {
  name: ["settings"],
  desc: "Настройки бота.",
  desc2: "Bot settings.",
  use: "settings <Параметр/Модуль> <Аргумент> [on/off]",
  use2: "settings <Params/Module> <Arguments> [on/off]",
  otdel: "General"
}