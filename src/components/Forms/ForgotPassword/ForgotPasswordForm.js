import React, { useState } from 'react';
import API from '../../../api'
import { FormContainer, 
  FormTitle,
  FormGroup, 
  FormLabel, 
  FormInput, 
  Input, 
  Button,
  Divider
} from './ForgotPasswordForm.elements'
import { Row, Col } from 'styled-bootstrap-grid';

const ForgotPasswordForm = () => {
  const [username, setUserName] = useState();
 
  const [error, setError] = useState({});
  ////////////Ajax/////////////////////////////////////////
  async function Forgot(credentials) {
    
    
    var data = JSON.stringify({
      "email": credentials.username,
      "password": credentials.password
    });
    
    
    var config = {
      method: 'get',
      url: 'hotel/forgotPassword?email='+credentials.username,
      
      
    };
    return await  API(config)
  .then(function (response) {
  
    console.log(response.data,'error.response.data');
    setError({'msg':response.data.data})

    //setToken(data.token)
    })
      .catch(function (error) {
        if(error.response){
          setError({'name':error.response.data.message})
        }
          
        
        
    
      });
  }
  //////////////////////////////////////////////////
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
    const token = await Forgot({
      username
    });
   // setToken(token);
  }
  return (
    <>
      <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormTitle>Forgot Password</FormTitle>
        <FormGroup>
          <FormLabel>Email*</FormLabel>
          <FormInput>
            <Input placeholder="Enter email address" onChange={e => setUserName(e.target.value)}></Input>
          </FormInput>
        </FormGroup>
        <Divider>OR</Divider>
        <FormGroup>
          <FormLabel>Contact*</FormLabel>
          <FormInput>
            <Input placeholder="Enter your contact"></Input>
          </FormInput>
        </FormGroup>
        <Row className="p-3">
          <Col sm={12} md={12} className="text-center">
            {error['name']}
          </Col>
        </Row>
        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>

        <Row className="p-3">
          <Col sm={12} md={12} className="text-center">
            {error['msg']}
          </Col>
        </Row>
        </form>
      </FormContainer>
    </>
  )
}

export default ForgotPasswordForm
