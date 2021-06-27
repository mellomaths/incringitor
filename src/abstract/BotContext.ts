import { Context } from 'telegraf';
import { Chat, Message, Update, User } from "typegram";

export class ChatMessage implements Message.ServiceMessage, Message.TextMessage {
  message_id: number;
  from?: User;
  sender_chat?: Chat;
  date: number;
  chat: Chat;

  text: string;

  constructor(message: any) {
    const keys = Object.keys(message) // get items keys
    const thisKeys = Object.keys(this) // get this class keys
    const limitedItem = keys.reduce((newObj, key) => { // combine same keys
      if (thisKeys.includes(key)) {
        newObj[key] = message[key]
      }
      return newObj
    }, {})
    Object.assign(this, limitedItem) // assign to this class
  }
  
  cleanup(commandCallout: string): string {
    return this.text.replace(commandCallout, '').trim().toLowerCase();
  }
}


export interface BotContext extends Context<Update> {
  chatMessage: ChatMessage;
}