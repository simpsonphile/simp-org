import styles from './index.module.scss';
import Select, { components } from 'react-select';
import { BiSearch } from "react-icons/bi";
import { useRouter } from 'next/router'
import ButtonClean from '../ButtonClean';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

// const DropdownIndicator = props => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <BiSearch />
//     </components.DropdownIndicator>
//   );
// };

const Search = ({links}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const ref = useRef();

  const onChange = (option) => {
    setIsOpen(false);
    router.push('/posts/' + option.value)
  }

  useClickAway(ref, () => setIsOpen(false))

  return (
    <div className={styles.Search} ref={ref}>
      <ButtonClean className={styles.SearchButton} onClick={() => setIsOpen(prev => !prev)}>
          <BiSearch />
      </ButtonClean>
      {isOpen && (
        <div className={styles.SearchSelectWrapper}>
          <Select 
            className={styles.SearchSelect}
            placeholder="Search post"
            isSearchable
            components={{ DropdownIndicator: null, IndicatorSeparator: null }}
            options={links.map((link) => ({ label: link, value: link }))}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  )
}

export default Search;