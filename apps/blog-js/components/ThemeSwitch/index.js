import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { BiMoon, BiSun } from 'react-icons/bi';
import styles from './index.module.scss';
import useBrowserTheme from '/hooks/useBrowserTheme';
import ButtonClean from '../ButtonClean';

const ThemeSwitch = () => {
  const [currentTheme, setCurrentTheme] = useState('theme');
  const [lsTheme, setLSTheme] = useLocalStorage('theme', null);
  const browserTheme = useBrowserTheme();

  const setTheme = (newTheme) => {
    setCurrentTheme(newTheme);
    setLSTheme(newTheme);
    document.querySelector('html').dataset.theme = newTheme;
  };

  const onClick = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
      setCurrentTheme('light');
    } else {
      setTheme('dark');
      setCurrentTheme('dark');
    }
  };

  useEffect(() => {
    if (typeof window === 'object') {
      console.log(lsTheme, browserTheme);
      setTheme(lsTheme || browserTheme);
    }
  }, []);

  return (
    <ButtonClean
      className={styles.ThemeSwitch}
      type="button"
      aria-label="switch theme"
      onClick={onClick}
    >
      {currentTheme === 'dark' ? <BiMoon size={24} /> : <BiSun size={24} />}
    </ButtonClean>
  );
};

export default ThemeSwitch;
