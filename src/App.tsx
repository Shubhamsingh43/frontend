import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import CybersecurityBranches from './pages/CybersecurityBranches';
import GamifiedLearning from './pages/GamifiedLearning';
import Leaderboard from './pages/Leaderboard';
import Achievements from './pages/Achievements';
import News from './pages/News';
import Forum from './pages/Forum';

const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a1929 0%, #001e3c 100%)' }}>
        <Navbar />
        <Box component="main" sx={{ pt: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/branches" element={<CybersecurityBranches />} />
            <Route path="/learning" element={<GamifiedLearning />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/news" element={<News />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App; 