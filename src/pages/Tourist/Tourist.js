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
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import toastr from "toastr";
import { parse } from "query-string";
import { useLocation, useParams } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";
const Tourist = () => {
  const params = useParams();
  const { search } = useLocation();
  if (search) console.log("ShowDetails", params.id);
  const [tourists, setTourists] = useState([]);
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [modalText, setModalText] = useState("");
  const [touristIDAlert, settouristIdAlert] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const fetchData = async () => {
      var config = {
        method: "get",
        url: "tourist/get-tourist",
      };

      return API(config);
    };

    const fetchTouristByBranch = async () => {
      try {
        const { data } = await api.getTouristDataByBranch(params.id);
        // console.log("fetchTouristByBranch", data.data);
        setTourists(data.data);
      } catch (error) {}
    };
    if (params.id === undefined) {
      fetchData()
        .then((element) => {
          setTourists(element.data.data);
        })
        .catch(function (_error) {});
    } else {
      fetchTouristByBranch();
    }
  }, []);

  const handleReportTourist = (event) => {
    console.log("event", event.target.id);
    if (event.target.id) {
      let test = {
        name: event.target.name,
        id: event.target.id,
      };
      if (test !== {}) {
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
    setModalText("");
    settouristIdAlert(id || null);
    handleShow();

    // raiseTouristAlert
  };
  const handleModalSubmitAlert = async (e) => {
    e.preventDefault();
    try {
      // console.log(touristIDAlert);
      if (touristIDAlert === null) {
        return;
      }
      const alertData = {
        comment: modalText,
      };
      const { data } = await api.raiseTouristAlert(alertData, touristIDAlert);
      // console.log(data);
      toastr.success(data.data);
      handleClose();
    } catch (error) {
      toastr.error(error.response.data.message);
    }
  };

  const handleModalClose = (e) => {
    handleClose();
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
                <PageTitleLine src="/assets/icons/line.svg" />
                <PageTitle>TOURIST</PageTitle>
                <div className="float-btn-tourist float-right">
                  {params.id === null || params.id === undefined ? (
                    <Link to="/touristDetails">
                      <div className="btn btn-primary">Create Tourist</div>
                    </Link>
                  ) : (
                    <Link to={`/touristDetails/${params.id}`}>
                      <div className="btn btn-primary">Create Tourist</div>
                    </Link>
                  )}
                </div>
              </PageTitleContainer>
            </Col>
          </Row>

          <Row>
            {tourists.map((element) => (
              <Col sm={12} lg={4} key={element._id}>
                <CardWrapper style={{ cursor: "pointer" }}>
                  {element.touristImage ? (
                    <CardImage
                      onClick={() => handleTouristDetails(element._id)}
                    >
                      <Image src={element.touristImage} />
                    </CardImage>
                  ) : (
                    <CardImage
                      onClick={() => handleTouristDetails(element._id)}
                    >
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

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Alert Tourist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-4">
              <label htmlFor="ModalText">Comment</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="comment"
                id="comment"
                onChange={(e) => setModalText(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSubmitAlert}>
            Alert
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Tourist;
