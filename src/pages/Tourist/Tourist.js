import React, { useEffect, useState } from "react";
import { map } from "rxjs/operators";
import API from "../../api_test";
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
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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
    console.log("eent", event.target.id);
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
          {" "}
          My Link{" "}
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

  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col>
              <PageTitleContainer>
                <PageTitleLine src="./assets/icons/line.svg" />
                <PageTitle>TOURIST</PageTitle>
              </PageTitleContainer>
            </Col>
          </Row>

          <Row>
            {tourists.map((element) => (
              <Col sm={12} lg={4}>
                <CardWrapper>
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
                        <CardButton className="btn-danger btn">
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
