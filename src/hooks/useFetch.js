import { useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
        setLoading(true);
        try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
        } catch (error) {
        setError(error);
        setLoading(false);
        }
    }
    
    return { data, loading, error, fetchData };
    }