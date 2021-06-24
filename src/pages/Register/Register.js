import React from "react";
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
} from "./Register.elements.js";
import RegisterForm from "../../components/Forms/Register/TempRegisterForm";
import { Container, Row, Col } from "styled-bootstrap-grid";
import SocialLoginForm from "../../components/Forms/SocialLogin/SocialLoginForm";
import { useHistory } from "react-router-dom";
const Register = () => {
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
                    
                  </ImageOverlay>
                </BackgroundImage>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-0 m-0">
                <FormSection>
                  <TabsContainer>
                    <TabButton className="active">Registers</TabButton>
                    <TabButton to="login">Login</TabButton>
                  </TabsContainer>
                  <RegisterForm />
                </FormSection>
              </Col>
            </Row>
          </ContentWrapper>
        </Container>
      </Main>
    </>
  );
};

export default Register;
