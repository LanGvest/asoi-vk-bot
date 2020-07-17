const VkBot = require('node-vk-bot-api');
 
const bot = new VkBot(process.env.TOKEN);
 
bot.command(/^какой сейчас урок(\.|\?)?$/i, (ctx) => {
 
 let date = new Date();
    ctx.reply("T1: " + date.getTimezoneOffset() + "::" + date.getTime());

});
 
bot.startPolling();
