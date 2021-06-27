import { Context } from 'telegraf';
import { Event } from './Event';

export class OnStartupEvent implements Event {

  execute(context: Context): void {
    context.reply('Fala aí! Vejo que você também é um Lord do Cringe!');
  }

}