import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { APP_CONFIG } from '@/config';

import MemoryIcon from '@mui/icons-material/Memory';
import EmailIcon from '@mui/icons-material/Email';
import Logo from '@/components/Logo';

export default function HomePage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Logo
          variant="full"
          width={180}
          height={180}
          sx={{ mb: 3 }}
        />

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
        >
          {APP_CONFIG.app.title}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          {APP_CONFIG.app.description}
        </Typography>

        <Stack
          spacing={2}
          direction="column"
          sx={{ width: '100%', maxWidth: 300 }}
        >
          <Button
            component={Link}
            to={APP_CONFIG.routes.state}
            variant="contained"
            fullWidth
            size="large"
            startIcon={<MemoryIcon />}
            sx={{ bgcolor: 'secondary.dark' }}
          >
            State Demo
          </Button>

          <Button
            component={Link}
            to={APP_CONFIG.routes.messagesView}
            variant="contained"
            fullWidth
            size="large"
            startIcon={<EmailIcon />}
            color="primary"
          >
            Messages Demo
          </Button>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 4 }}
        >
          {APP_CONFIG.course.university} • {APP_CONFIG.course.school}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {APP_CONFIG.course.code} • {APP_CONFIG.course.semester}
        </Typography>
      </Box>
    </Container>
  );
}
