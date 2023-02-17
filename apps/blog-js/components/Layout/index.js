import LayoutInner from './LayoutInner';
import LayoutHeader from './LayoutHeader';
import ThemeSwitch from '../ThemeSwitch';
import StickyTop from '../StickyTop';
import Logo from '../Logo';

const Layout = ({ children }) => {
  return (
    <LayoutInner>
      <LayoutHeader>
        <Logo />
      </LayoutHeader>
      {children}
      <StickyTop>
        <ThemeSwitch />
      </StickyTop>
    </LayoutInner>
  );
};

export default Layout;
