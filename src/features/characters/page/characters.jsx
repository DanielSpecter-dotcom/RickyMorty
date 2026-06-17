import { useState } from 'react';
import { useCharacters } from '../hooks/use-characters';
import { useFavorites } from '../../favorites/hooks/use-favorites';
import { Filters } from '../components/filters/filters';
import { CharacterCard } from '../components/character-card/character-card';
import { Pagination } from '../components/pagination/pagination';
import { CharacterDetailModal } from '../components/character-detail-modal/character-detail-modal';
import styles from './characters.module.css';


export function CharactersPage() {
  const {
    name,
    status,
    gender,
    currentPage,
    characters,
    totalPages,
    loading,
    error,
    handleNameChange,
    handleStatusChange,
    handleGenderChange,
    handleClearFilters,
    handlePageChange
  } = useCharacters();

  const { toggleFavorite, isFavorite } = useFavorites();
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Personajes</h1>
        <p>Explora y descubre todos los personajes de la serie. Filtra por nombre, estado o género.</p>
      </section>

      <Filters
        name={name}
        setName={handleNameChange}
        status={status}
        setStatus={handleStatusChange}
        gender={gender}
        setGender={handleGenderChange}
        onClear={handleClearFilters}
      />

      {loading ? (
        <div className={styles.grid}>
          {Array.from({ length: 8 }).map((_, idx) => (
            <div className={styles.skeletonCard} key={idx} aria-hidden="true">
              <div className={styles.skeletonImg}></div>
              <div style={{ padding: '1.25rem' }}>
                <div className={styles.skeletonText} style={{ width: '80%' }}></div>
                <div className={styles.skeletonText} style={{ width: '40%', marginTop: '0.75rem' }}></div>
                <div className={styles.skeletonText} style={{ width: '90%', marginTop: '1.5rem' }}></div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <section className={styles.errorContainer}>
          <h3>Error de Conexión</h3>
          <p>{error}</p>
          <button 
            type="button" 
            className={styles.btnRetry} 
            onClick={() => handlePageChange(currentPage)}
          >
            Reintentar
          </button>
        </section>
      ) : characters.length === 0 ? (
        <section className={styles.emptyContainer}>
          <h3>Sin Resultados</h3>
          <p>No se encontraron personajes que coincidan con la búsqueda actual.</p>
          <button 
            type="button" 
            className={styles.btnRetry} 
            onClick={handleClearFilters}
          >
            Restablecer filtros
          </button>
        </section>
      ) : (
        <>
          <div className={styles.grid}>
            {characters.map((char) => (
              <CharacterCard
                key={char.id}
                character={char}
                isFav={isFavorite(char.id)}
                onToggleFav={toggleFavorite}
                onClick={() => setSelectedCharacter(char)}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
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
