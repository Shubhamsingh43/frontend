import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import {
  Security as SecurityIcon,
  School as SchoolIcon,
  Group as GroupIcon,
  Build as BuildIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    {
      icon: <SecurityIcon fontSize="large" />,
      title: t('home.features.interactive'),
      description: 'Learn cybersecurity through hands-on exercises and real-world scenarios.',
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: t('home.features.gamified'),
      description: 'Earn points, badges, and climb the leaderboard as you learn.',
    },
    {
      icon: <GroupIcon fontSize="large" />,
      title: t('home.features.community'),
      description: 'Join a community of cybersecurity enthusiasts and experts.',
    },
    {
      icon: <BuildIcon fontSize="large" />,
      title: t('home.features.practical'),
      description: 'Develop practical skills with industry-standard tools and techniques.',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          pt: 8,
          pb: 6,
          textAlign: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          color="primary"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 4,
          }}
        >
          {t('home.title')}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          sx={{
            mb: 4,
          }}
        >
          {t('home.subtitle')}
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/learning')}
          >
            {t('home.cta.start')}
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/branches')}
          >
            {t('home.cta.explore')}
          </Button>
        </Box>
      </Box>

      <Box sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          color="primary"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 6,
          }}
        >
          {t('home.features.title')}
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 