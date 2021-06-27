import { BotContext } from '../abstract/BotContext';
import { Command } from './Command';

export class DaysOfBolsonaro extends Command {

  constructor() {
    super('/daysofbolsonaro');
  }

  handle(context: BotContext): void {
    super.handle(context);
    const msg = context.chatMessage;
    console.log(`DaysOfBolsonaro.handle: Calculating how much time we are in hell.`);
    const firstDayInHell = new Date('2021-06-01');
    const today = new Date();
    const days = this.dateDiffInDays(firstDayInHell, today);
    console.log(`DaysOfBolsonaro.handle: So we really are suffering still after ${days} days, that's nice.`);
    context.reply(`Estamos há ${days} dias no inferno. Parabéns aos envolvidos!`, { reply_to_message_id: msg.id });
  }

  private dateDiffInDays(from: Date, to: Date) {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utcFrom = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
    const utcTo = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());

    return Math.floor((utcTo - utcFrom) / MS_PER_DAY);
  }
}