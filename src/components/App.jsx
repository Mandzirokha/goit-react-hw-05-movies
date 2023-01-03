import { Route, Routes } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { Home } from '../pages/Home';
import { Container, Header, Link } from './App.styled';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movies/:movieId" element={<MovieDetails />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Container>
  );
};
