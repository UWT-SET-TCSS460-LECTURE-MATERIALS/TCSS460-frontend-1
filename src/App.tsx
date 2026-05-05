import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { defaultTheme } from '@/theme';
import HomePage from '@/views/home/home-page';
import DemoLayout from '@/layouts/demo-layout';
import State from '@/views/state/state';
import MessageList from '@/views/messages/message-list';
import ComingSoon from '@/views/maintenance/coming-soon';
import Error404 from '@/views/maintenance/404';

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
          <Route element={<DemoLayout />}>
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
            element={<Error404 />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
