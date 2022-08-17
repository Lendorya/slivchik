const Discord = require("discord.js");
module.exports.run = async (client, message, args, err, succ) => {
  let db= require('quick.db')
  if(db.fetch(`langru_${message.guild.id}`)){
  let vadim = client.users.get('441954631539490857').tag
    let egor = client.users.get('590843580793356307').tag
        let here = client.users.get('316204871680262145').tag
          let artur = client.users.get('541633767861911554').tag
let embed = new Discord.RichEmbed()
.setTitle('Создатели бота JeggyBot')
.addField('Главные разработчики бота:', `${vadim}, ${egor}`)
.addField('Поддержка на Support Server:', `${artur}, ${egor}`)
.addField('Люди, которые помогли с переводом:', `${here}`)
.setDescription('Я взялся за разработку совершенно нового кода для Джегги, чтобы **всех** пользователей всё устроило..')
.setColor('BLUE')
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp()
message.channel.send(embed)
} 
  if(db.fetch(`langen_${message.guild.id}`)){
    let vadim = client.users.get('441954631539490857').tag
    let egor = client.users.get('590843580793356307').tag
        let here = client.users.get('316204871680262145').tag
          let artur = client.users.get('541633767861911554').tag
let embed = new Discord.RichEmbed()
.setTitle('JeggyBot creators')
.addField('Main bot developers:', `${vadim}, ${egor}`)
.addField('Support\'s on Support Server:', `${artur}, ${egor}`)
.addField('People who helped with the translation:', `${here}`)
.setDescription('I set about developing completely new code for Jeggy so that **all** users are happy with everything..')
.setColor('BLUE')
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp()
message.channel.send(embed)
  }
}

module.exports.help = {
    name: ["authors", "creators", "author", "creator"],
    desc: "Создатели бота.",
    desc2: "Bot owners.",
    use: "authors",
  use2: "authors",
  otdel: "General"
}