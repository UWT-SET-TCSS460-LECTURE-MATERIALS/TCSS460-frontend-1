import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { defaultTheme } from '@/theme';
import HomePage from '@/views/home/HomePage';
import DemoShell from '@/components/DemoShell';
import State from '@/views/state/State';
import MessageList from '@/views/messages/MessageList';
import ComingSoon from '@/views/ComingSoon';
import NotFound from '@/views/NotFound';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route element={<DemoShell />}>
            <Route
              path="/state"
              element={<State />}
            />
            <Route
              path="/messages/view"
              element={<MessageList />}
            />
            <Route
              path="/messages/send"
              element={<ComingSoon />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
