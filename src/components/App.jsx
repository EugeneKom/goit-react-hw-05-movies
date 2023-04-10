import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import SharedLayout from './SharedLayout/SharedLayout';

const HomeComponent = lazy(() => import('pages/Home'));
const MoviesComponent = lazy(() => import('pages/Movies'));
const MovieDetailsComponent = lazy(() => import('./MovieDetails/MovieDetails'));
const CastComponent = lazy(() => import('./Cast/Cast'));
const ReviewsComponent = lazy(() => import('./MovieReviews/Reviews'));

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomeComponent />}></Route>
            <Route path="movies" element={<MoviesComponent />}></Route>
            <Route path="movies/:moviesId" element={<MovieDetailsComponent />}>
              <Route path="cast" element={<CastComponent />} />
              <Route path="reviews" element={<ReviewsComponent />} />
            </Route>
            <Route path="*" element={<HomeComponent />}></Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
};
