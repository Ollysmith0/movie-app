import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  form {
    margin: 50px;
  }
  
  input {
    outline: none;
  }

  input[type='search'] {
    -webkit-appearance: textfield;
    font-family: inherit;
    font-size: 100%;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none;
  }

  input[type='search'] {
    padding: 9px 10px 9px 32px;
    width: 55px;
    background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat
      9px center;
    border: solid 1px #ccc;
    border-radius: 10em;
    transition: all 0.5s;
  }

  input[type='search']:focus {
    width: 130px;
    background-color: #fff;
    border-color: #66cc75;
    box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  }
`;
