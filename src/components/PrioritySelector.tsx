import type { MouseEvent } from 'react';
import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';

import { PRIORITY_LEVELS, type Priority } from '@/types/priority';
import PriorityAvatar from './PriorityAvatar';

/**
 * Props for the PrioritySelector component
 */
interface PrioritySelectorProps {
  /**
   * Currently selected priority value, or null for "show all" / no selection
   * (matches MUI's exclusive ToggleButtonGroup deselect behavior).
   */
  initialValue: Priority | null;

  /**
   * Callback fired when a priority toggle button is clicked
   * @param event - The mouse event from the Material-UI ToggleButton
   * @param newPriority - The newly selected priority level, or null when the user
   *   clicks the currently-selected button (MUI's exclusive-deselect behavior)
   * @example
   * ```tsx
   * const handleClick = (event, priority) => {
   *   setPriority(priority);
   * };
   * ```
   */
  onClick: (event: MouseEvent<HTMLElement>, newPriority: Priority | null) => void;
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
