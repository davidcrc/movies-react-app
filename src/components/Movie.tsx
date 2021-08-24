import { ReactElement } from 'react';
import { API_HOST } from '../utils/constants';
import styles from './MovieCard.module.css';

interface Props {
  movie: any;
}

export default function Movie(props: Props): ReactElement {
  const { title, poster_path } = props.movie;
  const imageUrl = `${API_HOST}${poster_path}`;

  return (
    <li className={styles.movieCard}>
      <img
        width={230}
        height={345}
        src={imageUrl}
        alt={title}
        className={styles.movieImage}
      />
      <div>{title}</div>
    </li>
  );
}
