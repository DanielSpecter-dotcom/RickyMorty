import { useEffect } from 'react';
import { Heart, X } from 'lucide-react';
import styles from './character-detail-modal.module.css';


export function CharacterDetailModal({ character, isFav, onToggleFav, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!character) return null;

  const { name, image, status, species, gender, origin, location, episode } = character;

  const getEpisodeNumbers = () => {
    if (!episode || episode.length === 0) return 'Ninguno';
    
    const limit = 5;
    const items = episode.slice(0, limit).map((url) => {
      const parts = url.split('/');
      return `#${parts[parts.length - 1]}`;
    });

    let resultStr = `Episodios ${items.join(', ')}`;
    if (episode.length > limit) {
      resultStr += ` (+${episode.length - limit} más)`;
    }
    return resultStr;
  };

  const statusDotClass = status.toLowerCase() === 'alive' ? styles.alive :
                         status.toLowerCase() === 'dead' ? styles.dead : 
                         styles.unknown;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button 
          className={styles.closeBtn} 
          onClick={onClose} 
          aria-label="Cerrar detalles del personaje"
        >
          <X size={20} />
        </button>

        <div className={styles.body}>
          <div className={styles.imgContainer}>
            <img src={image} alt={name} className={styles.img} />
          </div>
          
          <div className={styles.info}>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>{name}</h2>
              <button
                type="button"
                className={`${styles.favBtn} ${isFav ? styles.isFav : ''}`}
                onClick={() => onToggleFav(character)}
                aria-label={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
              >
                <Heart size={22} fill={isFav ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <span className={styles.infoLabel}>Estado</span>
                <span className={styles.infoVal} style={{ display: 'flex', alignItems: 'center' }}>
                  <span className={`${styles.statusDot} ${statusDotClass}`}></span>
                  {status === 'Alive' ? 'Vivo' : status === 'Dead' ? 'Muerto' : 'Desconocido'}
                </span>
              </div>
              
              <div className={styles.gridItem}>
                <span className={styles.infoLabel}>Especie</span>
                <span className={styles.infoVal}>{species}</span>
              </div>
              
              <div className={styles.gridItem}>
                <span className={styles.infoLabel}>Género</span>
                <span className={styles.infoVal}>
                  {gender === 'Female' ? 'Femenino' : 
                   gender === 'Male' ? 'Masculino' : 
                   gender === 'Genderless' ? 'Sin género' : 'Desconocido'}
                </span>
              </div>
              
              <div className={styles.gridItem}>
                <span className={styles.infoLabel}>Origen</span>
                <span className={styles.infoVal}>{origin?.name === 'unknown' ? 'Desconocido' : origin?.name}</span>
              </div>
              
              <div className={styles.gridItemFull}>
                <span className={styles.infoLabel}>Ubicación Actual</span>
                <span className={styles.infoVal}>{location?.name === 'unknown' ? 'Desconocida' : location?.name}</span>
              </div>
              
              <div className={styles.gridItemFull}>
                <span className={styles.infoLabel}>Aparición en episodios</span>
                <span className={styles.infoVal}>{getEpisodeNumbers()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
