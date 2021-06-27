import { AddCringeWordCommand } from '../commands/AddCringeWord.command';
import { Command } from '../commands/Command';
import { CringeraCommand } from '../commands/Cringera.command';
import { OnStartupEvent } from '../events/OnStartup.event';
import { EventsSettings } from './EventsSettings';

export class Settings {
  public readonly events: EventsSettings = {
    onStartup: new OnStartupEvent(),
  };

  public readonly commands: Array<Command> = [];

  constructor() {
    console.log('Settings: Initializing settings and configuration module ....');
    console.log('Settings: Loading Commands and Events settings....');
    this.commands.push(new AddCringeWordCommand());
    this.commands.push(new CringeraCommand());
  }
}