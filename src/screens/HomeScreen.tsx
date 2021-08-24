import { ReactElement } from 'react';
import movies from '../api/movies.json';
import Movie from '../components/Movie';
import styles from './MoviesGrid.module.css';

interface Props {}

export default function MoviesGrid(props: Props): ReactElement {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
