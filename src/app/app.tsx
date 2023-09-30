import { MAIN_ROUTES } from './routes/routes';

import { Route, Routes } from 'react-router-dom';
import { withProviders } from './providers';

import './styles/style.css'

const App = () => {
  return (
    <Routes>
      {MAIN_ROUTES.map(({ path, main }) => (
        <Route path={path} element={main()} key={path} />
      ))}
    </Routes>
  );
};

export default withProviders(App);
