import { Context } from 'telegraf';
import { Update } from "typegram";

export class ChatUser {
  id: number;
  is_bot: false;
  first_name: string;
  last_name: string;
  username: string;
}

export class ChatMessage {
  id: number;
  from?: ChatUser;
  date: Date;
  text: string;

  constructor(message: any) {
    this.id = message.message_id;
    this.from = {
      id: message.from.id,
      is_bot: message.from.is_bot,
      first_name: message.from.first_name,
      last_name: message.from.last_name,
      username: message.from.username,
    };
    this.date = new Date(message.date);
    this.text = message.text;
  }
  
  cleanup(commandCallout: string): string {
    return this.text.replace(commandCallout, '').trim().toLowerCase();
  }
}


export interface BotContext extends Context<Update> {
  chatMessage: ChatMessage;
}