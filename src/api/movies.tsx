import { API_HOST, API_KEY, API_LANG } from '../utils/constants';

export async function getNewsMovieApi() {
  const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${API_LANG}`;
  // console.log('la url', url);

  // Utilizando async await
  const response = await fetch(url);
  return await response.json();
}

export async function getMovieByIdApi(idMovie: string) {
  const url = `${API_HOST}/movie/${idMovie}?api_key=${API_KEY}&language=${API_LANG}`;
  // console.log('la url', url);

  // Utilizando async await
  const response = await fetch(url);
  return await response.json();
}

export async function getVideoMovieApi(idMovie: number) {
  const url = `${API_HOST}/movie/${idMovie}/videos?api_key=${API_KEY}&language=${API_LANG}`;
  // console.log('la url', url);

  // Utilizando async await
  const response = await fetch(url);
  return await response.json();
}

export async function searchMoviesApi(search: string) {
  const url = `${API_HOST}/search/movie?api_key=${API_KEY}&language=${API_LANG}&query=${search}`;
  console.log('la url', url);

  // Utilizando async await
  const response = await fetch(url);
  return await response.json();
}
