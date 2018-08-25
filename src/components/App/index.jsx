/* eslint-disable no-param-reassign */
import React, {Component} from 'react';
import axios from "axios";
import styles from './styles.css'
import {API, baseUrl, maxResultsAmount} from '../../api/config';
import SearchField from '../SearchField';
import SearchingResultList from '../SearchingResultList';

export default class App extends Component {
  state = {
    filter: '',
    resultVideoList: [],
  };

  componentDidMount() {
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

  handleFilter = (value) => {
    this.setState({
      filter: value,
    })
  };

  handleMovieSearch = (evt) => {
    evt.preventDefault();
    const {filter} = this.state;
    if (filter === null || filter.trim() === "") return;
    this.getVideoListByKeyword(filter);
  };

  isSearchResultsVisible = () => !!this.state.resultVideoList.length;

  render() {
    const {filter, resultVideoList} = this.state;
    return (
      <div className={styles.container}>
        <SearchField filter={filter} handleFilter={this.handleFilter} handleMovieSearch={this.handleMovieSearch}/>
        { this.isSearchResultsVisible && <SearchingResultList resultVideoList={resultVideoList}/> }
      </div>
    );
  }
}
