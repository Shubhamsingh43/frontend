import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        mt: 8, 
        mb: 6, 
        textAlign: 'center',
        color: 'white'
      }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('home.title')}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {t('home.subtitle')}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 