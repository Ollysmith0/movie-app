import styled from '@emotion/styled';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #mainContainer {
    height: 100vh;
    background-size: cover;
    display: block;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1;
  }
  div.container {
    display: flex;
    width: 50rem;
    height: 46.875rem;
    background-size: cover;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
    filter: brightness(0.9);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 9999;
  }
  #left {
    width: 50%;
    font-family: 'Raleway', sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
    }
  }
  #info {
    padding-top: 15px;
    padding-left: 16px;
    font-size: 14px;
    font-family: 'Exo', sans-serif;

    div {
      margin: 1em;
      font-size: 20px;
    }
  }
  #container {
    margin: 20px;
    width: 50px;
    height: 50px;
  }
  #rating {
    display: flex;
    padding-left: 25px;
  }
  #rating > h3 {
    padding-top: 35px;
    font-size: 14px;
  }
  #right {
    width: 50%;
    font-size: 18px;
    font-family: 'Raleway Dots', sans-serif;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #trailer {
    margin-top: 50px;
    margin-left: 20px;
    border: 3px solid white;
    color: white;
    border-radius: 1.2em;
    width: 70%;
    padding: 6px;
    padding-left: 15px;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
  }
  #trailer {
    h4 {
      padding-left: 10px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bolder;
      font-family: 'Raleway', sans-serif;
    }
  }

  #trailer:hover {
    color: #1abc9c;
    background-color: white;
    width: 80%;
    transition: all 0.3s ease;
  }

  #back {
    margin-top: 10px;
    margin-left: 20px;
    border: 3px solid white;
    border-radius: 1.2em;
    width: 70%;
    padding: 6px;
    padding-left: 15px;
    display: flex;
    justify-content: space-around;
    cursor: pointer;

    a {
      color: white;
      font-size: 18px;
      font-weight: bolder;
      text-decoration: none;

      &:hover {
        color: #1abc9c;
      }
    }
    
    &:hover {
      background-color: white;
      width: 80%;
      transition: all 0.3s ease;
    }
  }
`;