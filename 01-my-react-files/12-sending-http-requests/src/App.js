import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // // Using fetch() method from the Fetch API to send a GET request to an external API (Star Wars API)
  // function fetchMoviesHandler() {
  //   // fetch() sends a GET request by default
  //   fetch('https://swapi.dev/api/films/').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         releaseDate: movieData.release_date,
  //         openingText: movieData.opening_crawl
  //       }
  //     });
  //     // Trigger a state update with the new data
  //     setMovies(transformedMovies);
  //   });
  // }

  // Using async...await
  async function fetchMoviesHandler() {
    setIsLoading(true);
    // fetch() sends a GET request by default
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    const transformedMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        releaseDate: movieData.release_date,
        openingText: movieData.opening_crawl
      }
    });
    // Trigger a state update with the new data
    setMovies(transformedMovies);
    setIsLoading(false);
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies! <span role="img" aria-label="Ho no!">🤭</span></p>}
        {isLoading && <p>Loading movies...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
