import { AppBar, Box, Divider, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import MemoryIcon from '@mui/icons-material/Memory';

import { Link, Outlet } from 'react-router-dom';

import Logo from '@/components/Logo';
import { APP_CONFIG } from '@/config';

export default function DemoShell() {
  return (
    <section>
      <AppBar
        position="static"
        sx={{ bgcolor: 'primary.dark' }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Home">
              <Box
                component={Link}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Logo
                  variant="full"
                  width={35}
                  height={35}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                  {APP_CONFIG.app.title}
                </Typography>
              </Box>
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Tooltip title="State Demo">
              <IconButton
                component={Link}
                to="/state"
                color="inherit"
                aria-label="State Demo"
              >
                <MemoryIcon />
              </IconButton>
            </Tooltip>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: 'white', mx: 1 }}
            />

            <Tooltip title="View Messages">
              <IconButton
                component={Link}
                to="/messages/view"
                color="inherit"
                aria-label="View Messages"
              >
                <EmailIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Send Message">
              <IconButton
                component={Link}
                to="/messages/send"
                color="inherit"
                aria-label="Send Message"
              >
                <SendIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </section>
  );
}
