import { BotContext } from '../abstract/BotContext';
import { Command } from './Command';

export class SpotifyCommand extends Command {
  constructor() {
    super('/spotify');
  }

  handle(context: BotContext): void {
    super.handle(context);

    const sentence = context.chatMessage.cleanup(this.callout);
    const artists = sentence.split(',');
    console.log(`Sooo, you wanna listen to ${artists}`);
  }
}