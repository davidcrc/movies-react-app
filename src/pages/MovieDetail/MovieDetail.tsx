import React, { ReactElement, useEffect, useState } from 'react';
import movie from '../../api/movie.json';
import styles from './MovieDetail.module.css';
import { API_BASE_PATH_IMG } from '../../utils/constants';
import defaultImage from '../../assets/default-image.png';
import { Rating } from '@material-ui/lab';
import { useParams } from 'react-router-dom';
import { getMovieByIdApi } from '../../api/movies';
import Modalvideo from './ModalVideo';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';

interface Props {
  movie?: any;
}

interface MovieImageProps {
  posterPath: string;
  title: string;
}

function MovieImage(props: MovieImageProps) {
  const { posterPath, title } = props;
  const imageUrl = posterPath
    ? `${API_BASE_PATH_IMG}${posterPath}`
    : defaultImage;

  return (
    <img
      src={imageUrl}
      alt={title}
      className={`${styles.col} ${styles.movieImage}`}
    />
  );
}

interface MovieTrailerProps {
  setOpenModal: any;
}
function MovieTrailer(props: MovieTrailerProps) {
  const { setOpenModal } = props;

  return (
    <div className={styles.detailsContainer}>
      <IconButton aria-label="delete" onClick={() => setOpenModal(true)} >
        <PlayCircleFilled className={styles.buttonPlay} />
      </IconButton>
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
      <p className="title">{movie.title}</p>
      <p className={styles.genre}>
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
  // console.log('media', media, voteCount, voteAverage);
  return (
    <div className={styles.movieRating}>
      {/* <p>Rating stars</p> */}
      <Rating
        name="Rating Label"
        value={media}
        precision={0.1}
        style={{ marginRight: 10 }}
        readOnly
      />
      <p>{media}</p>
      <p>{voteCount}</p>
    </div>
  );
}

// VIEW: Aqui configuro los parametros q se pasan en Route
interface ParamTypes {
  moviedId: string;
}
export default function MovieDetail(props: Props): ReactElement {
  // console.log('parama', props);
  const [movie, setMovie] = useState<any>(null);
  const { moviedId } = useParams<ParamTypes>();
  // const { title, poster_path, overview, release_date } = movie;
  const [openModal, setOpenModal] = useState(false);

  const getMovieById = async (moviedId: string) => {
    const response = await getMovieByIdApi(moviedId);
    console.log('res by id', response);
    setMovie(response);
  };

  useEffect(() => {
    getMovieById(moviedId);
  }, []);

  if (!movie) return <div></div>;

  return (
    <>
      <div className={styles.detailsContainer}>
        {/* <div className={styles.col}> */}
        <MovieImage posterPath={movie.poster_path} title={movie.title} />
        {/* </div> */}
        <div className={`${styles.col} ${styles.movideDetails}`}>
          <MovieTrailer setOpenModal={setOpenModal} />
          <MovieTitle movie={movie} />
          <MovieRating
            voteCount={movie.vote_count}
            voteAverage={movie.vote_average}
          />
          <div style={{ color: '#8697a5' }}>
            <p>{movie.overview}</p>
            <p>Lanzamiento: {movie.release_date}</p>
          </div>
        </div>
      </div>
      {openModal && <Modalvideo
        openModal={openModal}
        setOpenModal={setOpenModal}
        videoId={movie.id}
      />}
    </>
  );
}

// export default MovieDetail;
