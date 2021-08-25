import { ReactElement } from 'react';
import Home from './pages/Home/Home';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail/MovieDetail';

interface Props {
  from: string;
}

export default function App(props: Props): ReactElement {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>

        {/* <Link to="/">HOME</Link>
        <br></br>
        <Link to="/movie">Movie</Link> */}
      </header>
      <main>
        <Switch>
          <Route exact path="/movie/:moviedId">
            <MovieDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
