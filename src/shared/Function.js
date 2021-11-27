 
 import axiox
 
 const BASE_URL="https://fakestoreapi.com/";



 const getProducts=async()=>{
    const response =await axios (`${BASE_URL}/products`);
    return response.data;
 }