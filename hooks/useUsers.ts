import { useState, useEffect } from 'react';

export function useUsers(url:string) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  
  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getUsers();
  }, []);

  return [data, isLoading];
}
