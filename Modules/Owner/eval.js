
const Discord = require("discord.js")
const math = require("mathjs");
const cpu = require("cpu-stat")
const ffmpeg = require("ffmpeg")
const ffmpegbinaries = require("ffmpeg-binaries")
const ffmpegstatic = require("ffmpeg-static")
const jimp = require("jimp")
const momenttimezone = require("moment-timezone")
let cfg = require('../../config.json')
const db = require ('quick.db')
//const nodefetch = require("node-fetch")
const opusscript = require("opusscript")
const rgbcolor = require("rgbcolor")
const youtube = require('simple-youtube-api')
const strftime = require('strftime')
const weather = require('weather-js')
const ytdl = require("ytdl-core")
const moment = require("moment");
const fs = require("fs");
const ms = require("ms");
const request = require("request");
const os = require('os');
const client = new Discord.Client({disableEveryone: true});
const creator = '441954631539490857'
const creator2 = "590843580793356307";
let prefix = '+'
module.exports.run = async (client, message, args, err, succ) => {
  let minute = Math.round(client.uptime/1000/60)%60
  let hours = Math.round(client.uptime/1000/60/60)%24
  if(!cfg.owners.includes(message.author.id)) return err('Developer only.')
    try {
      let code = args.join(' ').replace(/client\.token|client\[.token.\]/ig, 'токен да?')
        let evaled = eval(code)
let eevaled = typeof evaled; 
const tyype = eevaled[0].toUpperCase() + eevaled.slice(1);
if(typeof evaled!== 'string') evaled = require('util').inspect(evaled); 
let yes = new Discord.RichEmbed()
.setTitle(`Succesfully! ${cfg.yes}`)
.setColor('GREEN')
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp()
.setDescription(`
Servers: **${client.guilds.size}**
Uptime: **${hours}h ${minute}m**

Type: **${tyype}**
Request by: **${message.author.tag}**
Done for **${new Date().getTime() - message.createdTimestamp + 'ms'}**`)
await message.channel.send(yes)
message.channel.send(`
\`\`\`js
${evaled}\`\`\``, {split: '\n'}).then(() => message.react("✅"))
} catch(err) {
let no = new Discord.RichEmbed()
.setTitle(`Error! ${cfg.yup}`)
.setColor('RED')
.setFooter('JeggyBot, 2018-2019. ©', client.user.avatarURL)
.setTimestamp()
.setDescription(`
Servers: **${client.guilds.size}**
Uptime: **${hours}h ${minute}m**

Request by: **${message.author.tag}**
Done for **${new Date().getTime() - message.createdTimestamp + 'ms'}**`)
await message.channel.send(no)
message.channel.send(`
\`\`\`js
${err}\`\`\``).then(() => message.react("❎"))};
};
module.exports.help = {
    name: ["eval"],
    desc: "Выполняет написанный код.",
    desc2: "Executes written code.",
    use2: "eval <code>",
    use: "eval <код>",
    otdel: "Owner"
}