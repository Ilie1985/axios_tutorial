import { useEffect } from 'react';
import axios from 'axios';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
 
 
  const fetchData = async () => {
    console.log('global axios instance');

try {
  const response1=await axios(productsUrl)
  const response2=await axios(randomUserUrl)
  console.log("global",response1)
  console.log("response2", response2);
} catch (error) {
  
}


  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;