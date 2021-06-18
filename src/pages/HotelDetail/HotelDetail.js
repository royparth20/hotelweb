import React, { useEffect,useState } from 'react';
import { map } from 'rxjs/operators';
import API from '../../api_test'
import { 
  Main,
  PageTitleContainer,
  PageTitle, 
  PageTitleLine,
  HotelName,
  HotelBasicInformation,
  HotelInfo,
  HotelInfoLabel,
  HotelInfoValue,
  CardWrapper,
  CardImage,
  CardInfo,
  CardName,
  CardButton,
} from './HotelDetail.elements'
import { Container, Row, Col } from 'styled-bootstrap-grid';

const HotelDetail = () => {
    const [hotels, setHotels] = useState([])
  useEffect(() => {
    fetchData().then(element => {
      console.log('sdfdsf',element)
      setHotels(element.data.data)
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
    
    
};

console.log("hotels",hotels)
  return (
    <>
    <Main>
      <Container>

        <Row>
        {hotels.map(element =>  
         <> <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            {element.hotelImages?
             <img src={element.hotelLogo} style={{'maxWidth':'100%'}}/>
            :
              <img src="https://via.placeholder.com/460x560"/>}
          </Col>
         
         
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <HotelName>
            {element.hotelName}
            </HotelName>
            <HotelBasicInformation>
              <HotelInfo>
                <HotelInfoLabel>Address:</HotelInfoLabel>
                <HotelInfoValue>{element.address}</HotelInfoValue>
              </HotelInfo>
              <HotelInfo>
                <HotelInfoLabel>Number:</HotelInfoLabel>
                <HotelInfoValue>{element.ownerTelephoneNumber}</HotelInfoValue>
              </HotelInfo>
              
            </HotelBasicInformation>
          </Col></>
           )}
        </Row>


        <Row>
          <Col>
            <PageTitleContainer>
              <PageTitleLine src="./assets/icons/line.svg"/>
              <PageTitle>BRANCHES</PageTitle>
            </PageTitleContainer>
          </Col>
        </Row>
        
        <Row>
        {hotels[0]?.branches.map(br =>  
          <Col sm={12} lg={4}>
            <CardWrapper>
            {br.hotelImages?
              <CardImage src={br.hotelImages[0]}/>
            :
            <CardImage src="https://via.placeholder.com/360x200"/>}
             
              <CardInfo>
                <CardName>{br.address}</CardName>
                <CardButton>Alert</CardButton>
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

export default HotelDetail
