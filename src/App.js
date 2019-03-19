import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = "AIzaSyAQPgviXaIWsadOMzPEai-vYj-CJvNLRlA";

// AIzaSyBBMHsp2o9y-LybYuLwYMaE-afeLOnYHRw
// AIzaSyAQPgviXaIWsadOMzPEai-vYj-CJvNLRlA

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('VS Code');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 400)

    return (
      <div className="App">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} 
        />
      </div>
    );
  }
}

export default App;
