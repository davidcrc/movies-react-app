import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import movies from '../../api/movies.json';
import Movie from '../../components/Movie';
import styles from './MoviesGrid.module.css';

interface Props {}

export default function Home(props: Props): ReactElement {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie, index) => (
        <Link to={`/movie/${movie.id}`} key={index} >
          <Movie key={movie.id} movie={movie} />
        </Link>
      ))}
    </ul>
  );
}
