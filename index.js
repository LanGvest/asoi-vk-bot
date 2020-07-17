const VkBot = require('node-vk-bot-api');
 
const bot = new VkBot(process.env.TOKEN);
 
bot.command(/^какой сейчас урок(\.|\?)?$/i, (ctx) => {
 
 let date = new Date();
    ctx.reply("N1: " + date.getTimezoneOffset());

});
 
bot.startPolling();
