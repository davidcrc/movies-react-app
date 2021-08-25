import React, { ReactElement } from 'react';
import movie from '../../api/movie.json';
import styles from './MovieDetail.module.css';
import { API_HOST } from '../../utils/constants';
import defaultImage from '../../assets/default-image.png'

interface Props {
  movie?: any;
}

interface MovieImageProps {
  posterPath: string;
  title: string;
}

function MovieImage(props: MovieImageProps) {
  const { posterPath, title } = props;  
  const imageUrl = posterPath ? `${API_HOST}${posterPath}` : defaultImage

  return (
    <img
      src={imageUrl}
      alt={title}
      className={`${styles.col} ${styles.movieImage}`}
    />
  );
}

interface MovieTrailerProps {
  setShowVideo: any;
}
function MovieTrailer(props: MovieTrailerProps) {
  const { setShowVideo } = props;

  return (
    <div className={styles.detailsContainer}>
      <button>Play to modal</button>
    </div>
  );
}

interface MovieTitleProps {
  movie: any;
}
function MovieTitle(props: MovieTitleProps) {
  const { movie } = props;
  return (
    <div>
      <p className="title" >{movie.title}</p>
      <p className={styles.genre} >
        {movie.genres
          .map((genre: any) => {
            return genre.name;
          })
          .join(', ')}
      </p>
    </div>
  );
}

interface MovieRatingProps {
  voteCount: number;
  voteAverage: number;
}
function MovieRating(props: MovieRatingProps) {
  const { voteCount, voteAverage } = props;
  const media = voteAverage / 2;

  return (
    <div className={styles.movieRating} >
      <p>Rating stars</p>
      <p>{media}</p>
      <p>{voteCount}</p>
    </div>
  );
}

function MovieDetail(props: Props): ReactElement {
  console.log('parama', props);
  const { title, poster_path, overview, release_date } = movie;
  // const imageUrl = `${API_HOST}${poster_path}`;

  return (
    <div className={styles.detailsContainer}>
      {/* <div className={styles.col}> */}
      <MovieImage posterPath={poster_path} title={title} />
      {/* </div> */}
      <div className={`${styles.col} ${styles.movideDetails}`}>
        <MovieTrailer setShowVideo={false} />
        <MovieTitle movie={movie} />
        <MovieRating voteCount={10} voteAverage={10} />
        <div style={{color: '#8697a5'}} >
          <p>{overview}</p>
          <p>Lanzamiento: {release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
