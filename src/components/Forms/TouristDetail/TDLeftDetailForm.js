import React, { useEffect } from "react";
import {
  FormContainer,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  FileInputContainer,
  FileInputB,
  Dt,
  FileB,
  Select,
  Options,
} from "./TDLeftDetailForm.elements";
import { Container, Row, Col } from "styled-bootstrap-grid";

const TDLeftDetailForm = (props) => {
  const {
    updateReasonOfStay,
    updateRoomNumber,
    updateTFname,
    updateCountry,
    updateCountryArrivedFrom,
    updateDtArrival,
    updateDtDeparture,
    updateAddress,
    updateDistrict,
    updatePhoto,
    ch,
    setType,
    updateTFatherName,
    type,
  } = props;

  // useEffect(() => {
  //   console.log("useEffect ==> ", type, typeof type);
  // }, [type]);
  return (
    <>
      {/* <FormContainer> */}
      <FormTitle>{/* <p>Details</p> */}</FormTitle>

      <FormGroup>
        <FormLabel>First Name</FormLabel>
        <FormInput>
          <Input
            required
            placeholder="Enter Tourist First Name"
            tabIndex={3}
            onChange={(e) => updateTFname(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>
      <FormGroup>
        <FormLabel>Father Name</FormLabel>
        <FormInput>
          <Input
            required
            placeholder="Father Name"
            tabIndex={3}
            onChange={(e) => updateTFatherName(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>
      <FormGroup>
        <FormLabel>Resident Country</FormLabel>
        <FormInput>
          <Input
            required
            placeholder="Resident Country"
            tabIndex={5}
            onChange={(e) => updateCountry(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Date of Arrival In The Hotel</FormLabel>
        <FormInput>
          <Dt
            required
            tabIndex={7}
            onChange={(e) => updateDtArrival(e.target.value)}
          ></Dt>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Date Of Departure From Hotel</FormLabel>
        <FormInput>
          <Dt
            required
            placeholder="Enter Mobile Number"
            tabIndex={9}
            onChange={(e) => updateDtDeparture(e.target.value)}
          ></Dt>
        </FormInput>
      </FormGroup>

      {type && type === "true" ? (
        <>
          {/* {console.log("Show ", type)} */}
          <FormGroup>
            <FormLabel>Address</FormLabel>
            <FormInput>
              <Input
                placeholder="Address"
                tabIndex={11}
                onChange={(e) => updateAddress(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>

          <FormGroup>
            <FormLabel>District</FormLabel>
            <FormInput>
              <Input
                placeholder="District"
                tabIndex={13}
                onChange={(e) => updateDistrict(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        </>
      ) : (
        <></>
      )}
      <FormGroup>
        <FormLabel>Country Arrived From</FormLabel>
        <FormInput>
          <Input
            required
            placeholder="Country Arrived From"
            tabIndex={type === "true" ? 15 : 13}
            onChange={(e) => updateCountryArrivedFrom(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Reason of stay</FormLabel>
        <FormInput>
          <Input
            required
            placeholder="Reason of stay"
            tabIndex={type === "true" ? 17 : 15}
            onChange={(e) => updateReasonOfStay(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Room number</FormLabel>
        <FormInput>
          <Input
            required
            placeholder="Room number"
            tabIndex={type === "true" ? 19 : 17}
            onChange={(e) => updateRoomNumber(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Photo Of Tourist</FormLabel>
        <br></br>
        <FileB
          tabIndex={type === "true" ? 21 : 19}
          onChange={updatePhoto}
        ></FileB>
      </FormGroup>

      {/* </FormContainer> */}
    </>
  );
};

export default TDLeftDetailForm;
