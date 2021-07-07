import React, { useEffect, useState, useRef, useCallback } from "react";
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
import toastr from "toastr";
const Staff = () => {
  const branchId = new URLSearchParams(useLocation().search).get("branchId");
  const user = useSelector((state) => state.user);
  const [staffs, setstaffs] = useState([]);
  const refBtn = useRef();
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
  }, [branchId, user]);
  // } else {

  // }
  const fetchData = async () => {
    if (branchId) return await api.getStaffMemberById(branchId);
    // console.log(user._id);
    return await api.getStaffMemberById(user._id);
  };

  const handleReportstaff = (event) => {
    // console.log("eent", event.target.id);
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
        // console.log("staffs", test);
      }
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const branches = useSelector((state) => state.user.branches);
  const [staffMemberData, setStaffMemberData] = useState(null);
  const [checkedState, setCheckedState] = useState([]);

  // const handleEditBtn = async (e) => {
  //   // e.preventDefault();
  //   return;
  //   // if (staffMemberData && show === false) handleShow();
  // };
  // useEffect(() => {
  //   try {
  //     // setStaffMemberData(data);
  //     setCheckedState([]);
  //     branches.map((type) => {
  //       // console.log(type);
  //       setCheckedState((checkedState) => [
  //         ...checkedState,
  //         staffMemberData &&
  //           staffMemberData.assignedHotel &&
  //           staffMemberData?.assignedHotel.includes(type._id),
  //       ]);
  //     });
  //     // setCheckedState(new Array(branches.length).fill(false));
  //     console.log(checkedState.length);
  //     if (staffMemberData) handleShow();
  //   } catch (err) {
  //     console.error(err);
  //     handleClose();
  //   }
  // }, [staffMemberData, setStaffMemberData]);
  const handleEditBtn = useCallback(async (e) => {
    try {
      // setStaffMemberData(data);
      setCheckedState([]);
      await branches.map((type) => {
        // console.log(type);
        setCheckedState((checkedState) => [
          ...checkedState,
          staffMemberData &&
            staffMemberData.assignedHotel &&
            staffMemberData?.assignedHotel.includes(type._id),
        ]);
      });
      // setCheckedState(new Array(branches.length).fill(false));
      // console.log(staffMemberData, branches, checkedState.length);
      if (staffMemberData || checkedState.length > 0) handleShow();
    } catch (err) {
      console.error(err);
      handleClose();
    }
  });
  // useEffect(() => {
  //   // console.table(checkedState);
  // }, [checkedState, setCheckedState]);
  const handleOnChange = (e, position) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item;
    });

    setCheckedState(updatedCheckedState);
  };

  const onSubmit = async (e) => {
    try {
      let payload = { ...staffMemberData, assignHotel: [] };
      const id = payload._id;
      payload.assignedHotel = [];
      payload._id = undefined;
      branches.map((type, index) => {
        // console.log(index, type?.address, checkedState[index]);
        if (checkedState[index]) {
          payload.assignHotel = [...payload.assignHotel, type._id];
        }
      });
      // console.log(payload);
      const { data } = await api.updateStaff(payload, id);
      // updateStaff
      // console.log(data);
      toastr.success(data.data);
      history.replace("/home");
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

                      <Link
                        className="btn btn-warning card-link"
                        to={`/staff-details?staffId=${element._id}`}
                      >
                        Edit
                      </Link>
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
              <Button variant="primary" onClick={onSubmit}>
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
