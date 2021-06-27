import { BotContext } from '../abstract/BotContext';
import { Command } from './Command';

export class AddCringeWordCommand extends Command {

  constructor() {
    super('/addcringeword');
  }

  handle(context: BotContext): void {
    super.handle(context);
    console.log(context.chatMessage.cleanup(this.callout));
  }
}