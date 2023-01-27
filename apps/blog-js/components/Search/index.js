import styles from './index.module.scss';
import { components } from 'react-select';
import Select from 'react-select/async';
import { BiSearch } from "react-icons/bi";
import { useRouter } from 'next/router'
import jsSearch from 'js-search';

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <BiSearch />
    </components.DropdownIndicator>
  );
};

const Search = ({links}) => {
  const router = useRouter();

  const loadOptions = (inputValue) => {
    
  }

  return (
    <Select 
      loadOptions={}
      className={styles.Search}
      placeholder="Search post"
      isSearchable
      components={{ DropdownIndicator, IndicatorSeparator: null }}
      // options={links.map((link) => ({ label: link, value: link }))}
      onChange={(option) => router.push('/posts/' + option.value)}
    />
  )
}

export default Search;