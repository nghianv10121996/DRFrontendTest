import React from 'react';
import "./styles.scss";

interface ISearch {
  placeholder?: string;
  value?: string;
  onChangeText: (t: string) => void;
}

const SearchInput: React.FC<ISearch> = (props) => {
  const { placeholder, value, onChangeText } = props;
  return (
    <div className="search">
      <img className='search__icon' src="/images/search.svg" />
      <input
        type='text'
        className="search__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value.trim())}
        name='search-text'
      />
    </div>
  )
}

export default SearchInput;