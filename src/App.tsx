import { ReactElement } from 'react';
import MoviesGrid from './screens/HomeScreen';

interface Props {
  from: string;
}

export default function App(props: Props): ReactElement {
  return (
    <div>
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        Peliculas
        <MoviesGrid />
      </main>
    </div>
  );
}
