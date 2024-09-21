import { useState, useEffect} from 'react';

export const GetAccounts = (url) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAccounts = async () => {
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
          setAccounts(data);
      } catch (error) {
          setError(error.message);
          console.log('Error:', error);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      fetchAccounts();
  }, [url]);

    return {
        accounts,
        setAccounts,
        loading,
        error,
        refetch: fetchAccounts
    };
};
