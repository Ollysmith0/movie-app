import styled from '@emotion/styled';

export const Container = styled.div`
  $movieContentBg: #ddd;

  @mixin scaleUp {
    opacity: 1;
    transform: scale(1);
  }
  @mixin scaleDown($delay: 0) {
    transform: scale(0);
    opacity: 0;
    transition: transform 0.24s ease-in $delay, opacity 0.3s linear;
  }
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }

  .movies__container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 95%;
    padding-top: 30px;
    justify-content: space-around;
    color: #ddd;
  }

  .swiper {
    height: 800px;
  }

  .swiper-slide {
    max-height: 800px;
    width: 400px;
  }
`;
