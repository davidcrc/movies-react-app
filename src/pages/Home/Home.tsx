import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import movies from '../../api/movies.json';
import Movie from '../../components/Movie';
import styles from './MoviesGrid.module.css';
import { getNewsMovieApi } from '../../api/movies';
import Spinner from '../../components/Spinner';
interface Props {}

export default function Home(props: Props): ReactElement {
  const [movies, setMovies] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewsMovies = async () => {
    const response = await getNewsMovieApi();
    // console.log("res", response.results);
    
    setMovies(response.results);
    setIsLoading(false);

  };

  useEffect(() => {
    setIsLoading(true);
    getNewsMovies();
  }, []);

  if (isLoading) return <Spinner />;

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
