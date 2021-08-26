import { ReactElement } from 'react';
import { API_BASE_PATH_IMG } from '../utils/constants';
import styles from './MovieCard.module.css';
import defaultImage from '../assets/default-image.png';

interface Props {
  movie: any;
}

export default function Movie(props: Props): ReactElement {
  const { title, poster_path } = props.movie;
  // const imageUrl = `${API_BASE_PATH_IMG}${poster_path}`;
  const imageUrl = poster_path
    ? `${API_BASE_PATH_IMG}${poster_path}`
    : defaultImage;

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
