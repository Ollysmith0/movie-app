import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y } from 'swiper';

import movieAPi from 'axios-client/movieApi';
import { Movie } from 'models/movie';
import { Card, Footer, Header, SearchBar } from 'components';
import { Container } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';

interface MovieListProps {
  handleMovieDetail: (value: Movie) => void;
}

export function MovieList({ handleMovieDetail }: MovieListProps) {
  const [filter, setFilter] = useState<string>('now_playing');
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const handleFilter = (value: string) => {
    setFilter(value);
  };

  const handleSearchMovie = (value: string) => {
    if (!value) {
      movieAPi
        .get(`${filter}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then((res: any) => setMovies(res.results))
        .catch((err) => {
          console.log(err);
          navigate('/NotFound');
        });
    }
    const newMovieList = [...movies].filter((movie: Movie) => movie.title.includes(value));
    if (!newMovieList.length) {
      movieAPi
        .get(`${filter}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then((res: any) => setMovies(res.results))
        .catch((err) => {
          console.log(err);
          navigate('/NotFound');
        });
    } else {
      setMovies(newMovieList);
    }
  };

  useEffect(() => {
    movieAPi
      .get(`${filter}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((res: any) => setMovies(res.results))
      .catch((err) => {
        console.log(err);
        navigate('/NotFound');
      });
  }, [filter, navigate]);

  return (
    <Container>
      <Header />
      <SearchBar handleSearchMovie={handleSearchMovie} />
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {movies.map((movie: Movie) => (
          <SwiperSlide
            key={movie.id}
            onClick={() => {
              handleMovieDetail(movie);
              navigate('/moviedetail');
            }}
          >
            <Card {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Footer handleFilter={handleFilter} />
    </Container>
  );
}
