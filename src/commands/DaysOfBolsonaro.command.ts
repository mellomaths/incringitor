import { BotContext } from '../abstract/BotContext';
import { DateHelper } from '../helpers/DateHelper';
import { Command } from './Command';

export class DaysOfBolsonaro extends Command {

  constructor() {
    super('/daysofbolsonaro');
  }

  handle(context: BotContext): void {
    super.handle(context);
    const msg = context.chatMessage;
    console.log(`DaysOfBolsonaro.handle: Calculating how much time we are in hell.`);
    const days = DateHelper.daysSince(new Date('2019-01-01'));
    console.log(`DaysOfBolsonaro.handle: So we really are suffering still after ${days} days, that's nice.`);
    context.reply(`Estamos há ${days} dias no inferno. Parabéns aos envolvidos!`, { reply_to_message_id: msg.id });
  }
}