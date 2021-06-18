import React from 'react'
import { 
  Main,
  PageTitleContainer,
  PageTitle, 
  ContentWrapper, 
  PageParagraph
} from './Reports.elements.js'
import  ReportsForm  from '../../components/Forms/Reports/ReportsForm'
import { Container, Row, Col } from 'styled-bootstrap-grid';

const Reports = () => {
  return (
    <>
    <Main>
      <Container>
        <Row>
          <Col>
            <PageTitleContainer>
              <PageTitle>REPORTS</PageTitle>
              <PageParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictumst eu lacus consectetur in maecenas eu tincidunt pharetra. Vitae a, orci feugiat vitae, tellus.
              </PageParagraph>
            </PageTitleContainer>
          </Col>
        </Row>

        <ContentWrapper className="p-0 m-0">
            <Row className="p-0 m-0">
              <Col md={3} className="p-0 m-0">      
                &nbsp;
              </Col>
              <Col md={6} className="p-0 m-0">      
                <ReportsForm/>
              </Col>
            </Row>
          </ContentWrapper>
      </Container>
    </Main>
    </>
  )
}

export default Reports
