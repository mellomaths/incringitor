import { Telegraf } from 'telegraf';
import { BotContext, ChatMessage } from './abstract/BotContext';
import { Settings } from './config/Settings';
import * as dotenv from "dotenv";
import { Database } from './Database';
dotenv.config();

export class Application {

  private static instance: Application;
  private token: string;
  private bot: Telegraf;
  public readonly settings: Settings;

  private constructor() {
    console.log('Application: Initializing the application....');
    this.token = process.env.TELEGRAM_BOT_TOKEN;
    this.bot = new Telegraf<BotContext>(this.token);
    this.settings = new Settings();
    this.setup();
  }

  public static getInstance(): Application {
    if (!this.instance) {
      this.instance = new Application();
    }

    return this.instance;
  }

  public getBot(): Telegraf {
    return this.bot;
  }

  private setup(): void {
    console.log('Application.setup: Loading up the application properties and context....');
    this.bot.use((context: BotContext, next) => {
      context.chatMessage = new ChatMessage(context.message);
      return next();
    });

    this.bot.start(this.settings.events.onStartup.execute);
    this.settings.commands.forEach((command) => {
      console.log(`Application.setup: Setting up the ${command.callout} command to be used by the Bot....`);
      this.bot.command(command.callout, (context) => command.handle(context));
    });
    console.log('Application.setup: Bot configuration completed.');
  }

  public bootstrap(): void {
    console.log('Application.bootstrap: Initialized successfully.');
    console.log('Application.bootstrap: Launching bot.');
    this.bot.launch();
  }

}