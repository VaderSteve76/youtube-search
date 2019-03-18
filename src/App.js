import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyBBMHsp2o9y-LybYuLwYMaE-afeLOnYHRw";

YTSearch({key: API_KEY, term: 'Lambda School' }, function(data) {
  console.log(data);
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
