import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchAppartments } from '../redux/appartments/operations';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Appartments = lazy(() => import('../pages/Appartments'));
const AppartDetails = lazy(() => import('../pages/AppartDetails'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppartments());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="appartments" element={<Appartments />} />
        <Route path="appartments/:appartId" element={<AppartDetails />} />
      </Route>
    </Routes>
  );
};
