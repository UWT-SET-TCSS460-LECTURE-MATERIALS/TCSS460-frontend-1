import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import { Message } from '@/types/message.types';
import PriorityAvatar from '@/components/priority-avatar';

/**
 * Props for the MessageListItem component
 */
interface MessageListItemProps {
  /**
   * Message data to display
   * Must include priority level, sender name, and message content
   */
  message: Message;

  /**
   * Callback invoked when the delete button is clicked
   * @param name - The name of the message sender (used as the message identifier)
   * @example
   * ```tsx
   * const handleDelete = (name: string) => {
   *   setMessages(messages.filter(msg => msg.name !== name));
   * };
   * ```
   */
  onDelete: (name: string) => void;
}

/**
 * Displays a single message in a list with priority avatar and delete action
 * Shows the message content as primary text and sender name as secondary text (blue)
 * Includes a delete button on the right side of the item
 * @example
 * ```tsx
 * <MessageListItem
 *   message={{ priority: Priority.HIGH, name: "John", message: "Hello!" }}
 *   onDelete={(name) => console.log(`Deleting ${name}`)}
 * />
 * ```
 */
export default function MessageListItem({ message, onDelete }: MessageListItemProps) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          sx={{ color: 'secondary.main' }}
          onClick={() => onDelete(message.name)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <PriorityAvatar priority={message.priority} />
      </ListItemAvatar>
      <ListItemText
        primary={message.message}
        secondary={message.name}
        slotProps={{
          secondary: {
            sx: { color: 'secondary' },
          },
        }}
      />
    </ListItem>
  );
}
