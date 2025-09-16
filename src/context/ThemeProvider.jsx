import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const LIGHT = {
  name: 'light',
  background: '#fcf8f3',
  text: '#4B2E19',
  surface: '#e8ded1',
  deep: '#a0816c',
  boxShadow: '0 2px 8px rgba(160, 129, 108, 0.15)',
  cardBtnBg: '#a0816c',
  cardBtnText: '#fff',
  cardBtnOutline: '#a0816c',
  cardTagNovo: '#4caf50',
  cardTagPromo: '#e57373',
};
const DARK = {
  name: 'dark',
  background: '#1f1f1f',
  text: '#fff',
  surface: '#303030',
  deep: '#f9fafb',
  boxShadow: '0 2px 8px rgba(35, 41, 70, 0.40)',
  cardBtnBg: '#fff',
  cardBtnText: '#000',
  cardBtnOutline: '#e8ded1',
  cardTagNovo: '#4caf50',
  cardTagPromo: '#e57373',
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' ? DARK : LIGHT;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme.name);
    document.body.classList.toggle('dark', theme.name === 'dark');
    document.body.style.background = theme.background;
    document.body.style.color = theme.text;
    // CSS variables for card/button colors
    document.body.style.setProperty('--card-bg', theme.surface);
    document.body.style.setProperty('--card-text', theme.text);
    document.body.style.setProperty('--card-shadow', theme.boxShadow);
    document.body.style.setProperty('--card-border', theme.deep);
    document.body.style.setProperty('--card-btn-bg', theme.cardBtnBg);
    document.body.style.setProperty('--card-btn-text', theme.cardBtnText);
    document.body.style.setProperty('--card-btn-outline', theme.cardBtnOutline);
    document.body.style.setProperty('--card-tag-novo', theme.cardTagNovo);
    document.body.style.setProperty('--card-tag-promo', theme.cardTagPromo);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? DARK : LIGHT);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <style>
        {`body { 
        transition: background 0.3s, color 0.3s; 
        }`}
      </style>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
