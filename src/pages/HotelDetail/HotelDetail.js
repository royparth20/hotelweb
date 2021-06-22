import React, { useEffect, useState } from "react";
import { map } from "rxjs/operators";
import store from "../../utils/localStorage";
import LOCAL_STORE_KEYS from "../../utils/LOCAL_STORAGE_KEYS";
import API from "../../api_test";
import { useSelector } from "react-redux";
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
} from "./HotelDetail.elements";
import userActions from "../../store/actions/userAction";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { useDispatch } from "react-redux";
const HotelDetail = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetchData()
      .then((element) => {
        console.log("fetchData Hotels ==> ", element);
        dispatch({
          type: userActions.actions.USER_DETAILS,
          payload: { ...element.data.data },
        });
        setHotels(element.data.data);
      })
      .catch(function (error) {
        console.log("sdfsdf", error);
      });
  }, []);
  const fetchData = async () => {
    if (store.isAvailable()) {
      var config = {
        method: "get",
        url: `hotel/?branchId=${store.getItem(LOCAL_STORE_KEYS.id)}`,
      };
      return API(config);
    } else {
      var config = {
        method: "get",
        url: `hotel/?branchId=${auth.token}`,
      };
      // console.log("auth.token", config);

      return API(config);
    }
  };

  // console.log("hotels", hotels);
  return (
    <>
      <Main>
        <Container>
          <Row>
            {hotels && (
              <>
                {" "}
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  {hotels.hotelImages ? (
                    <img src={hotels.hotelLogo} style={{ maxWidth: "100%" }} />
                  ) : (
                    <img src="https://via.placeholder.com/460x560" />
                  )}
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <HotelName>{hotels.hotelName}</HotelName>
                  <HotelBasicInformation>
                    <HotelInfo>
                      <HotelInfoLabel>Address:</HotelInfoLabel>
                      <HotelInfoValue>{hotels.address}</HotelInfoValue>
                    </HotelInfo>
                    <HotelInfo>
                      <HotelInfoLabel>Number:</HotelInfoLabel>
                      <HotelInfoValue>
                        {hotels.ownerTelephoneNumber}
                      </HotelInfoValue>
                    </HotelInfo>
                  </HotelBasicInformation>
                </Col>
              </>
            )}
          </Row>

          <Row>
            <Col>
              <PageTitleContainer>
                <PageTitleLine src="./assets/icons/line.svg" />
                <PageTitle>BRANCHES</PageTitle>
              </PageTitleContainer>
            </Col>
          </Row>

          <Row>
            {hotels[0]?.branches.map((br) => (
              <Col sm={12} lg={4}>
                <CardWrapper>
                  {br.hotelImages ? (
                    <CardImage src={br.hotelImages[0]} />
                  ) : (
                    <CardImage src="https://via.placeholder.com/360x200" />
                  )}

                  <CardInfo>
                    <CardName>{br.address}</CardName>
                    <CardButton>Alert</CardButton>
                  </CardInfo>
                </CardWrapper>
              </Col>
            ))}
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default HotelDetail;
