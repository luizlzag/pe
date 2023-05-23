import axios from 'axios';
const getProducts = async () =>{
  const response = await axios.get('http://localhost:2469/products');
  return response.data.results;
};
export default getProducts;
  
