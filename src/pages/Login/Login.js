import React, { useState } from "react";
import {
  Main,
  ContentWrapper,
  BackgroundImage,
  ImageOverlay,
  ImageHeading,
  ImageContent,
  SocialLoginGroup,
  SocialLogin,
  SocialLoginIcon,
  FormSection,
  TabsContainer,
  TabButton,
} from "./Login.elements.js";
import LoginForm from "../../components/Forms/Login/LoginForm";
import SocialLoginForm from "../../components/Forms/SocialLogin/SocialLoginForm";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "styled-bootstrap-grid";

// window.fbAsyncInit = function() {
//   let = FB.init({
//       appId      : '1191610204594935',
//       cookie     : true,
//       xfbml      : true,
//       version    : 'v11.0'
//     });

//     FB.AppEvents.logPageView();

//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));

// //   function fbLogout() {
//     //   window.FB.logout(function (response) {
//     //         console.log(response)
//     //       //Do what ever you want here when logged out like reloading the page
//     //       //window.location.reload();
//     //   });
//      window.FB.logout(function(response) {
//           window.FB.Auth.setAuthResponse(null, 'unknown');
//         //  ...
//         });
//  // }
//   };

//   let  googleResponse = (e) => {
//       console.log(e)
//   };

//   let  onFailure = (error) => {
//       console.log(error)
//     };

const Login = () => {
  const history = useHistory();
  return (
    <>
      <Main>
        <Container className="p-0 m-0">
          <ContentWrapper className="p-0 m-0">
            <Row className="p-0 m-0">
              <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-0 m-0">
                <BackgroundImage>
                  <ImageOverlay>
                    <ImageHeading>Get Start</ImageHeading>
                    <ImageContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </ImageContent>
                    {/* <SocialLoginGroup>
                    
                       <SocialLoginForm />
                    
                    </SocialLoginGroup> */}
                  </ImageOverlay>
                </BackgroundImage>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-0 m-0">
                <FormSection>
                  <TabsContainer>
                    <TabButton onClick={(event) => history.push("/register")}>
                      Register
                    </TabButton>
                    <TabButton className="active">Login</TabButton>
                  </TabsContainer>
                  <LoginForm />
                </FormSection>
              </Col>
            </Row>
          </ContentWrapper>
        </Container>
      </Main>
    </>
  );
};

export default Login;
