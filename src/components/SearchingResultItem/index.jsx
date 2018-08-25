import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const SearchingResultItem = props => {
  const {result} = props;
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={result.snippet.thumbnails.default.url} alt="Video thumbnail"/>
      </div>
      <div className={styles.title}>{result.snippet.title}</div>
      <button className={styles.play}>Play</button>
    </div>
  );
};

SearchingResultItem.propTypes = {
  result: PropTypes.shape({
    etag: PropTypes.string.isRequired,
    id: PropTypes.shape({
      channelId: PropTypes.string,
      kind: PropTypes.string,
      videoId: PropTypes.string,
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
};

export default SearchingResultItem;
