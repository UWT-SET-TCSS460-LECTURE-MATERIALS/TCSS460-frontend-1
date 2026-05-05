import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';

import { Priority, PRIORITY_LEVELS } from '@/types/priority.types';
import PriorityAvatar from './priority-avatar';

/**
 * Props for the PrioritySelector component
 */
interface PrioritySelectorProps {
  /**
   * Currently selected priority value
   * Use 0 to indicate "show all" or no selection
   */
  initialValue: Priority | 0;

  /**
   * Callback fired when a priority toggle button is clicked
   * @param event - The mouse event from the Material-UI ToggleButton
   * @param newPriority - The newly selected priority level (1, 2, or 3)
   * @example
   * ```tsx
   * const handleClick = (event, priority) => {
   *   setPriority(priority);
   * };
   * ```
   */
  onClick: (event: React.MouseEvent<HTMLElement>, newPriority: number) => void;
}

/**
 * A horizontal toggle button group for selecting message priority levels
 * Displays three priority options (Low, Medium, High) as colored avatars
 * Only one priority can be selected at a time (exclusive selection)
 * @example
 * ```tsx
 * <PrioritySelector
 *   initialValue={priority}
 *   onClick={(event, newPriority) => setPriority(newPriority)}
 * />
 * ```
 */
export default function PrioritySelector({ initialValue, onClick }: PrioritySelectorProps) {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
    >
      <ToggleButtonGroup
        exclusive
        value={initialValue}
        onChange={onClick}
      >
        {PRIORITY_LEVELS.map((level) => (
          <ToggleButton
            key={level}
            value={level}
          >
            <PriorityAvatar priority={level} />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}
