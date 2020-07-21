import React, { Component } from "react";
import MoviesList from "./MoviesList";
import { Link, BrowserRouter } from "react-router-dom";

export default class Screen extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <header className="header">
            <div>
              <button>&#9776;</button>
              <Link to="/">Shab</Link>
            </div>
            <div>
              <Link>Wish List</Link>
              <Link>Sign In</Link>
            </div>
          </header>
          <main className="main">
            <MoviesList />
          </main>
          <footer className="footer">All rights are reserved</footer>
        </BrowserRouter>
      </div>
    );
  }
}
