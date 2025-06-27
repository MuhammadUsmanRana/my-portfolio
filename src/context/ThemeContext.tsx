import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeContextType, ThemeType } from '../components/types/type';


const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');

    // Check if user has dark mode preference
    if (savedTheme) {
      return savedTheme as ThemeType;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;