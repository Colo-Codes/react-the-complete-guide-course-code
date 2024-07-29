import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  // SECTION Getting data
  // Using async...await
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // fetch() sends a GET request by default
      // const response = await fetch('https://swapi.dev/api/films/');
      // const response = await fetch('https://swapi.dev/api/films/ERROR');
      // const response = await fetch('https://swapi.dev/api/filmsERROR');
      const response = await fetch('https://react-http-test-d8033-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // const transformedMovies = data.results.map(movieData => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     releaseDate: movieData.release_date,
      //     openingText: movieData.opening_crawl
      //   }
      // });

      // Trigger a state update with the new data
      // setMovies(transformedMovies);
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []); // The useCallback hook has no external dependencies in this case

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // SECTION Sending data to the database
  async function addMovieHandler(movie) {
    console.log(movie);
    const response = await fetch('https://react-http-test-d8033-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
      // We define the 'fetch' method to POST to send data to the database
      method: 'POST',
      // We need to send a JSON object, not a JavaScript object
      body: JSON.stringify(movie),
      // Headers for REST APIs
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    console.log(data);
  }

  // Handling messages to user
  let content = <p>Found no movies! <span role="img" aria-label="Ho no!">🤭</span></p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error} <span role="img" aria-label="Ho no!">😱</span></p>;
  }

  if (isLoading) {
    content = <p>Loading movies... <span role="img" aria-label="Loading">🍿</span></p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies! <span role="img" aria-label="Ho no!">🤭</span></p>}
        {isLoading && <p>Loading movies...</p>}
        {!isLoading && error && <p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
