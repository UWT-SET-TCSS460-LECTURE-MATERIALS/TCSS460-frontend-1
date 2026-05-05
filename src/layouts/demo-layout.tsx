import { AppBar, Box, Divider, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import MemoryIcon from '@mui/icons-material/Memory';

import { Link, Outlet } from 'react-router-dom';

import Logo from '@/components/logo';

export default function DemoLayout() {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <AppBar
        position="static"
        sx={{ bgcolor: 'primary.dark' }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Home">
              <Link
                to="/"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
                    First Next.js Example
                  </Typography>
                </Box>
              </Link>
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
              <Link
                to="/state"
                style={{ color: 'inherit' }}
              >
                <IconButton
                  color="inherit"
                  aria-label="State Demo"
                >
                  <MemoryIcon />
                </IconButton>
              </Link>
            </Tooltip>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: 'white', mx: 1 }}
            />

            <Tooltip title="View Messages">
              <Link
                to="/messages/view"
                style={{ color: 'inherit' }}
              >
                <IconButton
                  color="inherit"
                  aria-label="View Messages"
                >
                  <EmailIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Send Message">
              <Link
                to="/messages/send"
                style={{ color: 'inherit' }}
              >
                <IconButton
                  color="inherit"
                  aria-label="Send Message"
                >
                  <SendIcon />
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </section>
  );
}
