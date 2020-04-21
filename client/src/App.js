import React, { useState } from 'react';
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <BrowserRouter>
    <div>
      <SavedList list={savedList} />
      <Route exact to="/" component={MovieList} />
      <Route exact to="/movies/:id" component={Movie}/>
    </div>
    </BrowserRouter>
  );
};

export default App;
