import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import WatchListItem from "../WatchListItem";

const WatchList = props => {
  const {watchList, play, deleteVideo} = props
  return (
    <div className={styles.container}>
      <h2>Watch History</h2>
      <div className={styles.watchList}>
        {watchList.length === 0
          ? <div>Watchlist is empty</div>
          : <ul>
            {watchList.map(video => (
              <li key={video.id} className={styles.listItem}>
                <WatchListItem video={video} play={play} deleteVideo={deleteVideo}/>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

WatchList.propTypes = {
  watchList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,).isRequired,
  play: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired,
};

export default WatchList;
