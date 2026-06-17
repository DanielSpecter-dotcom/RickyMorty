import { createBrowserRouter } from 'react-router';
import { ShopLayout } from '../common/layouts/shop-layout';
import { Characters } from '../app/characters/characters';
import { Favorites } from '../app/favorites/favorites';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: ShopLayout,
    children: [
      {
        index: true,
        Component: Characters,
      },
      {
        path: 'favorites',
        Component: Favorites,
      },
    ],
  },
]);
