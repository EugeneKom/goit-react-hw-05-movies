import styled from 'styled-components';

export const AuthorThumb = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(100px, auto);
  list-style-type: none;
  flex-wrap: wrap;
  h3 {
    margin: 5px 0px;
  }
`;
