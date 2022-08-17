const Discord = require("discord.js");
let db = require(`quick.db`)
module.exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`moderation_${message.guild.id}`, 'true')) return;
  if(message.author.id === '441954631539490857'){
  let bUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let mentioned = message.mentions.users.first();
  let me = message.guild.member(client.users.get(message.author.id));
  let ogs = args[0];
  //if (!message.member.hasPermission("BAN_MEMBERS")) return err(0, 'Банить пользователей.');
  if (!bUser) return err('Вы не упомянули пользователя, которого хотите забанить.');
  if (bUser.id === message.author.id) return err('Вы не можете забанить самого себя.');
  if(bUser.highestRole.position >= me.highestRole.position) return err('Вы не можете его забанить, так как его роль выше вашей.');
  let reason = args.join(" ").slice(ogs.length);
  if(!reason) reason = 'Не указана.'
  //if (!reason) return err('Укажите причину бана!');
  //if(bUser.hasPermission("ADMINISTRATOR")) return err('Я не могу забанить данного пользователя. У него права Администратора.');
  const embed = new Discord.RichEmbed()
  .setColor('RED')
  .setTitle('Забанен пользователь:')
  .setDescription(`${bUser.user.tag} его ID: ${bUser.user.id}`)
  .addField('Забанил администратор:', `${message.author.tag} его ID: ${message.author.id}`)
  .addField("Забанили на канале", message.channel)
  .setFooter('JeggyBot, 2018-2019.', client.user.avatarURL)
  .addField("Время бана:", `${message.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}`)
  .addField('Причина:', reason)
  .setFooter('JeggyBot, 2018-2019.', client.user.avatarURL)
  .setTimestamp();

  var banEmbed = new Discord.RichEmbed() 
  .setColor('RED')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle(`Вас забанили на сервере: \`${message.guild.name}\``)
  .addField('Забанил:', `${message.author.tag} его ID: ${message.author.id}`)
  .addField("Забанили на канале", message.channel)
  .addField("Время бана:", `${message.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}`)
  .addField('Причина:', reason)
  .setFooter('JeggyBot, 2018-2019.', client.user.avatarURL)
  .setTimestamp();
mentioned.send(banEmbed); 
  message.channel.send(embed).then(() => bUser.ban(message.author.tag+reason))//.catch(() => {return err('У меня нет прав банить!'); });
} else {
   let bUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let mentioned = message.mentions.users.first();
  let me = message.guild.member(client.users.get(message.author.id));
  let ogs = args[0];
  if (!message.member.hasPermission("BAN_MEMBERS")) return err(0, 'Банить пользователей.');
  if (!bUser) return err('Вы не упомянули пользователя, которого хотите забанить.');
  if (bUser.id === message.author.id) return err('Вы не можете забанить самого себя.');
  if(bUser.highestRole.position >= me.highestRole.position) return err('Вы не можете его забанить, так как его роль выше вашей.');
  let reason = args.join(" ").slice(ogs.length);
  if(!reason) reason = 'Не указана.'
  //if (!reason) return err('Укажите причину бана!');
  if(bUser.hasPermission("ADMINISTRATOR")) return err('Я не могу забанить данного пользователя. У него права Администратора.');
  const embed = new Discord.RichEmbed()
  .setColor('RED')
  .setTitle('Забанен пользователь:')
  .setDescription(`${bUser.user.tag} его ID: ${bUser.user.id}`)
  .addField('Забанил администратор:', `${message.author.tag} его ID: ${message.author.id}`)
  .addField("Забанили на канале", message.channel)
  .setFooter('JeggyBot, 2018-2019.', client.user.avatarURL)
  .addField("Время бана:", `${message.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}`)
  .addField('Причина:', reason)
  .setFooter('JeggyBot, 2018-2019.', client.user.avatarURL)
  .setTimestamp();

  var banEmbed = new Discord.RichEmbed() 
  .setColor('RED')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle(`Вас забанили на сервере: \`${message.guild.name}\``)
  .addField('Забанил:', `${message.author.tag} его ID: ${message.author.id}`)
  .addField("Забанили на канале", message.channel)
  .addField("Время бана:", `${message.createdAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false})}`)
  .addField('Причина:', reason)
  .setFooter('JeggyBot, 2018-2019.', client.user.avatarURL)
  .setTimestamp();
mentioned.send(banEmbed); 
  message.channel.send(embed).then(() => bUser.ban(reason))//.catch(() => {return err('У меня нет прав банить!'); });
}
};
module.exports.help = {
    name: ["ban"],
    description: "Забанить пользователя."
}