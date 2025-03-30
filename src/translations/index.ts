import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: {
        title: 'Welcome to Dheera',
        subtitle: 'Your Gateway to Cybersecurity Learning'
      },
      nav: {
        home: 'Home',
        branches: 'Branches',
        learning: 'Learning',
        leaderboard: 'Leaderboard',
        achievements: 'Achievements',
        news: 'News',
        forum: 'Forum'
      }
    }
  },
  hi: {
    translation: {
      home: {
        title: 'धीरा में आपका स्वागत है',
        subtitle: 'साइबर सुरक्षा सीखने का आपका द्वार'
      },
      nav: {
        home: 'होम',
        branches: 'शाखाएं',
        learning: 'सीखना',
        leaderboard: 'लीडरबोर्ड',
        achievements: 'उपलब्धियां',
        news: 'समाचार',
        forum: 'फोरम'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 