import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      
      <header><h1>Movies App</h1></header>
            
      <SavedList list={savedList} />
      
      <Switch>
        <Route path='/movies/:id'>
          <Movie addToSavedList={addToSavedList}/>
        </Route>

        <Route path='/'>
          <MovieList list={savedList} />
          
        </Route>
        
      </Switch>
            
    </div>
  );
};

export default App;
