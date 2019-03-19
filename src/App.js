import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = "AIzaSyBBMHsp2o9y-LybYuLwYMaE-afeLOnYHRw";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
    YTSearch({key: API_KEY, term: 'VS Code' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
