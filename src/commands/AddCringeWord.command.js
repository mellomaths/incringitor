const CringeWord = require('../models/CringeWord.model');

class AddCringeWordCommand {

  async handle(ctx) {
    const sentence = ctx.message.text.replace('/addcringeword', '').trim().toLowerCase();
    console.log(`Saving '${sentence}' as a cringe word.`);
    await this._save(sentence);
  }

  async _save(sentence) {
    await CringeWord.sync();
    const cringe = CringeWord.build({ word: sentence });
    console.log(`${sentence} saved with id=${cringe.id}`);
    await cringe.save();
  }

}

module.exports = AddCringeWordCommand;