import { Open_Sans } from '@next/font/google';
import 'normalize.css';
import '/index.scss';

const openSans = Open_Sans({ weight: ['400'], subsets: ['latin'] });

function CustomApp({ Component, pageProps }) {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
export default CustomApp;
