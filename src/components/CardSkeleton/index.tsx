import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Movie } from 'models/movie';
import { Container } from './styles';

export function CardSkeleton({ poster_path }: Movie) {
  return (
    <Container
      className="movie"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMAGE_URL}${poster_path})`,
        width: '500px',
        height: '750px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="movie__title">
        <Skeleton />
      </h2>

      <span className="movie__description">
        <Skeleton count={10} />
      </span>

      <div className="movie__imdb">
        <a href="/#" className="movie__imdb-button" target="blank">
          Vote Average: <Skeleton />
        </a>
        <a href="/#" className="movie__imdb-button" target="blank">
          Vote Count: <Skeleton />
        </a>
      </div>
    </Container>
  );
}
