const Discord = require("discord.js");
const vremya = 1000 * 60 * 60 * 6;
let db = require('quick.db');
const repday = new Map();
const moment = require("moment");
module.exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
    moment.locale('ru')
        let cww = repday.get(message.author.id);
        if(cww === undefined) {
       const member = message.guild.member(message.mentions.users.first());
       if(!args[0]) return err('Упомяните пользователя.')
          if(!member) return err('Пользователь не найден.')
       if(member.user.bot) return err('Вы не можете дать репутацию боту.')
       if (member.id === message.author.id) return err('Вы не можете дать репутацию себе.');
        const embed = new Discord.RichEmbed()
            .setTitle(`Репутация <:unrep:582206466702835712>`)
            .setColor('RED')
            .setDescription(`**${member.user.username}**, Вам испортил(а) репутацию: **${message.author.username}**`)
            .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
            .setTimestamp();
            message.channel.send(embed);
           db.add(`rep_${message.guild.id}_${member.id}`, -1)
            repday.set(message.author.id, Date.now() + 1000 * 60 *60 * 6)
            setTimeout(() => {
                repday.delete(message.author.id);
            }, vremya) 
        } else {
          return err(`Вы уже испортили репутацию, вы сможете сделать снова ${moment(cww).fromNow()}`)
        }
  }
  if(db.fetch(`langen_${message.guild.id}`)){
    moment.locale('en')
    let cww = repday.get(message.author.id);
        if(cww === undefined) {
       const member = message.guild.member(message.mentions.users.first());
       if(!args[0]) return err('Mention user.')
           if(!member) return err('User nod found.')
       if(member.user.bot) return err('You can not give a reputation to the bot.')
       if (member.id === message.author.id) return err('You cannot give yourself a reputation.');
        const embed = new Discord.RichEmbed()
            .setTitle(`Reputation <:unrep:582206466702835712>`)
            .setColor('RED')
            .setDescription(`**${member.user.username}**, Has worsened you a reputation: **${message.author.username}**`)
            .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
            .setTimestamp();
            message.channel.send(embed);
           db.add(`rep_${message.guild.id}_${member.id}`, -1)
            repday.set(message.author.id, Date.now() + 1000 * 60 *60 * 6)
            setTimeout(() => {
                repday.delete(message.author.id);
            }, vremya) 
        } else {
          return err(`You already worsened a reputation, you can worsened it again through ${moment(cww).fromNow()}`)
        }
  }
    }
    module.exports.help = {
        name: ["unrep", "dislike"],
        desc: "Добавляет репутацию пользователю на сервере.",
        desc2: "Adds a reputation to the user on the server.",
        use: "addrep <@пользователь>",
        use2: "addrep <@user>",
        otdel: "Economy"
    }