import React, { useEffect, useState } from "react";
import { map } from "rxjs/operators";
import store from "../../utils/localStorage";
import LOCAL_STORE_KEYS from "../../utils/LOCAL_STORAGE_KEYS";
import API from "../../api_test";
import api from "../../axios";
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
  Image,
  CardInfo,
  CardName,
  CardButton,
} from "./HotelDetail.elements";
import userActions from "../../store/actions/userAction";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const HotelDetail = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [hotels, setHotels] = useState([]);

  const onImageError = (e) => {
    e.target.src = "https://via.placeholder.com/360x200";
  };
  useEffect(() => {
    setTimeout(async () => {
      try {
        const element = await api.getHotel();
        console.log("fetchData Hotels ==> ", element.data.data[0]);
        dispatch({
          type: userActions.actions.USER_DETAILS,
          payload: { ...element.data.data[0] },
        });
        setHotels(element.data.data[0]);
      } catch (err) {
        console.log("sdfsdf", err);
      }
    }, 0);
  }, []);
  // console.log("hotels == > ", hotels);
  return (
    <>
      <Main>
        <Container>
          <Row>
            {hotels && (
              <>
                {" "}
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className="text-center"
                >
                  {hotels.hotelImages ? (
                    <img
                      src={hotels.hotelLogo}
                      style={{
                        maxWidth: "350px",
                        borderRadius: "5%",
                        height: "fit-content",
                      }}
                    />
                  ) : (
                    <img src="https://via.placeholder.com/300x300" />
                  )}
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <HotelName className="text-capitalize">
                    {hotels.hotelName}
                  </HotelName>
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
            {hotels?.branches &&
              hotels.branches.map((br) => (
                <Col sm={12} lg={4}>
                  {/* {console.log(br)} */}
                  <CardWrapper>
                    {br.hotelImages.length > 0 ? (
                      <CardImage>
                        <Image
                          src={br.hotelImages && br.hotelImages[0]}
                          onError={onImageError}
                        />
                      </CardImage>
                    ) : (
                      <CardImage>
                        <Image src="https://via.placeholder.com/360x250" />
                      </CardImage>
                    )}

                    <CardInfo>
                      <CardName>{br.address}</CardName>
                      {auth && auth.userType === "HOTEL" && (
                        <div className="row d-flex justify-content-between mx-2">
                          

                          <Link to={`/branchDetails?branchId=${br._id}`}>
                            <button className="btn btn-outline-dark">
                              View
                            </button>
                          </Link>

                          <Link to={`/staff?branchId=${br._id}`}>
                            <button className="btn btn-primary">
                              Show Staff
                            </button>
                          </Link>
                        </div>
                      )}
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
