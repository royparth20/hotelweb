import React, { useEffect,useState } from 'react';
import { map } from 'rxjs/operators';
import { 
  Main,
  PageTitleContainer,
  PageTitle, 
  PageTitleLine,
  CardWrapper,
  CardImage,
  CardInfo,
  CardName,
  CardButton
} from './Hotel.elements'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import API from '../../api_test'
const Hotel = () => {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    fetchData().then(bl => {
      console.log('sdfdsf',bl)
      setHotels(bl.data.data)
    }) .catch(function (error) {
      console.log('sdfsdf',error);
    });
  }, [])
  const fetchData = async () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'hotel',
     
    };
    
   return  API(config)
    
    
}
  return (
    <>
    <Main>
      <Container>
        <Row>
          <Col>
            <PageTitleContainer>
              <PageTitleLine src="./assets/icons/line.svg"/>
              <PageTitle>Hotel</PageTitle>
            </PageTitleContainer>
          </Col>
        </Row>

        <Row>
        {hotels.map(bl =>  
         
                  <Col sm={12} lg={4}>     
            <CardWrapper>
              <CardImage src="https://via.placeholder.com/360x200"/>
              <CardInfo>
                <CardName>{bl.hotelName}</CardName>
                <CardButton>Read More</CardButton>
              </CardInfo>
            </CardWrapper>
          </Col>
          
                   
          )}
          
        </Row>
      </Container>
    </Main>
    </>
  )
}

export default Hotel
