import React, { ReactElement, useState } from 'react';
import styles from './Search.module.css';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

export default function Search(): ReactElement {
  const [searchText, setSearchText] = useState('');
  const history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log('la busqueda', searchText);
    history.push(`/?search=${searchText}`);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={`${styles.searchBox}`}>
        <input
          type="text"
          className={`${styles.searchInput}`}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        {/* <button type="submit" className={`${styles.searchButton}`}>Buscar</button>
         */}
        <IconButton aria-label="search" onClick={handleSubmit}>
          <SearchIcon className={styles.searchButton} />
        </IconButton>
      </div>
    </form>
  );
}
