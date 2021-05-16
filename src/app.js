const { Telegraf } = require('telegraf');
const AddCringeWordCommand = require('./commands/AddCringeWord.command');
const { calculateCringePoints, rateCringe } = require('./commands/cringera');
const CringeraCommand = require('./commands/Cringera.command');
require('dotenv').config();

// Todo: Ranking de Cringe

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
bot.start((ctx) => ctx.reply('Fala aí! Vejo que você também é um Lord do Cringe!'));

bot.command('/cringera', ctx => {
  console.log('Bot received /cringera command request');
  const command = new CringeraCommand();
  await command.handle(ctx);
});

bot.command('/addcringeword', async ctx => {
  console.log('Bot received /addcringeword command request');
  const command = new AddCringeWordCommand();
  await command.handle(ctx);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
