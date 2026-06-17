import { useState } from 'react';
import { Link } from 'react-router';
import { useFavorites } from '../hooks/use-favorites';
import { CharacterCard } from '../../characters/components/character-card/character-card';
import { CharacterDetailModal } from '../../characters/components/character-detail-modal/character-detail-modal';
import styles from './favorites.module.css';


export function FavoritesPage() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const filteredFavorites = favorites.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Mis Favoritos</h1>
        <p>Administra y visualiza tu selección de personajes preferidos de Rick y Morty.</p>
      </section>

      {favorites.length > 0 && (
        <div className={styles.filterContainer}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className={styles.filterInput}
              placeholder="Buscar por nombre entre tus favoritos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      )}

      {favorites.length === 0 ? (
        <section className={styles.emptyContainer}>
          <h3>No hay personajes favoritos</h3>
          <p>Explora el catálogo principal y marca tus personajes favoritos usando el botón de corazón.</p>
          <Link to="/" className={styles.btnAction}>
            Ver catálogo de personajes
          </Link>
        </section>
      ) : filteredFavorites.length === 0 ? (
        <section className={styles.emptyContainer}>
          <h3>Sin coincidencias</h3>
          <p>No encontramos ningún favorito que coincida con "{searchTerm}".</p>
          <button 
            type="button" 
            className={styles.btnAction} 
            onClick={() => setSearchTerm('')}
          >
            Limpiar búsqueda
          </button>
        </section>
      ) : (
        <div className={styles.grid}>
          {filteredFavorites.map((char) => (
            <CharacterCard
              key={char.id}
              character={char}
              isFav={isFavorite(char.id)}
              onToggleFav={toggleFavorite}
              onClick={() => setSelectedCharacter(char)}
            />
          ))}
        </div>
      )}

      {selectedCharacter && (
        <CharacterDetailModal
          character={selectedCharacter}
          isFav={isFavorite(selectedCharacter.id)}
          onToggleFav={toggleFavorite}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}
