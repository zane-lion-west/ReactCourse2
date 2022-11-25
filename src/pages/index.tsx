import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

/**
 * React Router Setup. Declare the routes here
 * @returns {JSX.Element}
 */

const Pages = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
