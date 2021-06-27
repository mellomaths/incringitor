import { BotContext } from '../abstract/BotContext';
import { DateHelper } from '../helpers/DateHelper';
import { Command } from './Command';

export class DaysInTheYear extends Command {

  constructor() {
    super('/daysintheyear');
  }

  handle(context: BotContext): void {
    super.handle(context);
    const msg = context.chatMessage;
    console.log(`DaysInTheYear.handle: Calculating how many days there are in this year.`);
    const year = new Date().getFullYear();
    const beginning = new Date(`${year}-01-01`);
    const today = new Date();
    const days = DateHelper.calculateDaysBetween(beginning, today) + 1;
    console.log(`DaysInTheYear.handle: There are ${days} in this year, today (${today}).`);
    context.reply(`Hoje é o ${days} dia do ano de ${year}`, { reply_to_message_id: msg.id });
  }

}