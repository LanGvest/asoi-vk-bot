const VkBot = require('node-vk-bot-api');
 
const bot = new VkBot(process.env.TOKEN);
 
bot.command(/^какой сейчас урок(\.|\?)?$/i, (ctx) => {
    
    let date = new Date();
    console.log(date.toString())
    ctx.reply(date.toString());
});
 
bot.startPolling();
