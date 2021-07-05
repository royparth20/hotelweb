import React, { useEffect, useState } from "react";
import { map } from "rxjs/operators";
import API from "../../api_test";
import api from "../../axios";
import {
  Main,
  PageTitleContainer,
  PageTitle,
  PageTitleLine,
  CardWrapper,
  CardImage,
  CardInfo,
  Image,
  CardReportButton,
  CardName,
  CardButton,
} from "./Tourist.elements";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import toastr from "toastr";
const TouristInfo = () => {
  const [tourist, setTourist] = useState(null);

  const touristId = new URLSearchParams(useLocation().search).get("touristId");
  let history = useHistory();
  useEffect(() => {
    fetchData()
      .then((element) => {
        console.log(element.data.data);
        setTourist(element.data.data);
      })
      .catch(function (error) {});
  }, [touristId]);

  const fetchData = async () => {
    return api.getTouristDataById(touristId);
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
                      {/* Mobile Number */}
                      <div className="col-md-6 font-weight-bold p-2">
                        Mobile Number :
                      </div>
                      <div className="col-md-6">{tourist.mobileNumber}</div>
                      {/*  passportNumber */}
                      <div className="col-md-6 font-weight-bold p-2">
                        Passport Number :
                      </div>
                      <div className="col-md-6">{tourist.passportNumber}</div>

                      {/*  nationality */}
                      <div className="col-md-6 font-weight-bold p-2">
                        Nationality :
                      </div>
                      <div className="col-md-6">{tourist.nationality}</div>

                      {/*  tazkeraNumber */}
                      <div className="col-md-6 font-weight-bold p-2">
                        Tazkera Number :
                      </div>
                      <div className="col-md-6">{tourist.tazkeraNumber}</div>

                      {/*  dateOfArrival */}
                      <div className="col-md-6 font-weight-bold p-2">
                        Date Of Arrival :
                      </div>
                      <div className="col-md-6">{tourist.dateOfArrival}</div>

                      {/*  dateOfDeparture */}
                      <div className="col-md-6 font-weight-bold p-2">
                        Date Of Departure :
                      </div>
                      <div className="col-md-6">{tourist.dateOfDeparture}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="container">
                    <div className="h5 text-danger font-weight-bold">
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
