import Link from 'next/link';
import styles from './index.module.scss';

const divideUrlToParts = (slug) =>
  slug
    .split('/')
    .filter((e) => !!e)
    .reduce(
      (prev, cur, i) => {
        return [
          ...prev,
          {
            label: cur,
            url: i === 0 ? '/' + cur : prev[prev.length - 1].url + '/' + cur,
          },
        ];
      },
      [{ label: 'posts', url: '/' }]
    );

const BreadCrumbs = ({ slug }) => {
  return (
    <div className={styles.BreadCrumbs}>
      {divideUrlToParts(slug).map((part) => (
        <Link key={part.url} href={part.url}>
          {part.label}
        </Link>
      ))}
    </div>
  );
};

export default BreadCrumbs;
