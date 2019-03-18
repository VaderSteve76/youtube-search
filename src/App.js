import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar';

const API_KEY = "AIzaSyBBMHsp2o9y-LybYuLwYMaE-afeLOnYHRw";


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
