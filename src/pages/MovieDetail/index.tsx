import { Movie } from 'models/movie';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export interface IMovieDetailProps {
  movieDetail: Movie;
}

export function MovieDetail({ movieDetail }: IMovieDetailProps) {
  const {
    original_language,
    title,
    overview,
    vote_average,
    vote_count,
    poster_path,
    release_date,
    adult,
  } = movieDetail;

  return (
    <Container>
      <div
        id="mainContainer"
        style={{ backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMAGE_URL}${poster_path})` }}
      ></div>
      <div
        className="container"
        style={{ backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMAGE_URL}${poster_path})` }}
      >
        <div id="left">
          <h1>{title}</h1>
          <div id="info">
            <div>Adult: {(adult ? 'true' : 'false') || <Skeleton />}</div>
            <div>Original Language: {original_language || <Skeleton />}</div>
            <div>Release Date: {release_date || <Skeleton />}</div>
            <div>IMDB: {vote_average || <Skeleton />}</div>
            <div>IMDB Count: {vote_count || <Skeleton />}</div>
          </div>
        </div>
        <div id="right">
          {overview}
          <div id="trailer">
            <i className="fa fa-play" aria-hidden="true"></i>
            <h4>WATCH TRAILER</h4>
          </div>
          <div id="back">
            <Link to="/">Back to Movie List</Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
