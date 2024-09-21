import { useState, useEffect} from 'react';

export const GetClients = (url) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClients = async () => {
      setLoading(true);
      try {
          const response = await fetch(url, {
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          if (!response.ok) {
              throw Error(`Error al obtener clientes: ${response.statusText}`);
          }
          const data = await response.json();
          setClients(data);
      } catch (error) {
          setError(error.message);
          console.log('Error:', error);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      fetchClients();
  }, [url]);

    return {
        clients,
        loading,
        error,
        refetch: fetchClients
    };
};
