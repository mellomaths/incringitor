import { Context } from 'telegraf';
import { Update } from 'typegram';

export abstract class Command {
  readonly callout: string;

  constructor(callout: string) {
    this.callout = callout;
    console.log(`Command: Initializing the ${this.callout} command....`);
  }

  handle(context: Context<Update>): void;

  handle(context: Context<Update>): void {
    console.log(`Command: Received a ${this.callout} command.`);
  }

}
