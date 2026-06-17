import { RouterProvider } from 'react-router';
import { router } from './router/router';
import { FavoritesProvider } from './features/favorites/components/favorites-provider';
import './common/styles/global.css';

export function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}
