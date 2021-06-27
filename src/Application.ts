import { Telegraf } from 'telegraf';
import { BotContext, ChatMessage } from './abstract/BotContext';
import { Settings } from './config/Settings';
import * as dotenv from "dotenv";
import { Database } from './Database';
dotenv.config();

export class Application {

  private static instance: Application;
  
  private token: string;

  public readonly bot: Telegraf;
  public readonly database: Database;
  public readonly settings: Settings;

  private constructor() {
    console.log('Application: Initializing the application....');
    this.token = process.env.TELEGRAM_BOT_TOKEN;
    console.log('Application: Creating a new Bot instance....');
    this.bot = new Telegraf<BotContext>(this.token);
    this.settings = new Settings();
    this.database = Database.load();
    this.setup();
  }

  public static getInstance(): Application {
    console.log('Application: Getting an Application instance....');
    if (this.instance === null || this.instance === undefined) {
      console.log(`Application: Creating a new Application instance....`);
      this.instance = new Application();
    }
    
    return this.instance;
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
    console.log('Application.bootstrap: Launching Bot....');
    console.log('Application.bootstrap: Initialized successfully.');
    this.bot.launch();
    console.log('Application.bootstrap: Bot started.');
  }

}