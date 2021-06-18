import axios from 'axios';


export default axios.create({
    baseURL: 'https://hoteladmin.lexicmediatesting.in:8000/api/v1/',
    
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
    },
  });
  

  