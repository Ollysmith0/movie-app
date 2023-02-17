import { Movie } from 'models/movie';
import Skeleton from 'react-loading-skeleton';

import { Container } from './styles';

export function Card({ title, overview, vote_average, vote_count, poster_path }: Movie) {
  return (
    <Container>
      <div
        className="movie"
        style={{ backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMAGE_URL}${poster_path})` }}
      >
        <h2 className="movie__title">{title || <Skeleton />}</h2>
        <span className="movie__description">{overview || <Skeleton count={4} />}</span>
        <div className="movie__imdb">
          <a href="/#" className="movie__imdb-button" target="blank">
            Vote Average: {vote_average || <Skeleton />}
          </a>
          <a href="/#" className="movie__imdb-button" target="blank">
            Vote Count: {vote_count || <Skeleton />}
          </a>
        </div>
      </div>
    </Container>
  );
}
