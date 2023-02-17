import dynamic from 'next/dynamic';
// import Select from 'react-select';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/router';
import ButtonClean from '../ButtonClean';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import styles from './index.module.scss';
import classNames from 'classnames';
import { useId } from 'react';

const Select = dynamic(() => import('react-select'));

const Search = ({ links }) => {
  const selectId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const ref = useRef();
  const selectRef = useRef();

  const onChange = (option) => {
    setIsOpen(false);
    router.push(option.value);
  };

  const onBtnClick = () => {
    setIsOpen((prev) => !prev);
  };

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className={styles.Search}>
      <ButtonClean
        className={styles.SearchButton}
        aria-label="show search input"
        onClick={onBtnClick}
      >
        <BiSearch size={32} />
      </ButtonClean>
      <div
        className={classNames(styles.SearchSelectWrapper, {
          [styles.SearchSelectWrapperVisible]: isOpen,
        })}
      >
        {isOpen && (
          <Select
            ref={selectRef}
            instanceId={selectId}
            className={styles.SearchSelect}
            classNamePrefix="SearchSelect"
            placeholder="Search post"
            components={{ DropdownIndicator: null, IndicatorSeparator: null }}
            options={links.map((link) => ({ label: link, value: link }))}
            unstyled
            isSearchable
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
