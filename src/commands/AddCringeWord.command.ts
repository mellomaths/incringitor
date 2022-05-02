import { BotContext } from "../abstract/BotContext";
import { CringeWordRepository } from "../repository/CringeWord.repository";
import { Command } from "./Command";

export class AddCringeWordCommand extends Command {
  private readonly repository = new CringeWordRepository();

  constructor() {
    super("/addcringeword");
  }

  async handle(context: BotContext): Promise<void> {
    super.handle(context);
    const sentence = context.chatMessage.cleanup(this.callout);
    if (!sentence) {
      console.log(
        `AddCringeWordCommand.handle: Rejecting empty cringe word (sentence=${sentence}).`
      );
      context.reply(
        `Informe qual palavra ou frase deseja adicionar ao repositório de palavras cringes.`
      );
      return;
    }
    console.log(
      `AddCringeWordCommand.handle: Saving (sentence=${sentence}) as a cringe word.`
    );
    await this.repository.save(sentence);
  }
}
