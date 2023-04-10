import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 15px;

  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
`;

export const CustomStyledLink = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: red;
  }
  &:hover {
    color: blueviolet;
  }
`;
