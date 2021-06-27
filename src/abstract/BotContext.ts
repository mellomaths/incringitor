import { Context } from 'telegraf';
import { Update } from "typegram";

export class ChatUser {
  id: number;
  isBot: false;
  firstName: string;
  lastName: string;
  username: string;

  constructor(user: any) {
    this.id = user.id;
    this.isBot = user.is_bot;
    this.firstName = user.first_name;
    this.lastName = user.last_name;
    this.username = user.username;
  }
}

export class ChatMessage {
  id: number;
  from: ChatUser;
  date: Date;
  text: string;
  isReply: boolean;
  threadMessage?: ChatMessage;

  constructor(message: any) {
    this.id = message.message_id;
    this.from = new ChatUser(message.from);
    this.date = new Date(message.date);
    this.text = message.text;
    this.isReply = false;
    if (message.reply_to_message) {
      this.isReply = true;
      this.threadMessage = new ChatMessage(message.reply_to_message);
    }
  }
  
  cleanup(commandCallout: string): string {
    return this.text.replace(commandCallout, '').trim().toLowerCase();
  }
}


export interface BotContext extends Context<Update> {
  chatMessage: ChatMessage;
}