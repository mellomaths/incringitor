import { BotContext } from '../abstract/BotContext';
import { CringeWordRepository } from '../repository/CringeWord.repository';
import { Command } from './Command';

export class CringeraCommand extends Command {

  private readonly repository = new CringeWordRepository();

  constructor() {
    super('/cringera');
  }

  async handle(context: BotContext): Promise<void> {
    super.handle(context);
    const msg = context.chatMessage;
    const threadMessage = msg.threadMessage;
    if (!msg.isReply && !threadMessage) {
      console.log("CringeraCommand.handle: Rejecting message because there isn't a Reply Message.");
      context.reply('Você precisa mencionar a mensagem para passar pela perícia do Cringe.', { reply_to_message_id: msg.id });
      return;
    }

    const text = threadMessage.text;
    console.log(`CringeraCommand.handle: Received ${text} for Cringera analysis.`);
    const points = await this.calculateCringePoints(text);
    console.log(`CringeraCommand.handle: The sentence '${text}' scored ${points} points.`);
    const judgment = this.judgeCringePoints(points);
    console.log(`CringeraCommand.handle: The sentence '${text}' was condemned by Cringe Judge - '${judgment}'.`);
    context.reply(judgment, { reply_to_message_id: threadMessage.id });
  }

  private async calculateCringePoints(messageText: string): Promise<number> {
    const txt = messageText.toLowerCase();
    const cringeWords = await this.repository.findAll();
    const points = cringeWords.reduce((acc, cringe) => {
      if (txt.includes(cringe.word)) {
        return acc + 1;
      }

      return acc;
    }, 0);
    return points;
  }

  private judgeCringePoints(cringePoints: number): string {
    if (cringePoints === 0) {
      return 'Normie.';
    }

    if (cringePoints < 2) {
      return 'Cringe padrão, nada demais. Todo mundo solta um cringe uma hora ou outra.';
    }

    if (cringePoints < 4) {
      return 'Linha tênue do cringe. Você precisa se atentar.';
    }

    if (cringePoints < 6) {
      return 'Cringe++. Parece chat de jogador high elo de TFT.';
    }

    return 'Enquete do Cringe.';
  }
  
}