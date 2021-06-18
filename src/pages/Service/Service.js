import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { 
  Main,
  PageTitleContainer,
  PageTitle, 
  PageTitleLine
} from './Service.elements'
const Service = () => {
  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col>
              <PageTitleContainer>
                <PageTitleLine src="./assets/icons/line.svg"/>
                <PageTitle>SERVICE</PageTitle>
              </PageTitleContainer>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}

export default Service
