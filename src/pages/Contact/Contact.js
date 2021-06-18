import React from 'react'
import { 
  Main,
  PageTitleContainer,
  PageTitle, 
  PageTitleLine,
  ContentWrapper, 
  ImageHeading, 
  ImageContent,
  SocialLoginGroup,
  SocialLogin,
  SocialLoginIcon,
  FormSection,
} from './Contact.elements.js'
import ContactForm  from '../../components/Forms/Contact/ContactForm'
import { Container, Row, Col } from 'styled-bootstrap-grid';

const Contact = () => {
  return (
    <>
    <Main>
      <Container>
        <Row>
          <Col>
            <PageTitleContainer>
              <PageTitleLine src="./assets/icons/line.svg"/>
              <PageTitle>CONTACT US</PageTitle>
            </PageTitleContainer>
          </Col>
        </Row>

        <ContentWrapper className="p-0 m-0">
            <Row className="p-0 m-0">
              <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-0 m-0">
                    <ImageHeading>Get In Touch</ImageHeading>
                    <ImageContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictumst eu lacus consectetur in maecenas eu tincidunt pharetra. Vitae a, orci feugiat vitae, tellus.
                    </ImageContent>
                    <SocialLoginGroup>
                      <SocialLogin>
                        <SocialLoginIcon src="./assets/icons/letter.svg"/> abcd@gmail.com
                      </SocialLogin>
                      <SocialLogin>
                        <SocialLoginIcon src="./assets/icons/reciver.svg"/> 7906079913
                      </SocialLogin>
                    </SocialLoginGroup>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-0 m-0">
                <FormSection>
                  <ContactForm/>
                </FormSection>
              </Col>
            </Row>
          </ContentWrapper>

        
      </Container>
    </Main>
    </>
  )
}

export default Contact
