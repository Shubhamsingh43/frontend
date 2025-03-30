import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setLanguage } from '../../store/slices/languageSlice';
import { toggleTheme } from '../../store/slices/themeSlice';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Select,
  FormControl,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Security as SecurityIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  School as SchoolIcon,
  EmojiEvents as EmojiEventsIcon,
  Star as StarIcon,
  Article as ArticleIcon,
  Forum as ForumIcon,
} from '@mui/icons-material';
import AuthModal from '../auth/AuthModal';
import { useTranslation } from 'react-i18next';

interface Page {
  title: string;
  path: string;
}

const pages: Page[] = [
  { title: 'home', path: '/' },
  { title: 'branches', path: '/branches' },
  { title: 'learning', path: '/learning' },
  { title: 'leaderboard', path: '/leaderboard' },
  { title: 'achievements', path: '/achievements' },
  { title: 'news', path: '/news' },
  { title: 'forum', path: '/forum' },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector((state: RootState) => state.language);
  const { isDarkMode } = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
    handleCloseLangMenu();
  };

  const handleAuthModalOpen = () => {
    setAuthModalOpen(true);
  };

  const handleAuthModalClose = () => {
    setAuthModalOpen(false);
  };

  const handleLogin = (email: string, password: string) => {
    // TODO: Implement login logic
    console.log('Login:', { email, password });
    handleAuthModalClose();
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // TODO: Implement signup logic
    console.log('Signup:', { name, email, password });
    handleAuthModalClose();
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: t('nav.home'), icon: <SecurityIcon />, path: '/' },
    { text: t('nav.branches'), icon: <SchoolIcon />, path: '/branches' },
    { text: t('nav.learning'), icon: <SchoolIcon />, path: '/learning' },
    { text: t('nav.leaderboard'), icon: <EmojiEventsIcon />, path: '/leaderboard' },
    { text: t('nav.achievements'), icon: <StarIcon />, path: '/achievements' },
    { text: t('nav.news'), icon: <ArticleIcon />, path: '/news' },
    { text: t('nav.forum'), icon: <ForumIcon />, path: '/forum' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          component={RouterLink}
          to={item.path}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DHEERA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page.path);
                  }}
                >
                  <Typography textAlign="center">{t(`nav.${page.title}`)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <SecurityIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DHEERA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.path);
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t(`nav.${page.title}`)}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <FormControl size="small">
              <Select
                value={currentLanguage}
                onChange={(event) => handleLanguageChange(event.target.value)}
                sx={{ color: 'white', '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="hi">हिंदी</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="outlined"
              color="inherit"
              onClick={handleAuthModalOpen}
            >
              {t('nav.login')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAuthModalOpen}
            >
              {t('nav.signup')}
            </Button>
          </Box>
        </Toolbar>
      </Container>

      <AuthModal
        open={authModalOpen}
        onClose={handleAuthModalClose}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 