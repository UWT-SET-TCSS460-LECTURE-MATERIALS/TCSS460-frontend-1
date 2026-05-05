import { Fragment, useState, type MouseEvent } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Divider, List } from '@mui/material';
import type { Priority } from '@/types/priority';
import { MOCK_MESSAGES } from './mock-data';
import PrioritySelector from '@/components/PrioritySelector';
import MessageListItem from '@/components/MessageListItem';

export default function MessageList() {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [priority, setPriority] = useState<Priority | null>(null);

  const handleDelete = (name: string) => {
    const alteredMessages = messages.filter((msg) => msg.name !== name);
    setMessages(alteredMessages);
  };

  const handlePriorityClick = (_event: MouseEvent<HTMLElement>, newPriority: Priority | null) =>
    setPriority(newPriority);

  return (
    <Container
      component="main"
      maxWidth="md"
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <EmailIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
        >
          Read Messages
        </Typography>
        <PrioritySelector
          initialValue={priority}
          onClick={handlePriorityClick}
        />
        <Box sx={{ mt: 1 }}>
          <List>
            {messages
              .filter((msg) => priority === null || priority === msg.priority)
              .map((msg, index, messages) => (
                <Fragment key={msg.id}>
                  <MessageListItem
                    message={msg}
                    onDelete={handleDelete}
                  />
                  {index < messages.length - 1 && (
                    <Divider
                      variant="middle"
                      component="li"
                    />
                  )}
                </Fragment>
              ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
}
