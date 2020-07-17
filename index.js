const VkBot = require('node-vk-bot-api');
 
const bot = new VkBot(process.env.TOKEN);
 
bot.command(/^какой сейчас урок(\.|\?)?$/i, (ctx) => {
 let d = new Date();
 let date = new Date(d.getTime()-180);
 ctx.reply("T11: " + date.getTimezoneOffset() + "::" + date.getTime());

});
 
bot.startPolling();
