import { BotContext } from '../abstract/BotContext';
import { Command } from './Command';

export class CringeraCommand extends Command {
  constructor() {
    super('/cringera');
  }

  handle(context: BotContext): void {
    super.handle(context);
    const msg = context.message;
    console.log(msg.message_id);
  }
  
}