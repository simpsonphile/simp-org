import Link from 'next/link';
import LayoutInner from './LayoutInner';
import LayoutHeader from './LayoutHeader';
import ThemeSwitch from '../ThemeSwitch';
import StickyTop from '../StickyTop';
import Search from '../Search';
import AddCommentButton from '../AddCommentButton';
import Logo from '../Logo';
import NewsletterModal from '../Modals/Newsletter';

const Layout = ({ children, links }) => {
  return (
    <LayoutInner>
      <LayoutHeader>
        <Logo />
        <Link href="/">All posts</Link>
      </LayoutHeader>
      {children}
      {/* <LayoutFooter /> */}
      <StickyTop>
        <ThemeSwitch />
        <AddCommentButton />
        <Search links={links} />
      </StickyTop>
      <NewsletterModal />
    </LayoutInner>
  );
};

export default Layout;
