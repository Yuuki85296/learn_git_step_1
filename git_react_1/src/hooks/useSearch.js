import { useState } from "react";
import { api } from '../services/api';

export const useSearch = (query) => {
    const [searchResults, setResults] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [searchQuery, setsearchQuery] = useState('');

    const searchProducts = async (query) => {
        try {
            setLoading(true);
            setsearchQuery(query);
            setResults(data.products);
            const data = await api.searchProducts(query);
            
        } catch (error) {
          console.error('search Error ', error);
        } finally {
            setLoading(false);
        }
    };

    return { searchResults, loading,searchQuery, searchProducts };
}   