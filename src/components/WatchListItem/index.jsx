import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const WatchListItem = props => {
  const {video, play, deleteVideo} = props
  return (
    <div className={styles.container}>
      <a className={styles.title} role="presentation" onClick={() => play(video.id)}>{video.title}</a>
      <button className={styles.button} onClick={() => deleteVideo(video.id)}>Delete</button>
    </div>
  );
};

WatchListItem.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  deleteVideo: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
};

export default WatchListItem;
