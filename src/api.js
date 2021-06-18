import axios from 'axios';
let token =  localStorage.getItem('token') ? localStorage.getItem('token') : ""
let Token_Bearer = 'Bearer ' + token;
export default axios.create({
    baseURL: 'https://hoteladmin.lexicmediatesting.in:8000/api/v1/',

    headers: { 
      'Content-Type': 'application/json',
       'Authorization': Token_Bearer
    },
  });
  