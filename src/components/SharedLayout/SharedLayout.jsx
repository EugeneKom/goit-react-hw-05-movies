import { Outlet } from 'react-router-dom';
import { CustomStyledLink, HeaderWrapper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <HeaderWrapper>
        <nav>
          <CustomStyledLink to="/">HOME</CustomStyledLink>
          <CustomStyledLink to="/movies">MOVIES</CustomStyledLink>
        </nav>
      </HeaderWrapper>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
