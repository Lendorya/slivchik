const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args, err, succ) => {
  if(db.fetch(`economy_${message.guild.id}`, 'true')) return;
  if(db.fetch(`langru_${message.guild.id}`)){
      if(args[0] === 'clear') {
        succ('Семья очищена.')
        db.set(`family_${message.guild.id}_${message.author.id}`, "Нет семьи")
    } else {
        if(!args[0]) return err('Укажите название семьи.');
        let stata = args.join(' ').slice(0).replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'')
        if(stata.length > 50) return err('Название семьи должно быть не более 50 символов.')
        succ(`Вы успешно вступили/создали семью __${stata}__`);
        db.set(`family_${message.guild.id}_${message.author.id}`, stata)
    }
  }
  if(db.fetch(`langen_${message.guild.id}`)){
      if(args[0] === 'clear') {
        succ('Family cleared.')
        db.set(`family_${message.guild.id}_${message.author.id}`, "Not family")
    } else {
        if(!args[0]) return err('Send family name.');
        let stata = args.join(' ').slice(0).replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'').replace('```', '\'\'\'')
        if(stata.length > 50) return err('The family name should be no more than 50 characters.')
        succ(`You have successfully joined/created a family __${stata}__`);
        db.set(`family_${message.guild.id}_${message.author.id}`, stata)
    }
  }
};
    module.exports.help = {
        name: ["profile-family", "family"],
      desc: "Создать или войти в семью.",
      desc2: "Create or join a family.",
      use: "profile-family <название семьи> | clear",
      use2: "profile-family <family name> | clear",
      otdel: "Economy"
    }