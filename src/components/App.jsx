import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Appartments = lazy(() => import('../pages/Appartments'));
const AppartDetails=lazy(()=>import('../pages/AppartDetails'))

export function App() {
  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>} />
        <Route path="appartments" element={<Appartments/>} />
        <Route path="appartments/:appartId" element={<AppartDetails />} />
      </Route>
    </Routes>
  );
}
