import { Route, Routes } from 'react-router-dom';
import AppartDetails from '../pages/AppartDetails';
import Appartments from '../pages/Appartments';
import Home from '../pages/Home'
import SharedLayout from './SharedLayout/SharedLayout';

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
