import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
   
    return localStorage.getItem('theme') || 'light';
  });

 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
};

export default useDarkMode;
