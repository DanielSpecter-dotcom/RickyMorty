import styles from './filters.module.css';


export function Filters({ 
  name, 
  setName, 
  status, 
  setStatus, 
  gender, 
  setGender, 
  onClear 
}) {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.group}>
          <input
            type="text"
            className={styles.input}
            placeholder="Buscar por nombre..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className={styles.group}>
          <select
            className={styles.select}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Filtrar por estado"
          >
            <option value="">Cualquier estado</option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>
        
        <div className={styles.group}>
          <select
            className={styles.select}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            aria-label="Filtrar por género"
          >
            <option value="">Cualquier género</option>
            <option value="female">Femenino</option>
            <option value="male">Masculino</option>
            <option value="genderless">Sin género</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>
        
        <button 
          type="button" 
          className={styles.btnClear} 
          onClick={onClear}
        >
          Limpiar
        </button>
      </form>
    </div>
  );
}
