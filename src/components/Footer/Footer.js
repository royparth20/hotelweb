import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { FooterWrapper,
  LogoHeading,
  AboutText,
  Heading,
  CopyRight
} from './Footer.elements'


const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} >
              <LogoHeading>Hotel Management</LogoHeading>
              <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, dui, dictumst mi egestas neque. Eget bibendum dignissim cras ac quis volutpat quam ac natoque. Enim faucibus morbi blandit sed pulvinar id posuere. Enim nibh bibendum risus integer.</AboutText>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2} xl={2}>
              <Heading>Explore</Heading>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <Heading>Contact</Heading>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <Heading>Follow</Heading>
            </Col>
          </Row>
        </Container>
        <Row className="p-0 m-0">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-0 m-0">
            <CopyRight>Copyright 2021</CopyRight>
          </Col>
        </Row>
      </FooterWrapper>
    </>
  )
}

export default Footer
