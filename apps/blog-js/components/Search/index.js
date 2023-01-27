import styles from './index.module.scss';
import Select, { components } from 'react-select';
import { BiSearch } from "react-icons/bi";
import { useRouter } from 'next/router'

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <BiSearch />
    </components.DropdownIndicator>
  );
};

const Search = ({links}) => {
  const router = useRouter();

  return (
    <Select 
      className={styles.Search}
      placeholder="Search post"
      isSearchable
      components={{ DropdownIndicator, IndicatorSeparator: null }}
      options={links.map((link) => ({ label: link, value: link }))}
      onChange={(option) => router.push('/posts/' + option.value)}
    />
  )
}

export default Search;