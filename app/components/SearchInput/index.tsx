"use client"

import { useState } from 'react';
import styles from './styles.module.css';
import SearchIcon from './SearchIcon.svg';

type Props = {
  mainColor: string;
  onSearch: (value: string) => void;
}

export const SearchInput = ({ mainColor, onSearch } : Props) => {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleInputFocus = () => {
    setFocused(true);
  };
  const handleInputBlur = () => {
    setFocused(false);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') onSearch(searchValue);
  };

  return (
    <div 
      className={styles.container}
      style={{ borderColor: focused ? mainColor : '#fff' }}>
      <div 
        className={styles.button}
        onClick={() => onSearch(searchValue)}>
          <SearchIcon color={mainColor} />
        </div>
      <input 
        type="text" 
        className={styles.input} 
        placeholder='Digite o nome do produto'
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)} />
    </div>
  )
};