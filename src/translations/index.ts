import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      branches: 'Branches',
      learning: 'Learning',
      leaderboard: 'Leaderboard',
      achievements: 'Achievements',
      news: 'News',
      forum: 'Forum',
      login: 'Login',
      signup: 'Sign Up',
      language: 'Language',
    },
    home: {
      title: 'Welcome to Dheera',
      subtitle: 'Your Gateway to Cybersecurity Learning'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      branches: 'शाखाएं',
      learning: 'सीखना',
      leaderboard: 'लीडरबोर्ड',
      achievements: 'उपलब्धियां',
      news: 'समाचार',
      forum: 'फोरम',
      login: 'लॉगिन',
      signup: 'साइन अप',
      language: 'भाषा',
    },
    home: {
      title: 'धीरा में आपका स्वागत है',
      subtitle: 'साइबर सुरक्षा सीखने का आपका द्वार'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 