import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieList from  './components/movie-list';

ReactDOM.render(
  <React.StrictMode>
    <MovieList />
  </React.StrictMode>,
  document.getElementById('root')
);
