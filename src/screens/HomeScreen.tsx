import { ReactElement } from 'react';
import movies from '../api/movies.json';
import Movie from '../components/Movie';

interface Props {}

export default function MoviesGrid(props: Props): ReactElement {
  return (
    <ul>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
