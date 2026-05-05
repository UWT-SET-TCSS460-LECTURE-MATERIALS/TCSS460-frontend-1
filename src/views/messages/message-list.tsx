import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Divider, List } from '@mui/material';
import { Message } from '@/types/message.types';
import data from '@/utils/mock/data';
import PrioritySelector from '@/components/priority-selector';
import MessageListItem from '@/components/message-list-item';

export default function MessageList() {
  const [messages, setMessages] = React.useState(data.messages);
  const [priority, setPriority] = React.useState(0);

  const handleDelete = (name: string) => {
    const alteredMessages = messages.filter((msg) => msg.name !== name);
    setMessages(alteredMessages);
  };

  const handlePriorityClick = (event: React.MouseEvent<HTMLElement>, newPriority: number) =>
    setPriority(newPriority ?? 0);

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
              .filter((msg) => priority === 0 || priority === msg.priority)
              .map((msg, index, messages) => (
                <React.Fragment key={msg.id}>
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
                </React.Fragment>
              ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
}
