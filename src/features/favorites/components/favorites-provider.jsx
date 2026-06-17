import { useState, useEffect } from 'react';
import { FavoritesContext } from '../hooks/use-favorites';

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('rickmorty_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error al cargar favoritos', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('rickmorty_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Error al guardar favoritos', e);
    }
  }, [favorites]);

  const toggleFavorite = (character) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === character.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== character.id);
      } else {
        return [...prev, character];
      }
    });
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
