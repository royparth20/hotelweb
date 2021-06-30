import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import api from "../../axios";
import { Main } from "./Staff.elements";
import { Modal, Button, Form } from "react-bootstrap";
import { Container } from "styled-bootstrap-grid";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import toastr from "toastr";
const StaffDetails = () => {
  const staffId = new URLSearchParams(useLocation().search).get("staffId");
  const refSwitch = useRef();
  let history = useHistory();
  // if (branchId !== null || branchId !== undefined) {
  const [staffMemberData, setStaffMemberData] = useState(null);

  const branches = useSelector((state) => state.user.branches);
  const [checkedState, setCheckedState] = useState([]);

  useEffect(() => {
    try {
      setCheckedState([]);
      branches.map((type) => {
        // console.log(type);
        setCheckedState((checkedState) => [
          ...checkedState,
          staffMemberData &&
            staffMemberData.assignedHotel &&
            staffMemberData?.assignedHotel.includes(type._id),
        ]);
      });
      // setCheckedState(new Array(branches.length).fill(false));
      // console.log(checkedState.length);
    } catch (err) {
      console.error(err);
    }
  }, [staffMemberData, setStaffMemberData, branches]);
  useEffect(() => {
    fetchData()
      .then((element) => {
        // console.log(element);
        setStaffMemberData(element.data.data);
      })
      .catch(function (error) {
        console.error("ERR ==> ", error);
      });
  }, []);
  const fetchData = async () => {
    if (staffId) return await api.getStaffMemberByStaffId(staffId);
    //     return await api.getStaffMembers();
  };

  const handleOnChange = (e, position) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? e.target.checked : item;
    });

    // console.log(updatedCheckedState);
    setCheckedState(updatedCheckedState);
  };

  const onSubmit = async (e) => {
    try {
      let payload = { ...staffMemberData };

      payload.assignedHotel = [];
      // payload._id = undefined;
      delete payload._id;
      // delete payload.assignedHotel;

      branches.map((type, index) => {
        // console.log(index, type?.address, checkedState[index]);
        if (checkedState[index]) {
          payload.assignedHotel = [...payload.assignedHotel, type._id];
        }
      });
      const { active, parentHotel, staffPassword, token, ...payloadData } =
        payload;
      console.table({ payloadData });
      const { data } = await api.updateStaff(payloadData, staffId);
      // updateStaff
      // console.log(data);
      toastr.success(data.data);
      //       history.replace("/home");
    } catch (error) {
      toastr.error(error.response.data.message);
      //       console.log(error.response.data);
    }
  };
  return (
    <>
      <Main>
        <Container>
          {staffMemberData && (
            <>
              <Modal.Header>
                <Modal.Title>
                  <pre>
                    {staffMemberData?.staffName + " " || ""}
                    Profile Edit
                  </pre>
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
                  <Form.Group className="row" controlId="staffForm.status">
                    <Form.Label className="col-md-3 col-3 text-muted">
                      Staff Status
                    </Form.Label>

                    <Form.Check
                      className="col-md-9 col-9"
                      type="switch"
                      id="custom-switch"
                      label="Active Staff"
                      defaultChecked={staffMemberData?.enable}
                      onChange={(e) => {
                        setStaffMemberData({
                          ...staffMemberData,
                          enable: e.target.checked,
                        });
                      }}
                    />
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
                            label={type?.address}
                            name="branches"
                            type="switch"
                            id={`inline-${type._id}-1`}
                            defaultChecked={checkedState[index]}
                            // onChange={(e) => {
                            //   console.log(index);
                            // }}
                            onClick={(e) => {
                              handleOnChange(e, index);
                              // console.log(index);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={onSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </>
          )}
        </Container>
      </Main>
    </>
  );
};

export default StaffDetails;
