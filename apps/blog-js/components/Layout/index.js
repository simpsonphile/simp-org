import Link from 'next/link';
import LayoutInner from './LayoutInner';
import LayoutHeader from './LayoutHeader';
import ThemeSwitch from '../ThemeSwitch';
import StickyTop from '../StickyTop';
import Search from '../Search';
import Logo from '../Logo';

const Layout = ({ children, links }) => {
  return (
    <LayoutInner>
      <LayoutHeader>
        <Logo />
        <Link href="/">All posts</Link>
      </LayoutHeader>
      {children}
      <StickyTop>
        <ThemeSwitch />
        <Search links={links} />
      </StickyTop>
    </LayoutInner>
  );
};

export default Layout;
