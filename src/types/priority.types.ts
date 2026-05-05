export enum Priority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

export const PRIORITY_LEVELS = [Priority.LOW, Priority.MEDIUM, Priority.HIGH] as const;

export type PriorityLevel = (typeof PRIORITY_LEVELS)[number];
