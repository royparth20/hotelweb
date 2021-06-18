import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { 
  Main,
  PageTitleContainer,
  PageTitle, 
  PageTitleLine
} from './About.elements'
const About = () => {
  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col>
              <PageTitleContainer>
                <PageTitleLine src="./assets/icons/line.svg"/>
                <PageTitle>ABOUT</PageTitle>
              </PageTitleContainer>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}

export default About
