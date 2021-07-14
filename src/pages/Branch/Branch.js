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
} from "./Branch.elements";
import userActions from "../../store/actions/userAction";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
const Branch = () => {
  const params = useParams();
  const { search } = useLocation();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [hotels, setHotels] = useState([]);

  const onImageError = (e) => {
    e.target.src = "https://via.placeholder.com/360x200";
  };
  useEffect(() => {
    // if (auth.userType !== "STAFF") {
    setTimeout(async () => {
      // try {
      //   const element = await api.getHotel();
      //   console.log("fetchData Hotels ==> ", element.data.data[0]);
      //   dispatch({
      //     type: userActions.actions.USER_DETAILS,
      //     payload: { ...element.data.data[0] },
      //   });
      //   // setHotels(element.data.data[0]);
      // } catch (err) {
      //   console.log("sdfsdf", err);
      // }
    }, 0);
    // }
  }, [auth]);
  useEffect(() => {
    if (params.id !== null || params.id !== undefined) {
      const data = user.branches.find((element) => element._id === params.id);

      console.log(data);
      setHotels(data);
    }
  }, [params, user]);
  // console.log("hotels == > ", hotels);
  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col>
              <PageTitleContainer>
                <PageTitleLine src="/assets/icons/line.svg" />
                <PageTitle>BRANCH Details</PageTitle>
              </PageTitleContainer>
            </Col>
          </Row>
          <Row>
            {hotels?.hotelName && (
              <>
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
                      src={hotels.hotelImages && hotels.hotelImages[0]}
                      style={{
                        maxWidth: "",
                        borderRadius: "5%",
                        height: "fit-content",
                        maxHeight: "350px",
                      }}
                    />
                  ) : (
                    <img src="https://via.placeholder.com/300x300" />
                  )}
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <HotelName className="text-capitalize">
                    {hotels.ownerName}
                  </HotelName>
                  <HotelBasicInformation>
                    <HotelInfo>
                      <HotelInfoLabel>email:</HotelInfoLabel>
                      <HotelInfoValue>{hotels.email}</HotelInfoValue>
                    </HotelInfo>
                    <HotelInfo>
                      <HotelInfoLabel>Address:</HotelInfoLabel>
                      <HotelInfoValue>{hotels.address}</HotelInfoValue>
                    </HotelInfo>
                    <HotelInfo>
                      <HotelInfoLabel>Number:</HotelInfoLabel>
                      <HotelInfoValue>
                        {hotels.hotelTelephoneNumber}
                      </HotelInfoValue>
                    </HotelInfo>
                    <HotelInfo>
                      <HotelInfoLabel>Approved :</HotelInfoLabel>
                      <HotelInfoValue>
                        {hotels.approved ? (
                          <>
                            <div className="text-success">Approved</div>
                          </>
                        ) : (
                          <>
                            <div className="text-danger">Not Approved</div>
                          </>
                        )}
                      </HotelInfoValue>
                    </HotelInfo>
                  </HotelBasicInformation>
                </Col>
              </>
            )}
          </Row>
          <div className="container">
            <CardInfo>
              {hotels && hotels.approved ? (
                <div className="row justify-content-center">
                  {auth && auth.userType === "HOTEL" && (
                    <>
                      <Link
                        to={`/branchDetails?branchId=${hotels._id}`}
                        className="mr-1"
                      >
                        <button className="btn btn-outline-danger">Edit</button>
                      </Link>

                      <Link
                        to={`/staff?branchId=${hotels._id}`}
                        className="mx-1"
                      >
                        <button className="btn btn-outline-primary">
                          Show Staff
                        </button>
                      </Link>
                    </>
                  )}
                  <Link to={`/tourist/${hotels._id}`} className="ml-1">
                    <button className="btn btn-outline-secondary">
                      Show Tourist
                    </button>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="text-danger font-weight-bold branch-not-approved">
                    
                  </div>
                </>
              )}
            </CardInfo>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default Branch;
