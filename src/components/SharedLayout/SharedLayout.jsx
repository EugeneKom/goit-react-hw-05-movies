import { Outlet } from 'react-router-dom';
import { CustomStyledLink, HeaderWrapper } from './SharedLayout.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <div>
      <HeaderWrapper>
        <nav>
          <CustomStyledLink to="/">HOME</CustomStyledLink>
          <CustomStyledLink to="/movies">MOVIES</CustomStyledLink>
        </nav>
      </HeaderWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
