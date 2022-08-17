let Discord = require('discord.js')
let db = require('quick.db')
exports.run = async (client, message, args) => {
  if(db.fetch(`langru_${message.guild.id}`)){
    const embed = new Discord.RichEmbed()
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setColor('BLUE')
    .setDescription(`Если вы хотите поддержать бота и помочь в развитии, то можете пожертвовать свои деньги на:\n
:white_check_mark: QIWI: [Donate](https://qiwi.me/help-jeggybot);
:white_check_mark: DonationAlerts: [Donate](https://www.donationalerts.com/r/mrvadim4ik);
:negative_squared_cross_mark: PayPal:
:white_check_mark: WebMoney: **R539876660538**;
:white_check_mark: Яндекс.Деньги: **410017242972736**;

После подтверждения напишите в ЛС MrVaDiM4iK#0232.
Это сделано для того, чтобы я смог вас добавить в Top Donaters.

[Проголосуй за бота!](https://discordbots.org/bot/551829966602502183/vote)`)
    message.channel.send(embed);
  } else if(db.fetch(`langen_${message.guild.id}`)){
     const embed = new Discord.RichEmbed()
    .setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
    .setTimestamp()
    .setColor('BLUE')
    .setDescription(`If you want to support your money, you can donate your money to:\n
:white_check_mark: QIWI: [Donate](https://qiwi.me/help-jeggybot);
:white_check_mark: DonationAlerts: [Donate](https://www.donationalerts.com/r/mrvadim4ik);
:negative_squared_cross_mark: PayPal:
:white_check_mark: WebMoney: **R722175007864**;
:white_check_mark: Yandex.Money: **410017242972736**;

After confirmation, write MrVaDiM4iK#0232 to the DM.
This is done so that I can add you to the Top Donaters.

[Vote the bot!](https://discordbots.org/bot/551829966602502183/vote)`)
    message.channel.send(embed);
  }
}
exports.help = {
  name: ["donate"],
  desc: "Поддержать авторов бота.",
  desc2: "Donate on bot owners.",
  use: "donate",
  use2: "donate",
  otdel: "General"
}