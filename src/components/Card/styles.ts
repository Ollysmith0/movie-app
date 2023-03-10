import styled from '@emotion/styled';

export const Container = styled.div`
  .movie {
    cursor: pointer;
    color: white;
    margin: 5px;
    padding: 20px 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-blend-mode: color;
    width: 500px;
    height: 750px;
    box-shadow: 10px 10px 10px #111;
    transition: background-color 0.25s linear;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    background-size: cover;
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
      .movie__title,
      .movie__description,
      .movie__infos div,
      .movie__rating,
      .movie__imdb-button {
        @include scaleUp;
      }
    }
  }

  .movie__title {
    @include scaleDown;
    text-transform: uppercase;
  }

  .movie__description {
    max-height: 200px;
    @include scaleDown(0.05s);
  }

  .movie__imdb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: flex-end;
    padding: 0 10px;
  }

  .movie__imdb-button {
    width: 125px;
    height: 30px;
    border-radius: 5px;
    background-color: #ebba33;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-family: 'Oswald', sans-serif;
    font-size: 1.1em;
    font-weight: bold;
    @include scaleDown(0.4s);
  }
`;
