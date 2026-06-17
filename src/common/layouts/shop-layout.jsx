import { Outlet } from 'react-router';
import { Navbar } from '../components/navbar/navbar';

export function ShopLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
      <footer style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--border-color)',
        padding: '2rem 0',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p>
            Desarrollado para el Proyecto Final de React. &copy; {new Date().getFullYear()} | Datos por la{' '}
            <a 
              href="https://rickandmortyapi.com/" 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
            >
              Rick & Morty API
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
