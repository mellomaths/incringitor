import * as cron from "node-cron";
import { BotContext } from "../abstract/BotContext";
import { Command } from "./Command";

enum TaskScheduleTypes {
  DAILY = "daily",
}

class TaskSchedulerConfig {
  public static readonly DAILY = "0 12 * * *";
}

export class TaskSchedulerCommand extends Command {
  constructor() {
    super("/schedule");
  }

  async handle(context: BotContext): Promise<void> {
    super.handle(context);
    const sentence = context.chatMessage.cleanup(this.callout);
    console.log(
      `TaskSchedulerCommand.handle: Handling task scheduler for ${sentence}`
    );
    const words = sentence.split(" ");
    if (words.length === 0) {
      console.log(
        `TaskSchedulerCommand.handle: Rejecting message due to schedule task without type`
      );
      context.reply("Informe em qual frequência o bot deve enviar a mensagem");
      return;
    }

    const taskType = words.shift();
    const message = words.join(" ");
    console.log(
      `TaskSchedulerCommand.handle: Scheduling to send message ${message} on the frequency of ${taskType}`
    );

    if (taskType === TaskScheduleTypes.DAILY) {
      cron.schedule(TaskSchedulerConfig.DAILY, function () {
        console.log(
          `TaskSchedulerCommand.handle: Sending scheduled message ${message}`
        );
        context.reply(message);
      });
    } else {
      console.log(
        `TaskSchedulerCommand.handle: Rejecting message due to schedule task with invalid type`
      );
      const options = Object.values(TaskScheduleTypes);
      context.reply(
        `Informe em qual frequência o bot deve enviar a mensagem. Aqui está as possíveis frequências que o bot permite: ${options.toString()}`
      );
      return;
    }
  }
}
