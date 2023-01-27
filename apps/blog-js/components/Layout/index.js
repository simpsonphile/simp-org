import Link from "next/link";
import LayoutInner from "./LayoutInner";
import LayoutHeader from "./LayoutHeader";
import ThemeSwitch from "../ThemeSwitch";
import StickyTop from "../StickyTop";
import Search from "../Search";
import AddCommentButton from "../AddCommentButton";
import Tooltip from "../Tooltip";

const Layout = ({children, links}) => {
  return (
    <LayoutInner>
      <LayoutHeader>
        <Link href="/">Home</Link>
        <Link href="/posts">Go back to posts</Link>
        <Search links={links}/>
      </LayoutHeader>
      {children}
      <footer></footer>
      <StickyTop>
        <Tooltip content="switch theme">
          <ThemeSwitch />
        </Tooltip>
        <Tooltip content="Add comment">
          <AddCommentButton />
        </Tooltip>
      </StickyTop>
    </LayoutInner>
  )
}

export default Layout;