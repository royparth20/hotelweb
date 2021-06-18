import React from 'react'
import {Main,
  ContentWrapper,
  GetStartContainer,
  Heading, 
  Content,
  FormSection,
  Title,
  ArrowImage
} from './ChangePassword.elements.js'
import ChangePasswordForm from '../../components/Forms/ChangePassword/ChangePasswordForm'
import { Container, Row, Col } from 'styled-bootstrap-grid';

const ChangePassword = () => {
  return (
    <>
      <Main>
        <Container className="p-0 m-0">
          <ContentWrapper className="p-0 m-0">
            <Row className="p-0 m-0">
              <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-0 m-0">
                <FormSection>
                  <ChangePasswordForm/>
                </FormSection>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <GetStartContainer>
                  {/*<Heading>Get Start</Heading>*/}
                  <ArrowImage src="./assets/icons/arrow.svg"></ArrowImage>
                  <Title>Sign up to get start</Title>
                  <Content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Content>
                </GetStartContainer>
              </Col>
            </Row>
          </ContentWrapper>
        </Container>
      </Main>
    </>
  )
}

export default ChangePassword
