import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import movies from '../../api/movies.json';
import Movie from '../../components/Movie';
import styles from './MoviesGrid.module.css';
import { getNewsMovieApi } from '../../api/movies';
interface Props {}

export default function Home(props: Props): ReactElement {
  const [movies, setMovies] = useState<Array<any>>([]);

  const getNewsMovies = async () => {
    const response = await getNewsMovieApi();
    // console.log("res", response.results);
    
    setMovies(response.results);
  };

  useEffect(() => {
    getNewsMovies();
  }, []);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie, index) => (
        <Link to={`/movie/${movie.id}`} key={index}>
          <Movie key={movie.id} movie={movie} />
        </Link>
      ))}
    </ul>
  );
}
