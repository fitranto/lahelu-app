import { useState, useEffect } from 'react';

export function usePosts(url:string) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const getPosts = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.posts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getPosts();
  }, []);

  return [data, isLoading];
}
