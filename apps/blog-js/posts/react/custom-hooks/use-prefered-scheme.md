---
title: hook for preferred color scheme
description: this is advanced react context article
img: "/static/context-api.webp"
tags: 
  - react
  - context
  - state
---

```js
const useBrowserTheme = () => {
  const [theme, setTheme] = useState(null);

  const callback = e => {
    console.log('callback');
    console.log(e.matches);
    setTheme(e.matches ? 'dark' : 'light')
  }

  useEffect(() => {
    console.log('times');
    if (typeof window === 'object') {
      const matcher = window.matchMedia('(prefers-color-scheme: dark)');
      console.log('hmm');
      matcher.addEventListener('change', callback);
      console.log(matcher.matches);
      setTheme(matcher.matches ? 'dark' : 'light');
    }

    return () => {
      if (typeof window === 'object') {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', callback);
      }
    }
  }, []);

  return theme;
}
```