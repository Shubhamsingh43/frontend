import React from 'react';
import { Box, Typography } from '@mui/material';

const Leaderboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Leaderboard
      </Typography>
      <Typography variant="body1">
        Coming soon: See how you rank against other cybersecurity learners.
      </Typography>
    </Box>
  );
};

export default Leaderboard; 