import { Heart } from 'lucide-react';
import styles from './character-card.module.css';


export function CharacterCard({ character, isFav, onToggleFav, onClick }) {
  const { name, status, species, image, location } = character;

  const handleFavClick = (e) => {
    e.stopPropagation();
    onToggleFav(character);
  };

  
  const statusClass = status.toLowerCase() === 'alive' ? styles.alive :
                      status.toLowerCase() === 'dead' ? styles.dead : 
                      styles.unknown;

  return (
    <article className={styles.card} onClick={onClick}>
      <div className={styles.imgContainer}>
        <img 
          src={image} 
          alt={name} 
          className={styles.img} 
          loading="lazy" 
        />
        <button
          type="button"
          className={`${styles.favBtn} ${isFav ? styles.isFav : ''}`}
          onClick={handleFavClick}
          aria-label={isFav ? `Quitar a ${name} de favoritos` : `Agregar a ${name} a favoritos`}
        >
          <Heart size={18} fill={isFav ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        
        <div className={styles.statusRow}>
          <span className={`${styles.statusDot} ${statusClass}`}></span>
          <span>
            {status === 'Alive' ? 'Vivo' : status === 'Dead' ? 'Muerto' : 'Desconocido'} - {species}
          </span>
        </div>

        <div className={styles.infoLabel}>Última ubicación conocida:</div>
        <div className={styles.infoVal}>{location?.name === 'unknown' ? 'Desconocida' : location?.name}</div>
      </div>
    </article>
  );
}
