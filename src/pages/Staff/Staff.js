import React, { useEffect, useState, useRef } from "react";
import { map } from "rxjs/operators";
import { useSelector } from "react-redux";
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
import { Modal, Button, Form } from "react-bootstrap";
import { Container, Col, Row } from "styled-bootstrap-grid";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Staff = () => {
  const branchId = new URLSearchParams(useLocation().search).get("branchId");
  const [staffs, setstaffs] = useState([]);
  let history = useHistory();
  // if (branchId !== null || branchId !== undefined) {
  useEffect(() => {
    fetchData()
      .then((element) => {
        // console.log(element);
        setstaffs(element.data.data);
      })
      .catch(function (error) {
        console.error("ERR ==> ", error);
      });
  }, []);
  // } else {

  // }
  const fetchData = async () => {
    if (branchId) return await api.getStaffMemberById(branchId);
    return await api.getStaffMembers();
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
          My Link
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const branches = useSelector((state) => state.user.branches);
  const [staffMemberData, setStaffMemberData] = useState({});
  const [checkedState, setCheckedState] = useState([]);
  const handleEditBtn = (e) => {
    // console.table(data);
    const data = e.target?.dataset?.staff;
    if (data) setStaffMemberData(JSON.parse(data));
    console.log("handleEditBtn == >", staffMemberData, checkedState);
    // console.log(new Array(branches.length).fill(false));
    // branches.map((type) => {
    //   setCheckedState(
    //     checkedState.push(
    //       staffMemberData &&
    //         staffMemberData.assignedHotel &&
    //         staffMemberData?.assignedHotel.includes(type._id)
    //     )
    //   );
    // });
    // setCheckedState(new Array(branches.length).fill(false));
    handleShow();
  };

  const handleOnChange = (e, position) => {
    console.log(checkedState.length);
    const updatedCheckedState = checkedState.map((item, index) => {
      console.log(index === position ? !item : item);
      return index === position ? !item : item;
    });

    // setCheckedState(updatedCheckedState);
    console.log(e.target.checked, position, updatedCheckedState);
  };

  // const updatedCheckedState = checkedState.map((item, index) =>
  //     index === position ? !item : item
  //   );
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
                {/* {console.log(element)} */}
                <CardWrapper>
                  <CardInfo className="card card-hover">
                    <div className="card-body">
                      <CardName className="card-title">
                        {element.staffName}
                      </CardName>

                      <div className="mb-2 text-muted">
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

                      <button
                        className="btn btn-warning card-link"
                        onClick={(e) => handleEditBtn(e)}
                        data-staff={JSON.stringify(element)}
                      >
                        Edit
                      </button>
                      {/* <Link to="#" className="card-link">
                        Another link
                      </Link> */}
                    </div>
                  </CardInfo>
                </CardWrapper>
              </Col>
            ))}
          </Row>
        </Container>
      </Main>
      <Modal centered show={show} onHide={handleClose}>
        {staffMemberData && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                Staff Member Edit
                {/* {staffMemberData?.staffName || "Staff Member Details"} */}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className="m-2">
                <Form.Group className="row" controlId="staffForm.name">
                  <Form.Label className="col-md-3 col-3 text-muted">
                    Staff Name
                  </Form.Label>

                  <Form.Control
                    className="col-md-9 col-9"
                    type="text"
                    value={staffMemberData?.staffName}
                    placeholder="Enter Staff Name"
                    onChange={(e) => {
                      setStaffMemberData({
                        ...staffMemberData,
                        staffName: e.target.value,
                      });
                    }}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="row" controlId="staffForm.number">
                  <Form.Label className="col-md-3 col-3 text-muted">
                    Staff Phone Number
                  </Form.Label>

                  <Form.Control
                    value={staffMemberData?.staffContact}
                    onChange={(e) => {
                      setStaffMemberData({
                        ...staffMemberData,
                        staffContact: e.target.value,
                      });
                    }}
                    className="col-md-9 col-9"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder="Phone No."
                    // onChange={(e) => updateSNumber(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="row" controlId="staffForm.emial">
                  <Form.Label className="col-md-3 col-3 text-muted">
                    Staff Email
                  </Form.Label>

                  <Form.Control
                    value={staffMemberData?.staffEmail}
                    className="col-md-9 col-9"
                    type="email"
                    disabled
                    placeholder="Email address"
                    // onChange={(e) => updateSEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="row" controlId="staffForm.address">
                  <Form.Label className="col-md-3 col-3 text-muted">
                    Address
                  </Form.Label>

                  <Form.Control
                    value={staffMemberData?.staffAddress}
                    className="col-md-9 col-9"
                    as="textarea"
                    rows={3}
                    onChange={(e) => {
                      setStaffMemberData({
                        ...staffMemberData,
                        staffAddress: e.target.value,
                      });
                    }}
                    placeholder="Address"
                    // onChange={(e) => updateAddress(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="row">
                  <Form.Label className="col-md-3 col-3 text-muted">
                    Assign Staff
                  </Form.Label>
                  <div className="col-md-9 col-9">
                    {branches.map((type, index) => (
                      <div
                        key={`inline-${type._id}`}
                        className="mb-3"
                        key={type._id}
                      >
                        <Form.Check
                          inline
                          label={type?.address}
                          name="branches"
                          type="checkbox"
                          value={type._id}
                          // defaultChecked={
                          //   staffMemberData &&
                          //   staffMemberData.assignedHotel &&
                          //   staffMemberData?.assignedHotel.includes(type._id)
                          // }
                          id={`inline-${type._id}-1`}
                          defaultChecked={checkedState[index]}
                          onChange={(e) => handleOnChange(e, index)}
                          // onChange={(e) => {
                          //   console.log(e.target);
                          //   // setStaffMemberData({
                          //   //   ...staffMemberData,
                          //   //   assignedHotel: [
                          //   //     ...staffMemberData.assignedHotel,
                          //   //     e.target.value,
                          //   //   ],
                          //   // });
                          // }}
                        />
                      </div>
                    ))}
                  </div>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default Staff;
