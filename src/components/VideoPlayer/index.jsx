import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const VideoPlayer = props => {
  const {videoId} = props;
  let screenWidth = 640;
  let screenHeight = 360;
  if (window.screen.width > 1600) {
      screenWidth = 1280;
      screenHeight = 720;
  }
  return (
    <div className={styles.container}>
      <iframe id="player"
              type="text/html"
              width={`${screenWidth}`}
              height={`${screenHeight}`}
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
