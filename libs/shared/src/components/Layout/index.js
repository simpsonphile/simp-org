import Footer from './Footer';
import Header from './Header';
import styles from './styles.module.scss';

const Layout = ({ children, logo }) => {
  return (
    <div className={styles.Layout}>
      <Header>{logo}</Header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
