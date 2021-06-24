import React, { useEffect, useState } from "react";
import { map } from "rxjs/operators";
import {
  Main,
  PageTitleContainer,
  PageTitle,
  PageTitleLine,
  CardWrapper,
  CardImage,
  CardInfo,
  CardName,
  CardButton,
} from "./Blacklist.elements";
import { Container, Row, Col } from "styled-bootstrap-grid";
import API from "../../api_test";
const Blacklist = () => {
  const [blockLists, setBlockLists] = useState([]);
  useEffect(() => {
    fetchData()
      .then((bl) => {
        console.log("sdfdsf", bl);
        setBlockLists(bl.data.data);
      })
      .catch(function (error) {
        console.log("sdfsdf", error);
      });
  }, []);
  const fetchData = async () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "hotel/blacklist",
    };

    return API(config);
  };

  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col>
              <PageTitleContainer>
                <PageTitleLine src="./assets/icons/line.svg" />
                <PageTitle>BLACKLIST</PageTitle>
              </PageTitleContainer>
            </Col>
          </Row>

          <Row>
            {blockLists.map((bl) => (
              <Col sm={12} lg={4}>
                <CardWrapper>
                  <CardImage src="https://via.placeholder.com/360x200" />
                  <CardInfo>
                    <CardName>{bl?.touristId?.touristName}</CardName>
                    <CardButton>Download CSV</CardButton>
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

export default Blacklist;
