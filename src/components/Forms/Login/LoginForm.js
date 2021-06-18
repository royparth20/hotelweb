import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import API from '../../../api'
import { FormContainer, 
  FormGroup, 
  FormLabel, 
  FormInput, 
  Input, 
  Button,
  RememberMeCheckBox,
  RememberMeText,
  ForgetPasswordLink,
  FormLabelError,
  InputPass
} from './LoginForm.elements'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Row, Col } from 'styled-bootstrap-grid';
import { Form } from "react-bootstrap";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import '../../../css/style.css';




  export default function LoginForm() 
  {
    let history = useHistory();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState({});
   ////////////Ajax/////////////////////////////////////////
    async function LoginUser(credentials) {
    
    
    var data = JSON.stringify({
      "email": credentials.username,
      "password": credentials.password
    });
    
    
    var config = {
      method: 'post',
      url: 'hotel/login',
      
      data : data
    };
    return await  API(config)
  .then(function (response) {
    var data = JSON.stringify(response.data);

    const token = localStorage.setItem('token',response.data.token);
    const hotel_id = localStorage.setItem('hotel_id',response.data.id);
     toastr.success(response.data.message)
    //const hotel_token = localStorage.setItem('hotel_token',response.data.token);
    //history.push("/home")
    window.location.href='/home'
    //setToken(data.token)
    })
     .catch(function (error) {
          toastr.error(error.response.data.message)
    
      });
  }
  ////////////Ajax end/////////////////////////////////////////
  function valid() 
{
  let errors = {}
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!username)
  {
    errors['name'] = "Email is empty";
    
  }
  
  else if ( !re.test(username) ) {
    errors['name'] = "Email is not valid";
  }
  if(!password)
  {
    errors['password'] = "Password is empty";
    
  }
  console.log('errors',errors);
  if(Object.entries(errors).length>0)
  {
    setError(errors);
    return false;
  }
  return true;
}
  const handleSubmit = async e => {
    e.preventDefault();
 
   if(!valid()){
    return false;
   }
    const token = await LoginUser({
      username,
      password
    });
   // setToken(token);
  }
  ////////////Ajax/////////////////////////////////////////
  return (
    <>
      <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput>
            <Input placeholder="Enter email address" onChange={e => setUserName(e.target.value)}></Input>
            
            <FormLabelError>{error["name"]}</FormLabelError>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput>
            <InputPass placeholder="Enter your password" onChange={e => setPassword(e.target.value)} ></InputPass>
            <FormLabelError>{error.password}</FormLabelError>
          </FormInput>
         
        </FormGroup>

            
              <Row className="p-0 m-0">
                <Col xs={12} sm={6} md={6} lg={6} xl={6} className="p-2 m-0">
                    <RememberMeCheckBox/>
                    <RememberMeText>Remember me</RememberMeText>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6} className="p-2 m-0">
                  <ForgetPasswordLink>Forget Password?</ForgetPasswordLink>
                </Col>
              </Row>
            

        <FormGroup>
          <Button>Login  <FaLongArrowAltRight/>
          </Button>
        </FormGroup>
        </form>
      </FormContainer>
    </>
  )
}


