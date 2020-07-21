import React, { Component } from "react";
import Data from "./Data";
export default class MoviesList extends Component {
  render() {
    return (
      <ul className="movies">
        {Data.map((movie) => (
          <li key={movie.id}>
            <div className="movie">
              <h1>{movie.name}</h1>
              <h2>{movie.type}</h2>
              <h4>{movie.description}</h4>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
