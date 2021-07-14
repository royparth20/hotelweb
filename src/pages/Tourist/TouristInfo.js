import React, { useEffect, useState } from "react";
import api from "../../axios";
import {
  Main,
  PageTitleContainer,
  PageTitle,
  PageTitleLine,
  CardImage,
  Image,
} from "./Tourist.elements";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { useHistory, useLocation } from "react-router-dom";
import toastr from "toastr";
const TouristInfo = () => {
  const userType = useSelector((state) => state.auth.userType);
  const [tourist, setTourist] = useState(null);
  const [loading, setLoading] = useState(false);
  const touristId = new URLSearchParams(useLocation().search).get("touristId");
  let history = useHistory();
  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((element) => {
        // console.log(element.data.data);
        setTourist(element.data.data);
        setLoading(false);
      })
      .catch(function (_error) {});
  }, [touristId]);

  const fetchData = async () => {
    if (userType === "HOTEL") {
      return api.getTouristDataById(touristId);
    } else {
      return api.getTouristDataFromStaffById(touristId);
    }
  };

  const onExistTourist = async (e) => {
    try {
      e.preventDefault();
      const confirmBox = window.confirm("Do you really want to tourist?");
      if (confirmBox === true) {
        const { data } = await api.leaveTourist({ touristId: touristId });
        console.log(data);
        setLoading(true);
        fetchData()
          .then((element) => {
            console.log(element.data.data);
            setTourist(element.data.data);
            setLoading(false);
          })
          .catch(function (_error) {});
        toastr.success(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col>
              {tourist ? (
                <>
                  <PageTitleContainer className="clearfix">
                    <PageTitleLine src="./assets/icons/line.svg" />
                    <PageTitle className="text-muted">
                      {tourist && tourist.touristName}
                    </PageTitle>
                  </PageTitleContainer>
                  <div className="container">
                    <div className="row m-2">
                      {tourist.touristImage ? (
                        <CardImage>
                          <Image src={tourist.touristImage} />
                        </CardImage>
                      ) : (
                        <CardImage>
                          <Image src="https://via.placeholder.com/360x250" />
                        </CardImage>
                      )}

                      {tourist.isForeigner ? (
                        <>
                          {/*  passportNumber */}
                          <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            Passport Number :
                          </div>
                          <div className="col-md-6">
                            {tourist.passportNumber}
                          </div>
                          {/*  nationality */}
                          <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            Nationality :
                          </div>
                          <div className="col-md-6">{tourist.nationality}</div>

                          {/*  tazkeraNumber */}
                          {/* <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            Tazkera Number :
                          </div>
                          <div className="col-md-6">
                            {tourist.tazkeraNumber}
                          </div> */}

                          {/*  provinceArrivedFrom */}
                          <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            Arrived From :
                          </div>
                          <div className="col-md-6">
                            {tourist.provinceArrivedFrom}
                          </div>
                        </>
                      ) : (
                        <>
                          {/*  Address */}
                          <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            last Name :
                          </div>
                          <div className="col-md-6">{tourist.lastName}</div>
                          {/*  Address */}
                          <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            father Name :
                          </div>
                          <div className="col-md-6">{tourist.fatherName}</div>

                          {/*  Address */}
                          <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            Address :
                          </div>
                          <div className="col-md-6">{tourist.address}</div>

                          {/*  City */}
                          <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            City :
                          </div>
                          <div className="col-md-6">{tourist.city}</div>

                          {/*  district */}
                          <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            District :
                          </div>
                          <div className="col-md-6">{tourist.district}</div>
                        </>
                      )}

                      {/* Mobile Number */}
                      <div className="col-md-6 text-capitalize font-weight-bold p-2">
                        Mobile Number :
                      </div>
                      <div className="col-md-6">{tourist.mobileNumber}</div>

                      {tourist.additionalContact && (
                        <>
                          {" "}
                          {/*  grantor */}
                          <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            Additional Contact :
                          </div>
                          <div className="col-md-6">
                            {tourist.additionalContact}
                          </div>
                        </>
                      )}
                      {tourist.vehicalNumberPlate && (
                        <>
                          {" "}
                          {/*  grantor */}
                          <div className="col-md-6 text-capitalize font-weight-bold p-2">
                            vehical Number Plate :
                          </div>
                          <div className="col-md-6">
                            {tourist.vehicalNumberPlate}
                          </div>
                        </>
                      )}

                      {/*  age */}
                      <div className="col-md-6 text-capitalize font-weight-bold p-2">
                        age :
                      </div>
                      <div className="col-md-6">{tourist.age}</div>

                      {/*  gender */}
                      <div className="col-md-6 text-capitalize font-weight-bold p-2">
                        gender :
                      </div>
                      <div className="col-md-6">{tourist.gender}</div>

                      {/*  dateOfArrival */}
                      <div className="col-md-6 text-capitalize font-weight-bold p-2">
                        Date Of Arrival :
                      </div>
                      <div className="col-md-6">{tourist.dateOfArrival}</div>

                      {/*  dateOfDeparture */}
                      <div className="col-md-6 text-capitalize font-weight-bold p-2">
                        Date Of Departure :
                      </div>
                      <div className="col-md-6">{tourist.dateOfDeparture}</div>

                      {/*  roomNumber */}
                      <div className="col-md-6 text-capitalize font-weight-bold p-2">
                        room Number :
                      </div>
                      <div className="col-md-6">{tourist.roomNumber}</div>
                      {/*  reasonOfStay */}
                      <div className="col-md-6 text-capitalize font-weight-bold p-2">
                        reasonOfStay :
                      </div>
                      <div className="col-md-6">{tourist.reasonOfStay}</div>
                    </div>
                    {tourist.accompaniedMember.length > 0 && (
                      <>
                        <div className="text-capitalize font-weight-bold h5 text-primary p-2">
                          accompanied Member
                        </div>
                        <table className="table m-2 table-striped table-bordered">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Relationship</th>
                              <th scope="col">Age</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tourist.accompaniedMember.map((item) => (
                              <tr key={item._id}>
                                <td>
                                  <span className="h5">{item.name}</span>
                                </td>
                                <td>
                                  <span className="h5">
                                    {item.relationship}
                                  </span>
                                </td>
                                <td>
                                  <span className="h5">{item.age}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </>
                    )}
                    {tourist?.dateOfLeave ? (
                      <>
                        <div className="text-danger text-capitalize font-weight-bold p-2 m-2">
                          Date Of Leave : {tourist.dateOfLeave}
                        </div>
                      </>
                    ) : (
                      userType === "HOTEL" && (
                        <>
                          <div className="col-12">
                            <button
                              className="btn btn-danger"
                              onClick={onExistTourist}
                            >
                              Exit Tourist
                            </button>
                          </div>
                        </>
                      )
                    )}
                  </div>
                </>
              ) : loading ? (
                <>
                  <div className="container text-center">
                    <CircularProgress />
                  </div>
                </>
              ) : (
                <>
                  <div className="container">
                    <div className="h5 text-danger text-capitalize font-weight-bold">
                      Not Tourist Available
                    </div>
                  </div>
                </>
              )}
            </Col>
          </Row>

          <Row></Row>
        </Container>
      </Main>
    </>
  );
};

export default TouristInfo;
