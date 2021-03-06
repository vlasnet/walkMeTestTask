/* eslint-disable no-param-reassign */
import React, {Component} from 'react';
import axios from "axios";
import debounce from 'lodash.debounce';
import isequal from 'lodash.isequal';
import styles from './styles.css'
import {API, baseUrl, maxResultsAmount} from '../../api/config';
import SearchField from '../SearchField';
import SearchingResultList from '../SearchingResultList';
import VideoPlayer from '../VideoPlayer';
import WatchList from "../WatchList";

export default class App extends Component {
  state = {
    filter: '',
    resultVideoList: [],
    currentVideoId: '',
    watchList: JSON.parse(localStorage.getItem('watchList')) || [],
  };

  componentDidUpdate(prevProps, prevState) {
    if(isequal(prevState.watchList, this.state.watchList)) return;
      localStorage.setItem('watchList', JSON.stringify(this.state.watchList));
  }

  getVideoListByKeyword = (keyWord) => {
    const searchRequestUrl = `${baseUrl}?q='${keyWord}'&part=snippet&maxResults=${maxResultsAmount}&key=${API}`
    axios
      .get(searchRequestUrl)
      .then(response =>
        this.setState({
          resultVideoList: response.data.items.filter(item => item.id.videoId),
        })
      )
      .catch(error => console.log(`Error while fetching searching results list: ${error}`));
  };

  setChosenVideoAsCurrent = (videoInfo) => {
    const { id } = videoInfo;
    this.play(id);
    if (this.isWatchlistHasThatVideo(id)) return;
    this.setState({
      watchList: [videoInfo, ...this.state.watchList],
    });
  };

  isWatchlistHasThatVideo = (videoId) => this.state.watchList.find(video => video.id === videoId) !== undefined;

  play = (id) => {
    this.setState({
      currentVideoId: id,
      resultVideoList: [],
      filter: '',
    });
  };

  handleFilter = debounce((value) => {
    this.setState({
      filter: value,
    })
    const {filter} = this.state;
    if (filter === null || filter.trim() === "") return;
    this.getVideoListByKeyword(filter);
  }, 250);

  deleteVideo = id => {
    this.setState(state => ({
      watchList: state.watchList.filter(video => video.id !== id)
    }));
  };

  isSearchResultsVisible = () => !!this.state.resultVideoList.length;

  render() {
    const {filter, resultVideoList, currentVideoId, watchList} = this.state;
    return (
      <div className={styles.container}>
        <SearchField filter={filter} handleFilter={this.handleFilter} handleMovieSearch={this.handleMovieSearch}/>
        { this.isSearchResultsVisible() && <SearchingResultList resultVideoList={resultVideoList} play={this.setChosenVideoAsCurrent}/> }
        <div className={styles.appBody}>
          <WatchList watchList={watchList} play={this.play} deleteVideo={this.deleteVideo}/>
          {currentVideoId && <VideoPlayer videoId={currentVideoId}/>}
        </div>
      </div>
    );
  }
}
