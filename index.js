const VkBot = require('node-vk-bot-api');
 
const bot = new VkBot(process.env.TOKEN);
 
bot.command(/^какой сейчас урок(\.|\?)?$/i, (ctx) => {
 
 let date = ctx.message.date*1000;
    date1 = new Date(date);
    ctx.reply(date1.toString());

});
 
bot.startPolling();
