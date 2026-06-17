import { useState, useEffect } from 'react';
import { getCharacters } from '../services/get-characters';
import { useDebounce } from './use-debounce';


export function useCharacters() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const debouncedName = useDebounce(name, 400);

  const handleNameChange = (val) => {
    setName(val);
    setLoading(true);
    setError(null);
    setCurrentPage(1);
  };

  const handleStatusChange = (val) => {
    setStatus(val);
    setLoading(true);
    setError(null);
    setCurrentPage(1);
  };

  const handleGenderChange = (val) => {
    setGender(val);
    setLoading(true);
    setError(null);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setName('');
    setStatus('');
    setGender('');
    setLoading(true);
    setError(null);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setLoading(true);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let isMounted = true;

    getCharacters({
      page: currentPage,
      name: debouncedName,
      status,
      gender
    })
      .then((data) => {
        if (isMounted) {
          setCharacters(data.results || []);
          setTotalPages(data.info?.pages || 1);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Error de conexión');
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [currentPage, debouncedName, status, gender]);

  return {
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
  };
}
