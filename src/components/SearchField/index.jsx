import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css'


const SearchField = props => {
  const { handleFilter } = props;
  const onSearchInput = event => handleFilter (event.target.value);

  return (
    <form className={styles.search}>
      <input className={styles.input} type="text" placeholder="Search on YouTube" onChange={onSearchInput}/>
    </form>
  );
};

SearchField.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default SearchField;
