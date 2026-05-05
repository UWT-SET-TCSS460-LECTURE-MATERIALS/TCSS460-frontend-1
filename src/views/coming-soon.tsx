import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function ComingSoon() {
  return (
    <Grid
      container
      spacing={10}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', pt: 1.5, pb: 1, overflow: 'hidden' }}
    >
      <Grid size={12}>
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="/assets/images/under-construction.svg"
            alt="Under Construction"
            width={400}
            height={300}
          />
          <Typography variant="h1">Coming Soon!</Typography>
          <Typography
            color="text.secondary"
            align="center"
            sx={{ width: { xs: '73%', sm: '61%' } }}
          >
            The page you are looking for will be created shortly.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
