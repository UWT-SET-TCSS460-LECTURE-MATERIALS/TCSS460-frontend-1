// note: This file INTENTIONALLY uses incorrect patterns for managing state in React.
// It exists to demonstrate, in lecture, WHY useState is necessary.
// The correct version is in .state.correct.tsx.

import { useReducer, MouseEvent } from 'react';

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
  // INCORRECT pattern #1: useReducer used purely as a "force re-render" escape hatch.
  // This is a code smell — it papers over the real problem (c is not React-managed).
  // We declare it here to demo what a beginner might reach for; calling it does NOT fix
  // the bug below (see the comment near `let c = 0`).
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  // INCORRECT pattern #2: a plain `let` variable in the component body.
  // Two compounding problems:
  //   (a) React has no idea `c` exists, so changing it does NOT trigger a re-render.
  //   (b) Every render re-executes this line, RESETTING c back to 0.
  // So even if we forced a re-render with forceUpdate(), `c` would reset to 0 on the
  // new render — there's no way to make this approach "stick."
  let c = 0;
  console.log(`Rendered! Count is: ${c}`);

  const handelIncrement = (e: MouseEvent<HTMLButtonElement>) => {
    // The mutation succeeds in THIS render's closure, but because React was never
    // told state changed, the JSX (which already captured c = 0) doesn't repaint.
    // The console log will show 1, 2, 3... but the screen stays on 0.
    c = c + 1;
    console.log(`Button was clicked! Count is: ${c}`);
    // console.dir(e); // what does the event look like?
    // console.log(e.currentTarget); // what does the currentTarget look like?
    // forceUpdate(); // would trigger a re-render — but `let c = 0` would then reset c to 0!
  };

  const handelReset = () => {
    console.log(`Reset button was clicked! Count was: ${c}`);
    // Effectively a no-op: c is already 0 on every fresh render.
    c = 0;
    // forceUpdate();
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
          {/* Counter receives c at render time. Since the rendered c is always 0
              (and React never re-renders on `c = c + 1`), the UI is stuck on 0. */}
          <Counter count={c} />
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
