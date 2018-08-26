import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css'


const SearchField = props => {
  const { filter, handleFilter, handleMovieSearch } = props;
  const onSearchInput = event => handleFilter (event.target.value);

  return (
    <form className={styles.search} onSubmit={handleMovieSearch}>
      <input className={styles.input} type="text" placeholder="Search on YouTube" value={filter} onChange={onSearchInput}/>
    </form>
  );
};

SearchField.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleMovieSearch: PropTypes.func.isRequired,
};

export default SearchField;
