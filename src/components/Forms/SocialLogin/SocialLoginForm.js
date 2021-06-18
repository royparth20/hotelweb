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
  InputPass,
  SocialLogin,
  SocialLoginIcon
} from './SocialLoginForm.elements'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Row, Col } from 'styled-bootstrap-grid';
import { Form } from "react-bootstrap";
// import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import toastr from 'toastr'

import 'toastr/build/toastr.min.css'
import '../../../css/style.css';

 

  export default function SocialLoginForm() 
  {
    let history = useHistory();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState({});
     const [profileObj, setProfileObj] = useState(false);
  const [loginType, setLoginType] = useState("");
  
  
    const responseFacebook = (profileObj) => {
        if(profileObj.accessToken) {
        let  payload = {
            socialId: profileObj.id,
            hotelName: profileObj.name,
            email: profileObj.email,
            // profilePic: profileObj.imageUrl,
          };
           SocialLoginUser(payload).then(result => { 
                  window.FB.logout(function (response) {
                        console.log(response)
                  });
           })
        }
      
    }
      const  googleResponse = (data) => {
         let  payload = {
            socialId: data.profileObj.googleId,
            hotelName: data.profileObj.name,
            email: data.profileObj.email,
            // profilePic: profileObj.imageUrl,
          };
           SocialLoginUser(payload).then(result => { 
               console.log(1);
           })
      };
      
       const  onFailure = (error) => { 
           console.log(error)
            toastr.error(error)
        };
 
   ////////////Ajax/////////////////////////////////////////
   const SocialLoginUser = async (payload) => { 
        
    
     
    var data = JSON.stringify(payload);
    
    
    var config = {
      method: 'post',
      url: 'hotel/social',
      
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
    }).catch(function (error) {
    if(error.response){
       toastr.error(error.response.data.message)
    } 
      });
    //   }
  }
  ////////////Ajax end/////////////////////////////////////////
//   function valid() 
// {
//   let errors = {}
//   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if(!username)
//   {
//     errors['name'] = "Email is empty";
    
//   }
  
//   else if ( !re.test(username) ) {
//     errors['name'] = "Email is not valid";
//   }
//   if(!password)
//   {
//     errors['password'] = "Password is empty";
    
//   }
//   console.log('errors',errors);
//   if(Object.entries(errors).length>0)
//   {
//     setError(errors);
//     return false;
//   }
//   return true;
// }
//   const handleSubmit = async e => {
//     e.preventDefault();
 
//   if(!valid()){
//     return false;
//   }
//     const token = await LoginUser({
//       username,
//       password
//     });
//   // setToken(token);
//   }
  ////////////Ajax///////////////////////////////////////// 
  return (
    <>
      <FacebookLogin 
            appId={1191610204594935}
            autoLoad={true}
            fields="name,email,picture" 
            title="Sign in With facebook"
            callback={responseFacebook}  
             render={renderProps => (
             <SocialLogin  onClick={renderProps.onClick}>
                        <SocialLoginIcon  src="./assets/icons/facebook.svg"/> Sign in With Facebook
             </SocialLogin>
  )} /> 
        <GoogleLogin  clientId={'412937972604-hp2h2bjubt9obae8o2a0vbf03s5es5u4.apps.googleusercontent.com'}
               render={renderProps => (
             <SocialLogin  onClick={renderProps.onClick}>
                        <SocialLoginIcon   src="./assets/icons/google.svg"/> Sign in With Googles
             </SocialLogin>
  )} 
    
            onSuccess={googleResponse}
            onFailure={onFailure}/>
    </>
  )
}

 


