import React, { useEffect, useState } from "react";
import { map } from "rxjs/operators";
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
} from "./Staff.elements";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Staff = () => {
  const [staffs, setstaffs] = useState([]);
  let history = useHistory();
  useEffect(() => {
    fetchData()
      .then((element) => {
        // console.log(element);
        setstaffs(element.data.data);
      })
      .catch(function (error) {});
  }, []);

  const fetchData = async () => {
    return api.getStaffMembers();
  };

  const handleReportstaff = (event) => {
    console.log("eent", event.target.id);
    if (event.target.id) {
      let test = {
        name: event.target.name,
        id: event.target.id,
      };
      if (test != {}) {
        <Link
          to={{
            pathname: "/staffReports",

            state: { detail: event.target.id },
          }}
        >
          {" "}
          My Link{" "}
        </Link>;
        // history.push({
        //   pathname: '/staffReports',
        //   customNameData: event.target.id,
        // });
        // history.push("/staffReports",event.target.id);
        console.log("staffs", test);
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
                <PageTitle>Staff</PageTitle>
              </PageTitleContainer>
            </Col>
          </Row>

          <Row>
            {staffs.map((element) => (
              <Col sm={12} lg={4} key={element._id}>
                <CardWrapper>
                  <CardInfo className="card card-hover">
                    <div className="card-body">
                      <CardName className="card-title">
                        {element.staffName}
                      </CardName>
                      
                      <div class="mb-2 text-muted">
                        <span className="card-text">
                          Email : {element?.staffEmail}
                          <br />
                        </span>
                        <span className="card-text">
                          Contact : {element?.staffContact}
                          <br />
                        </span>
                        <span className="card-text">
                          Address : {element?.staffAddress}
                          <br />
                        </span>
                      </div>

                      <a href="#" class="card-link">
                        Card link
                      </a>
                      <a href="#" class="card-link">
                        Another link
                      </a>
                    </div>
                    {/* <div className="row">
                      <div className="col-md-6">
                        <CardButton className="btn-danger btn">
                          Alert
                        </CardButton>
                      </div>
                      <div className="col-md-6">
                        <Link to={`/staffReports?id=${element._id}`}>
                          <CardReportButton
                            name={element.staffName}
                            id={element._id}
                            onClick={handleReportstaff}
                            className="btn-primary btn"
                          >
                            Report
                          </CardReportButton>
                        </Link>
                      </div>
                    </div> */}
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

export default Staff;
