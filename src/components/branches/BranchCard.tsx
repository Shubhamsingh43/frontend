import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Collapse,
  Box,
  Grid,
  Chip,
  useTheme,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Security as SecurityIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

interface Tool {
  name: string;
  description: string;
  features: string[];
  benefits: string[];
}

interface Branch {
  title: string;
  description: string;
  tools: {
    [key: string]: Tool;
  };
}

interface BranchCardProps {
  branch: Branch;
  icon: React.ReactNode;
}

const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BranchCard: React.FC<BranchCardProps> = ({ branch, icon }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              mr: 2,
            }}
          >
            {icon}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                mb: 1,
              }}
            >
              {t(`branches.${branch.title}.title`)}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 2,
              }}
            >
              {t(`branches.${branch.title}.description`)}
            </Typography>
          </Box>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                mb: 2,
              }}
            >
              {t('branches.tools')}
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(branch.tools).map(([key, tool]) => (
                <Grid item xs={12} md={6} key={key}>
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      height: '100%',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.primary.main,
                          mb: 1,
                        }}
                      >
                        {tool.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          mb: 2,
                        }}
                      >
                        {tool.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: theme.palette.primary.main,
                            mb: 1,
                          }}
                        >
                          {t('branches.features')}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {tool.features.map((feature, index) => (
                            <Chip
                              key={index}
                              label={feature}
                              size="small"
                              sx={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                '&:hover': {
                                  background: 'rgba(255, 255, 255, 0.2)',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: theme.palette.primary.main,
                            mb: 1,
                          }}
                        >
                          {t('branches.benefits')}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {tool.benefits.map((benefit, index) => (
                            <Chip
                              key={index}
                              label={benefit}
                              size="small"
                              sx={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                '&:hover': {
                                  background: 'rgba(255, 255, 255, 0.2)',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default BranchCard; 