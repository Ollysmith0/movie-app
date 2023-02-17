import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import { ErrorPage, MovieDetail, MovieList, NotFound } from 'pages';
import { useState } from 'react';
import { Movie } from 'models/movie';

function App() {
  const [movieDetail, setMovieDetail] = useState<Movie>({
    id: 0,
    original_language: '',
    title: '',
    overview: '',
    vote_average: 0,
    vote_count: 0,
    poster_path: '',
    release_date: '',
    adult: false,
  });

  const handleMovieDetail = (value: Movie) => {
    setMovieDetail(value);
  };

  return (
    <div className="App">
      <SkeletonTheme baseColor="#999191" highlightColor="#444">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList handleMovieDetail={handleMovieDetail} />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="/MovieDetail" element={<MovieDetail movieDetail={movieDetail} />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
