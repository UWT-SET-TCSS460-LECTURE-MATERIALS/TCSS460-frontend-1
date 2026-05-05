// note: This file uses incorrect patterns with regards to state in React. This is on purpose for teaching reasons.

import { useState, useReducer, MouseEvent } from 'react';

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
  const [count, setCount] = useState(0);
  // const [, forceUpdate] = useReducer((x) => x + 1, 0); // used JUST in this example to force a re-render. DO NOT USE!

  // let c = 0;
  console.log(`Rendered! Count is: ${count}`);

  const handelIncrement = (e: MouseEvent<HTMLButtonElement>) => {
    // c = c + 1;
    setCount(count + 1);
    console.log(`Button was clicked! Count is: ${count}`);
    // console.dir(e); // what does the event look like?
    // console.log(e.currentTarget); // what does the currentTarget look like?
    // forceUpdate(); // used JUST in this example to force a re-render. DO NOT USE!
  };

  const handelReset = () => {
    console.log(`Reset button was clicked! Count was: ${count}`);
    setCount(0);
    // c = 0;
    // forceUpdate(); // used JUST in this example to force a re-render. DO NOT USE!
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
