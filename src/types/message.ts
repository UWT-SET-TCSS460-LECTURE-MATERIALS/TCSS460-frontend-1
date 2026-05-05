import type { Priority } from './priority';

export interface Message {
  id: number;
  priority: Priority;
  name: string;
  message: string;
}
