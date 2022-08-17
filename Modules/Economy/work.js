const Discord = require("discord.js");
const vremya = 1000 * 60 * 60 * 3;
const db = require('quick.db');
const dailed = new Map();
const moment = require("moment");
module.exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
    moment.locale('ru')
    let dp = Math.floor(Math.random() * 150)
    let text = [`Вы подработали таксистом и получили **${dp}** монет.`, 
               `Вас попросили переустановить windows, взамен вы получили **${dp}** монет.`,
               `Вы помыли машину соседу и получили **${dp}** монет.`,
               `Вас попросили переустановить linux, взамен вы получили **${dp}** монет.`,
               `Вы поработали медиком и заработали **${dp}** монет.`]
        let cww = dailed.get(message.author.id);
        if(cww === undefined) {
            const embed = new Discord.RichEmbed()
            .setTitle(`Работа`)
            .setColor('GREEN')
            .setDescription(`${message.author}, ${text[Math.floor(Math.random() *text.length)]}`)
            .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
            .setTimestamp()
            message.channel.send(embed);
            db.add(`money_${message.guild.id}_${message.author.id}`, dp)
            dailed.set(message.author.id, Date.now() + 1000 * 60 *60 * 3)
            setTimeout(() => {
                dailed.delete(message.author.id);
            }, vremya) 
        } else {
          return err(`Вы уже работали, передохните и продолжите ${moment(cww).fromNow()}`)
        }
  }
 if(db.fetch(`langen_${message.guild.id}`)){
   moment.locale('en')
    let dp = Math.floor(Math.random() * 150)
    let text = [`You worked as a taxi driver, made money and got **${dp}** coins.`,
`You were asked to reinstall Windows, in return you received **${dp}** coins.`,
`You washed the car with a neighbor and got **${dp}** coins.`,
`You were asked to reinstall linux, in return you received **${dp}** coins.`,
`You worked as a medic and earned **${dp}** coins.`]
        let cww = dailed.get(message.author.id);
        if(cww === undefined) {
            const embed = new Discord.RichEmbed()
            .setTitle(`Work`)
            .setColor('GREEN')
            .setDescription(`${message.author}, ${text[Math.floor(Math.random() *text.length)]}`)
            .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
            .setTimestamp()
            message.channel.send(embed);
            db.add(`money_${message.guild.id}_${message.author.id}`, dp)
            dailed.set(message.author.id, Date.now() + 1000 * 60 *60 * 3)
            setTimeout(() => {
                dailed.delete(message.author.id);
            }, vremya) 
        } else {
          return err(`You already get daily coins, come ${moment(cww).fromNow()}`)
        }
  }
    }
    module.exports.help = {
        name: ["work"],
      desc: "Поработать.",
      desc2: "Work.",
      use: "work",
      use2: "work",
      otdel: "Economy"
    }