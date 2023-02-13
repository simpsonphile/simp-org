import { useEffect, useState } from 'react';

const useBrowserTheme = () => {
  const [theme, setTheme] = useState(null);

  const callback = (e) => {
    setTheme(e.matches ? 'dark' : 'light');
  };

  useEffect(() => {
    if (typeof window === 'object') {
      const matcher = window.matchMedia('(prefers-color-scheme: dark)');
      matcher.addEventListener('change', callback);
      setTheme(matcher.matches ? 'dark' : 'light');
    }

    return () => {
      if (typeof window === 'object') {
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeEventListener('change', callback);
      }
    };
  }, []);

  return theme;
};

export default useBrowserTheme;
