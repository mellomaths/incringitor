const { Telegraf } = require('telegraf');
const { calculateCringePoints, rateCringe } = require('./commands/cringera');
require('dotenv').config();

const cringeWords = [];

// Todo: Ranking de Cringe

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
bot.start((ctx) => ctx.reply('Fala aí! Vejo que você também é um Lord do Cringe!'));

bot.command('/cringera', ctx => {
  console.log('Bot received /cringera command request');
  if (!ctx.message.reply_to_message) {
    console.log("Rejecting message because there isn't a 'reply to' message");
    ctx.reply('Você precisa mencionar a mensagem para passar pela perícia do Cringe.', { reply_to_message_id: ctx.message.message_id });
    return;
  }

  const message = ctx.message.reply_to_message;
  const text = message.text;
  console.log(`Message: ${text}`);
  const cringePoints = calculateCringePoints(text, cringeWords);
  console.log(`Cringe points: ${cringePoints}`);
  const cringeRating = rateCringe(cringePoints);
  console.log(`Cringe rating: ${cringeRating}`);
  ctx.reply(cringeRating, { reply_to_message_id: message.message_id });
});

bot.command('/addcringeword', ctx => {
  console.log('Bot received /addcringeword command request');
  const cringe = ctx.message.text.replace('/addcringeword', '').trim().toLowerCase();
  console.log(`Adding '${cringe}' to the cringe words.`);
  cringeWords.push(cringe);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
