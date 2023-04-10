import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  h2 {
    text-align: center;
  }
  ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }
  a {
    width: 130px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid;
    border-radius: 15px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    color: blueviolet;
  }
`;

export const MovieInfo = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  & > ul {
  }
`;
