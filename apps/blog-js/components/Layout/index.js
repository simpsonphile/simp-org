import Link from 'next/link';
import LayoutInner from './LayoutInner';
import LayoutHeader from './LayoutHeader';
import ThemeSwitch from '../ThemeSwitch';
import StickyTop from '../StickyTop';
import Search from '../Search';
import AddCommentButton from '../AddCommentButton';
import Tooltip from '../Tooltip';
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
        <Tooltip content="switch theme">
          <ThemeSwitch />
        </Tooltip>
        <Tooltip content="Add comment">
          <AddCommentButton />
        </Tooltip>
        <Tooltip content="search">
          <Search links={links} />
        </Tooltip>
      </StickyTop>
      <NewsletterModal />
    </LayoutInner>
  );
};

export default Layout;
