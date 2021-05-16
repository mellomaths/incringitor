const CringeWord = require('../models/CringeWord.model');

class CringeraCommand {

  async handle(ctx) {
    if (!ctx.message.reply_to_message) {
      console.log("Rejecting message because there isn't a 'reply to' message");
      ctx.reply('Você precisa mencionar a mensagem para passar pela perícia do Cringe.', { reply_to_message_id: ctx.message.message_id });
      return;
    }

    const message = ctx.message.reply_to_message;
    const text = message.text;
    console.log(`Message: ${text}`);
    const cringePoints = await this.calculateCringePoints(text);
    console.log(`Cringe points: ${cringePoints}`);
    const cringeRating = this.rateCringe(cringePoints);
    console.log(`Cringe rating: ${cringeRating}`);
    ctx.reply(cringeRating, { reply_to_message_id: message.message_id });
  }

  async calculateCringePoints(message) {
    const msg = message.toLowerCase();
    let cringePoints = 0;

    const cringeWords = await CringeWord.findAll();

    cringeWords.forEach(cw => {
      if (msg.includes(cw.word)) {
        cringePoints++;
      }
    });

    return cringePoints;
  }

  rateCringe(cringePoints) {
    if (cringePoints === 0) {
      return 'Normie.';
    }

    if (cringePoints < 4) {
      return 'Cringe padrão, nada demais. Todo mundo solta um cringe uma hora ou outra.';
    }

    if (cringePoints < 7) {
      return 'Linha tênue do cringe. Você precisa se atentar.';
    }

    if (cringePoints < 10) {
      return 'Cringe++. Parece chat de jogador high elo de TFT.';
    }

    return 'Enquete do Cringe.';
  }

}

module.exports = CringeraCommand;
