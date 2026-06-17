import styles from './pagination.module.css';


export function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav className={styles.pagination} aria-label="Navegación de páginas">
      <button
        type="button"
        className={styles.btn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &larr; Anterior
      </button>
      
      <span className={styles.info}>
        Página {currentPage} de {totalPages}
      </span>
      
      <button
        type="button"
        className={styles.btn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente &rarr;
      </button>
    </nav>
  );
}
