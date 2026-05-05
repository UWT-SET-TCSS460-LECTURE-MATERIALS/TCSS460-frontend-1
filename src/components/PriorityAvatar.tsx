import { PRIORITY, type Priority } from '@/types/priority';
import Avatar from '@mui/material/Avatar';
import { yellow, red, green, grey } from '@mui/material/colors';

/**
 * Returns the appropriate Material-UI color for a given priority level
 * Uses exhaustive type checking to ensure all priority cases are handled
 * @param priority - The priority level to get color for
 * @returns A Material-UI color string (e.g., "#2e7d32" for green)
 */
function getPriorityColor(priority: Priority): string {
  switch (priority) {
    case PRIORITY.LOW:
      return green[800];
    case PRIORITY.MEDIUM:
      return yellow[800];
    case PRIORITY.HIGH:
      return red[800];
    default: {
      // This helps catch missing cases at compile time!
      const exhaustiveCheck: never = priority;
      console.warn(`Unknown priority: ${exhaustiveCheck}`);
      return grey[800];
    }
  }
}

/**
 * Props for the PriorityAvatar component
 */
interface PriorityAvatarProps {
  /**
   * Priority level determining the avatar's background color
   * - PRIORITY.LOW (1): Green (#2e7d32)
   * - PRIORITY.MEDIUM (2): Yellow (#f9a825)
   * - PRIORITY.HIGH (3): Red (#c62828)
   * - Unknown values: Grey (fallback)
   */
  priority: Priority;
}

/**
 * Displays a colored, rounded avatar showing a priority number
 * Color automatically changes based on priority level for visual distinction
 * @example
 * ```tsx
 * <PriorityAvatar priority={PRIORITY.HIGH} />
 * ```
 */
export default function PriorityAvatar({ priority }: PriorityAvatarProps) {
  return (
    <Avatar
      sx={{ bgcolor: getPriorityColor(priority) }}
      variant="rounded"
    >
      {priority}
    </Avatar>
  );
}
