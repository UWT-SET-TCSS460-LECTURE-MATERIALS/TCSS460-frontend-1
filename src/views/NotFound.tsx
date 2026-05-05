import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { APP_CONFIG } from '@/config';

import HomeIcon from '@mui/icons-material/Home';

export default function NotFound() {
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
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ color: 'secondary.dark' }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
        >
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </Typography>

        <Button
          component={Link}
          to={APP_CONFIG.routes.home}
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          sx={{ bgcolor: 'secondary.dark' }}
        >
          Return Home
        </Button>

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
          {APP_CONFIG.course.semester}
        </Typography>
      </Box>
    </Container>
  );
}
