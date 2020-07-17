const VkBot = require('node-vk-bot-api');
 
const bot = new VkBot(process.env.TOKEN);
 
bot.command(/^какой сейчас урок(\.|\?)?$/i, (ctx) => {
 let d = new Date();
 let date = new Date(d.getTime()+28800000);
 ctx.reply("T12: " + date.getTimezoneOffset() + "::" + date.getTime()+"::"+date.toString());

});
 
bot.startPolling();
