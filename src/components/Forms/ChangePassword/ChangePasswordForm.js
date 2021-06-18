import React, { useState } from 'react';
import { FormContainer, 
  FormTitle,
  FormGroup, 
  FormLabel, 
  FormInput, 
  Input, 
  Button,
  FormLabelError,
  Divider
} from './ChangePasswordForm.elements'
import { Row, Col } from 'styled-bootstrap-grid';
import API from '../../../api'
const ChangePasswordForm = () => {
  const [pass, setPass] = useState();
    const [cpassword, setCpass] = useState();
    const [error, setError] = useState({});
   
  function valid() 
  {
    let errors = {}
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!pass)
    {
      errors['pass'] = "Password is empty";
      
    }
    
    
    if(!cpassword)
    {
      errors['cpass'] = "Confirm Password is empty";
      
    } else if(cpassword!=pass)
    {
      errors['cpass'] = "Password is not matching with confirm password";
      
    }
    console.log('errors',errors);
    if(Object.entries(errors).length>0)
    {
      setError(errors);
      return false;
    }
    return true;
  }
  async function ChangeP(credentials) {
    
    
    var data = JSON.stringify({
      "newPassword": credentials.pass,
      "confirmPassword": credentials.cpassword
    });
    
    
    var config = {
      method: 'post',
      url: 'hotel/forgotPassword',
      
      data : data
    };
    return await  API(config)
  .then(function (response) {
    var data = JSON.stringify(response.data);

    const token = localStorage.setItem('token',response.data.token);

    //setToken(data.token)
    })
      .catch(function (error) {
        if(error.response){
          setError({'name':error.response.data.message})
        }
          
        
        
    
      });
  }
  const handleSubmit = async e => 
  {
    e.preventDefault();
   
    if(!valid()){
      return false;
    }
      const token = await ChangeP({
        pass,
        cpassword
      });
   // setToken(token);
  }
  return (
    <>
      <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormTitle>Forgot Password</FormTitle>
        <FormGroup>
          <FormLabel>Password*</FormLabel>
          
          <FormInput>
            <Input placeholder="Enter password"  onChange={e => setPass(e.target.value)}></Input>
            <FormLabelError>{error["pass"]}</FormLabelError>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Confirm Password*</FormLabel>
          <FormInput>
            <Input placeholder="Enter your password"  onChange={e => setCpass(e.target.value)}></Input>
            <FormLabelError>{error["cpass"]}</FormLabelError>
          </FormInput>
        </FormGroup>
        
        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>

        <Row className="p-3">
          <Col sm={12} md={12} className="text-center">
            We sent a link on your email address  
          </Col>
        </Row>
        </form>
      </FormContainer>
    </>
  )
}

export default ChangePasswordForm
