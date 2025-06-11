import { RouterProvider } from 'react-router-dom';
import router from './store';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
