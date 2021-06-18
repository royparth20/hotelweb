import axios from 'axios';


export default axios.create({
    baseURL: 'https://hotel-management-backend.herokuapp.com/api/v1/',
    
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
    },
  });
  

  