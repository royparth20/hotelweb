import React, { useEffect, useState } from "react";
import { map } from "rxjs/operators";
import API from "../../../api_test";
import api from "../../../axios";
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
} from "../Tourist.elements";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import toastr from "toastr";
const Tourist = () => {
  const [tourists, setTourists] = useState([]);
  let history = useHistory();
  useEffect(() => {
    fetchData()
      .then((element) => {
        setTourists(element.data.data);
      })
      .catch(function (error) {});
  }, []);

  const fetchData = async () => {
    var config = {
      method: "get",
      url: "tourist/get-tourist",
    };

    return API(config);
  };

  const handleReportTourist = (event) => {
    console.log("event", event.target.id);
    if (event.target.id) {
      let test = {
        name: event.target.name,
        id: event.target.id,
      };
      if (test != {}) {
        <Link
          to={{
            pathname: "/touristReports",

            state: { detail: event.target.id },
          }}
        >
          My Link
        </Link>;
        // history.push({
        //   pathname: '/touristReports',
        //   customNameData: event.target.id,
        // });
        // history.push("/touristReports",event.target.id);
        console.log("tourists", test);
      }
    }
  };
  const handleAlert = async (e, id) => {
    try {
      // console.log(id);
      const { data } = await api.raiseTouristAlert(id);
      // console.log(data);
      toastr.success(data.data);
    } catch (error) {
      toastr.error(error.response.data.message);
    }
    // raiseTouristAlert
  };

  const handleTouristDetails = (_id) => {
    history.push(`/touristInfo?touristId=${_id}`);
  };
  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col>
              <PageTitleContainer className="clearfix">
                <PageTitleLine src="./assets/icons/line.svg" />
                <PageTitle>TOURIST</PageTitle>
                <div className="float-btn-tourist float-right">
                  <Link to="/touristDetails">
                    <div className="btn btn-primary">Create Tourist</div>
                  </Link>
                </div>
              </PageTitleContainer>
            </Col>
          </Row>

          <Row>
            {tourists.map((element) => (
              <Col sm={12} lg={4}>
                <CardWrapper
                  onClick={() => handleTouristDetails(element._id)}
                  style={{ cursor: "pointer" }}
                >
                  {element.touristImage ? (
                    <CardImage>
                      <Image src={element.touristImage} />
                    </CardImage>
                  ) : (
                    <CardImage>
                      <Image src="https://via.placeholder.com/360x250" />
                    </CardImage>
                  )}
                  <CardInfo>
                    <CardName>{element.touristName}</CardName>
                    <div className="row">
                      <div className="col-md-6">
                        <CardButton
                          className="btn-danger btn"
                          onClick={(e) => handleAlert(e, element._id)}
                        >
                          Alert
                        </CardButton>
                      </div>
                      <div className="col-md-6">
                        <Link to={`/touristReports?id=${element._id}`}>
                          <CardReportButton
                            name={element.touristName}
                            id={element._id}
                            onClick={handleReportTourist}
                            className="btn-primary btn"
                          >
                            Report
                          </CardReportButton>
                        </Link>
                      </div>
                    </div>
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

export default Tourist;
