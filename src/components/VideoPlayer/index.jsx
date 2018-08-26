import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const VideoPlayer = props => {
  const {videoId} = props;
  return (
    <div className={styles.container}>
      <iframe id="player"
              type="text/html"
              width="1280"
              height="720"
              title="Youtube video player"
              src={`http://www.youtube.com/embed/${videoId}?loop=0&autoplay=1`}
              frameBorder="0"
              autoPlay
              allowFullScreen
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoPlayer;
