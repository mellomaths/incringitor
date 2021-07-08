import { Command } from '../commands/Command';
import { CommandLoader } from './CommandLoader';
import { buildDatabaseSettings, DatabaseSettings } from './DatabaseSettings';
import { EventLoader } from './EventLoader';
import { EventsSettings } from './EventsSettings';

export class Settings {
  public readonly events: EventsSettings;

  public readonly commands: Array<Command> = [];

  public readonly database: DatabaseSettings;

  constructor() {
    console.log('Settings: Initializing settings and configuration module....');
    console.log('Settings: Loading Database settings....');
    this.database = buildDatabaseSettings();
    console.log('Settings: Loading Commands and Events settings....');
    this.events = EventLoader.load();
    this.commands = CommandLoader.load();
  }
}
