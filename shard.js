const Discord = require('discord.js')
const config = require('./config.json')

const shard = new Discord.ShardingManager('./bot.js', {
    totalShards: 2,
    token: process.env.BOT_TOKEN
  });
  
  shard.spawn();
  
  shard.on('launch', shard => {
    console.log(`SHARD ${shard.id+1} LOADING.`)
  });