import { Priority } from './priority.types';

export interface Message {
  id: number;
  priority: Priority;
  name: string;
  message: string;
}
