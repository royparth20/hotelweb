import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { 
  Main,
  PageTitleContainer,
  PageTitle, 
  PageTitleLine
} from './Blog.elements'
const Blog = () => {
  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col>
              <PageTitleContainer>
                <PageTitleLine src="./assets/icons/line.svg"/>
                <PageTitle>BLOG</PageTitle>
              </PageTitleContainer>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}

export default Blog
