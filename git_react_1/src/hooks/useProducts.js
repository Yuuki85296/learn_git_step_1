
import { useEffect , useState } from "react";
import {api} from '../services/api'

export const useProducts = () => {
    const [ product ,setProduct] = useState([]);
    const [ loading ,setLoading] = useState(true);
    const [ error ,setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async () =>{
            try {
                setLoading(true);
                const data = await api.getProducts();
                setProduct(data.product);
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[]);

    return { product , loading , error};
};