import { useState } from 'react';

const useFetch = (page) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url =
    `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState([...state, ...data.items]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { state, loading, error, fetchData };
};

export default useFetch;
