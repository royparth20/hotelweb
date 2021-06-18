import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import {
  Main,
  PageTitleContainer,
  PageTitle,
  PageTitleLine
} from './Home.elements'
const Home2 = () => {
  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col>
              <PageTitleContainer>
                <PageTitleLine src="./assets/icons/line.svg"/>
                <PageTitle>HOME</PageTitle>
              </PageTitleContainer>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}

export default Home2
