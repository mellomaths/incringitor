import { Context } from 'telegraf';

export interface Event {
  execute(context: Context): void;
}