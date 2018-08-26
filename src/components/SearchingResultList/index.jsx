import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import SearchingResultItem from '../SearchingResultItem';

const SearchingResultList = props => {
  const {resultVideoList, play} = props;
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {resultVideoList.map(result => (
          <li key={result.etag} className={styles.listItem}>
            <SearchingResultItem result={result} play={play}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

SearchingResultList.propTypes = {
  resultVideoList: PropTypes.arrayOf(
    PropTypes.shape({
      etag: PropTypes.string.isRequired,
      id: PropTypes.shape({
        channelId: PropTypes.string,
        kind: PropTypes.string,
        videoId: PropTypes.string.isRequired,
      }).isRequired,
      kind: PropTypes.string,
      snippet: PropTypes.shape({
        channelId: PropTypes.string,
        channelTitle: PropTypes.string,
        description: PropTypes.string,
        liveBroadcastContent: PropTypes.string,
        publishedAt: PropTypes.string,
        title: PropTypes.string,
        thumbnails: PropTypes.shape({
          default: PropTypes.shape({
            url: PropTypes.string,
          }),
          high: PropTypes.shape({
            url: PropTypes.string,
          }),
          medium: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      }).isRequired,
    }).isRequired,
  ).isRequired,
  play: PropTypes.func.isRequired,
};

SearchingResultList.defaultProps = {
  channelId: '',
  kind: '',
  videoId: '',
  channelTitle: '',
  description: '',
  liveBroadcastContent: '',
  publishedAt: '',
  title: '',
  default: null,
  high: null,
  medium: null,
};

export default SearchingResultList;
