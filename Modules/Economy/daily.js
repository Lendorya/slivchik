const Discord = require("discord.js");
const vremya = 1000 * 60 * 60 * 6;
const db = require('quick.db');
const dailed = new Map();
const moment = require("moment");
module.exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
    moment.locale('ru')
        let cww = dailed.get(message.author.id);
        if(cww === undefined) {
            const embed = new Discord.RichEmbed()
            .setTitle(`Ежедневные монетки`)
            .setColor('GREEN')
            .setDescription(`${message.author.username}, вы получили ежедневную награду в размере 100 монеток, приходите через 6 часов.`)
            .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
            .setTimestamp()
            message.channel.send(embed);
            db.add(`money_${message.guild.id}_${message.author.id}`, 100)
            dailed.set(message.author.id, Date.now() + 1000 * 60 *60 * 6)
            setTimeout(() => {
                dailed.delete(message.author.id);
            }, vremya) 
        } else {
          return err(`Вы уже получали ежедневные монетки, приходите ${moment(cww).fromNow()}`)
        }
  }
   if(db.fetch(`langen_${message.guild.id}`)){
     moment.locale('en')
        let cww = dailed.get(message.author.id);
        if(cww === undefined) {
            const embed = new Discord.RichEmbed()
            .setTitle(`Daily coins`)
            .setColor('GREEN')
            .setDescription(`${message.author.username}, You have received a daily reward of 100 coins, come in 6 hours.`)
            .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
            .setTimestamp()
            message.channel.send(embed);
            db.add(`money_${message.guild.id}_${message.author.id}`, 100)
            dailed.set(message.author.id, Date.now() + 1000 * 60 *60 * 6)
            setTimeout(() => {
                dailed.delete(message.author.id);
            }, vremya) 
        } else {
          return err(`You already get daily coins, come ${moment(cww).fromNow()}`)
        }
   }
    }
    module.exports.help = {
        name: ["daily"],
      desc: "Ежедневные монетки.",
      desc2: "Daily coins.",
      use: "daily",
      use2: "daily",
      otdel: "Economy"
    }