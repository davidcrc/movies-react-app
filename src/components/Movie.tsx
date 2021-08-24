import { ReactElement } from 'react';

interface Props {
  movie: any;
}

export default function Movie(props: Props): ReactElement {
  const { title, poster_path } = props.movie;
  const imageUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  return (
    <li>
      <img src={imageUrl} alt={title} />
      <div>{title}</div>
    </li>
  );
}
