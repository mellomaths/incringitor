import { BotContext } from '../abstract/BotContext';
import { CringeWordRepository } from '../repository/CringeWord.repository';
import { Command } from './Command';

export class AddCringeWordCommand extends Command {

  private readonly repository = new CringeWordRepository();

  constructor() {
    super('/addcringeword');
  }

  async handle(context: BotContext): Promise<void> {
    super.handle(context);
    const sentence = context.chatMessage.cleanup(this.callout);
    console.log(`AddCringeWordCommand.handle: Saving '${sentence}' as a cringe word.`);
    await this.repository.save(sentence);
  }
}