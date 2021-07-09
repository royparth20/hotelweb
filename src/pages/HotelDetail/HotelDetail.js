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
import Tourist from "../Tourist/Tourist";
import Staff from "../Staff/Staff";
const HotelDetail = () => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [hotels, setHotels] = useState([]);

  const onImageError = (e) => {
    e.target.src = "https://via.placeholder.com/360x200";
  };
  useEffect(() => {
    if (auth.userType !== "STAFF") {
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
    } else {
      // if (user?.branches.length <= 0) {
      //   setTimeout(async () => {
      //     try {
      //       const { data } = await api.getStaffMemberByStaffId(auth.id);
      //       dispatch({
      //         type: userActions.actions.USER_DETAILS,
      //         payload: { ...data.data, branches: [] },
      //       });
      //       // setHotels(data.data);
      //       const assignHotels = data.data.assignedHotel;
      //       assignHotels.map(async (_ids, index) => {
      //         const res = await api.getBranchDataByStaff(_ids);
      //         console.log(index, res.data.data);
      //         dispatch({
      //           type: userActions.actions.SET_BRANCH,
      //           payload: { ...res.data.data },
      //         });
      //       });
      //       // console.table({ data: data.data, assignHotels });
      //     } catch (error) {}
      //   }, 0);
      // }
    }
  }, [auth]);
  useEffect(() => {
    setHotels(user);
  }, [user]);
  // console.log("hotels == > ", hotels);
  return (
    <>
      <Main>
        <Container>
          <Row>
            {hotels?.hotelName && (
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
                        maxHeight: "350px",
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
          {hotels?.branches && hotels?.branches.length > 0 && (
            <Row>
              <Col>
                <PageTitleContainer>
                  <PageTitleLine src="./assets/icons/line.svg" />
                  <PageTitle>BRANCHES</PageTitle>
                </PageTitleContainer>
              </Col>
            </Row>
          )}

          <Row>
            {hotels?.branches &&
              hotels.branches.map((br) => (
                <Col sm={12} lg={4} key={br._id}>
                  {/* {console.log(br)} */}
                  <CardWrapper>
                    <Link to={`/branch/${br._id}`}>
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
                    </Link>
                    <CardInfo>
                      <CardName>{br.address}</CardName>
                      {br && br.approved ? (
                        <div className="row">
                          {auth && auth.userType === "HOTEL" && (
                            <>
                              <Link
                                to={`/branchDetails?branchId=${br._id}`}
                                className="mr-1"
                              >
                                <button className="btn btn-outline-danger">
                                  Edit
                                </button>
                              </Link>

                              <Link
                                to={`/staff?branchId=${br._id}`}
                                className="mx-1"
                              >
                                <button className="btn btn-outline-primary">
                                  Show Staff
                                </button>
                              </Link>
                            </>
                          )}
                          <Link to={`/tourist/${br._id}`} className="ml-1">
                            <button className="btn btn-outline-secondary">
                              Show Tourist
                            </button>
                          </Link>
                        </div>
                      ) : (
                        <>
                          <div className="text-danger font-weight-bold branch-not-approved">
                            Branch Not Approved
                          </div>
                        </>
                      )}
                    </CardInfo>
                  </CardWrapper>
                </Col>
              ))}
          </Row>

          {hotels?.branches && hotels?.branches.length <= 0 && (
            <>
              <Staff />
              <Tourist />
            </>
          )}
        </Container>
      </Main>
    </>
  );
};

export default HotelDetail;
