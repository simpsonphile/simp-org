import Link from "next/link";
import styles from './index.module.scss';

const divideUrlToParts = (slug) => slug.split('/').filter((e) => !!e).reduce((prev, cur) => {
    return [
      ...prev,
      {
        label: cur,
        url: prev[prev.length -1].url + '/' + cur,
      } 
    ]
  }, [{ label: 'home', url: '/' }, { label: 'posts', url: '/posts'}])


const BreadCrumbs = ({ slug }) => {
  return (
    <div className={styles.BreadCrumbs}>
      {divideUrlToParts(slug).map((part) => <Link key={part.href} href={part.url}>{part.label}</Link>)}
    </div>
  );
}

export default BreadCrumbs;
