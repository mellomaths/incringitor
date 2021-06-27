import { BotContext } from '../abstract/BotContext';
import { DateHelper } from '../helpers/DateHelper';
import { Command } from './Command';

export class DaysInTheYearCommand extends Command {

  constructor() {
    super('/daysintheyear');
  }

  handle(context: BotContext): void {
    super.handle(context);
    const msg = context.chatMessage;
    console.log(`DaysInTheYear.handle: Calculating how many days there are in this year.`);
  
    const daysSinceBeginning = DateHelper.daysSinceTheBeginningOfTheYear();
    const percentage = DateHelper.percentageOfTheYearPassed();
    const daysForTheEnd = DateHelper.daysForTheEndOfTheYear();

    console.log(`DaysInTheYear.handle: There are ${daysSinceBeginning} in this year, today (${new Date()}), ${daysForTheEnd} for the end of the year. ${percentage}% of the year has gone.`);
    context.reply(`Hoje é o ${daysSinceBeginning} dia do ano de ${DateHelper.year()}, faltam ${daysForTheEnd} dias para o ano acabar. ${percentage}% do ano já passou.`, { reply_to_message_id: msg.id });
  }

}