import React from 'react';
import { Box, Typography } from '@mui/material';

const News: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Cybersecurity News
      </Typography>
      <Typography variant="body1">
        Coming soon: Stay updated with the latest cybersecurity news and trends.
      </Typography>
    </Box>
  );
};

export default News; 