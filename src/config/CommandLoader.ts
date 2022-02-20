import { AddCringeWordCommand } from "../commands/AddCringeWord.command";
import { Command } from "../commands/Command";
import { CringeraCommand } from "../commands/Cringera.command";
import { DaysInTheYearCommand } from "../commands/DaysInTheYear.command";
import { DaysOfBolsonaro } from "../commands/DaysOfBolsonaro.command";
import { TaskSchedulerCommand } from "../commands/TaskScheduler.command";

export class CommandLoader {
  static load(): Array<Command> {
    const commands: Array<Command> = [];
    commands.push(new AddCringeWordCommand());
    commands.push(new CringeraCommand());
    commands.push(new DaysOfBolsonaro());
    commands.push(new DaysInTheYearCommand());
    commands.push(new TaskSchedulerCommand());
    return commands;
  }
}
