import { ReactElement, useEffect, useState } from 'react';
import Movie from '../../components/Movie';
import styles from './MoviesGrid.module.css';
import { getNewsMovieApi, searchMoviesApi } from '../../api/movies';
import Spinner from '../../components/Spinner';
import Search from '../../components/Search';
import { useQuery } from '../../hooks/useQuery';
import { Link } from 'react-router-dom';

interface Props {}

export default function Home(props: Props): ReactElement {
  const [movies, setMovies] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [search, setSearch] = useState('')

  const query = useQuery();
  const search = query.get('search') ?? '';
  // console.log("mmmm",search)

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

  const searchMovies = async (search: string) => {
    const response = await searchMoviesApi(search);
    // console.log("res", response.results);
    setMovies(response.results);
    setIsLoading(false);
  };

  useEffect(() => {
    if (search !== '') {
      setIsLoading(true);
      searchMovies(search);
    } else getNewsMovies();
  }, [search]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Search />

      <ul className={styles.moviesGrid}>
        {movies.map((movie, index) => (
          <Link to={`/movie/${movie.id}`} key={index}>
            <Movie key={movie.id} movie={movie} />
          </Link>
        ))}
      </ul>
    </>
  );
}
