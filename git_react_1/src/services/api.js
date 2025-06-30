const BASE_URL = 'https://dummyjson.com' ;
export const api ={

    getProducts: async(limit = 30 ,skip =0)=>{
        const response = await fetch( `${BASE_URL}/product?limit=${limit}&skip=${skip}`);
        return response.json();
    },
    getProduct: async(id)=>{
        const response = await fetch(`${BASE_URL}/product/${id}`);
        return response.json();
    },

    searchProduct: async( query) =>{
        const response = await fetch(`${BASE_URL}/product/search?q=${query}`);
        return response.json();
    },
    getCategory: async()=>{
        const response = await fetch(`${BASE_URL}/product/category/${category}`);
        return response.json();

    },

    getProductByCategory: async (category) => {
         const response = await fetch(`${BASE_URL}/product/category/${category}`);
        return response.json();
        
    }

}