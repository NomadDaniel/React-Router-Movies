import React from 'react';
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    
    {props.list.map(movie => (
    <NavLink to={`/movies/${movie.id}`} activeStyle={{fontWeight: "bold", color: "green", border: "2px solid pink"}}>
      <span className="saved-movie">{movie.title}</span>
    </NavLink>
    ))}
    <NavLink to="/"><div className="home-button">Home</div></NavLink>
  </div>
);

export default SavedList;
