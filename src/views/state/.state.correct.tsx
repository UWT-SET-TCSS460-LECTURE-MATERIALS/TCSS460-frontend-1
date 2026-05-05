// note: This file shows the CORRECT pattern for managing state in React using the useState hook.
// Compare against .state.incorrect.tsx, which uses a plain `let` variable that React cannot track.

import { useState } from 'react';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function State() {
  // useState returns a tuple: [currentValue, setterFunction].
  // - `count` holds the current value for THIS render.
  // - `setCount` is how we tell React the value changed; calling it schedules a re-render
  //   with the new value.
  const [count, setCount] = useState(0);

  // This log proves the component re-renders when state changes — you'll see it
  // fire on every click, with an updated count.
  console.log(`Rendered! Count is: ${count}`);

  const handelIncrement = () => {
    // We never mutate `count` directly. Instead we call the setter with the new value,
    // which (a) tells React state changed, and (b) triggers a re-render where
    // `count` will hold the new value.
    setCount(count + 1);
    // Note: this log still shows the OLD count — `count` is a const captured by this
    // closure for the current render. The new value only appears on the NEXT render.
    console.log(`Button was clicked! Count is: ${count}`);
  };

  const handelReset = () => {
    console.log(`Reset button was clicked! Count was: ${count}`);
    setCount(0);
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title="Incrementor example"
          subheader="TCSS 460"
          slotProps={{
            subheader: {
              sx: { color: 'secondary.contrastText' },
            },
          }}
          sx={{
            bgcolor: 'secondary.dark',
            color: 'secondary.contrastText',
          }}
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary.dark"
          >
            The count currently is:
          </Typography>
          {/* Pass `count` down as a prop. The child re-renders whenever this value changes. */}
          <Counter count={count} />
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="Increment Action"
            sx={{
              color: 'secondary.dark',
            }}
            onClick={handelIncrement}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            aria-label="Reset Action"
            sx={{
              color: 'secondary.dark',
            }}
            onClick={handelReset}
          >
            <RestartAltIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

function Counter({ count }: { count: number }) {
  return (
    <Typography
      variant="body1"
      color="text.secondary.dark"
    >
      {count}
    </Typography>
  );
}
