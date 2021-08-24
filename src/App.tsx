import { ReactElement } from 'react';
import MoviesGrid from './screens/HomeScreen';
import styles from './App.module.css';
interface Props {
  from: string;
}

export default function App(props: Props): ReactElement {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
