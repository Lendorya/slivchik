const Discord = require("discord.js");
let db = require('quick.db')
exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
    if(args[0] === 'clear') {
        succ('Статус очищен.')
        db.set(`status_${message.guild.id}_${message.author.id}`, "Нет статуса")
    } else {
        if(!args[0]) return err('Укажите статус.')
        let stata = args.join(' ').slice(0).replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'')
        if(stata.length > 50) return err('В статусе должно быть не более 50 символов.')
       succ('Статус успешно установлен!')
        db.set(`status_${message.guild.id}_${message.author.id}`, stata)
    };
  }
  if(db.fetch(`langen_${message.guild.id}`)){
    if(args[0] === 'clear') {
        succ('Status cleared.')
        db.set(`status_${message.guild.id}_${message.author.id}`, "Not status")
    } else {
        if(!args[0]) return err('Send status.')
        let stata = args.join(' ').slice(0).replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'')
        if(stata.length > 50) return err('The status should be no more than 50 characters.')
       succ('Status successfully set!')
        db.set(`status_${message.guild.id}_${message.author.id}`, stata)
    };
  }
}
exports.help = {
        name: ["status" , "profile-status"],
        desc: "Устанавливает ваш статус в profile",
        desc2: "Sets your profile status",
        use: "profile-status <статус> | clear",
        use2: "profile-status <status> | clear",
        otdel: "Economy"
    }