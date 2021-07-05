import React from "react";
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  Button,
  FormTitle,
  FileB,
} from "./TDRightDetailForm.elements";

const TDRightDetailForm = (props) => {
  const {
    uploadVisa,
    updateTLname,
    updateNumber,
    updateJob,
    updateNationality,
    updateMobile,
    updateArrivedFrom,
    updateTnumber,
    updateCity,
    updateVisaNumber,
    ch,
    type,
    changePassport,
  } = props;
  return (
    <>
      {/* <FormContainer> */}
      <FormTitle>
        <p></p>
      </FormTitle>

      <FormGroup>
        <FormLabel>Last Name</FormLabel>
        <FormInput>
          <Input
            tabIndex={2}
            placeholder="Enter Last Name"
            onChange={(e) => updateTLname(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Nationality</FormLabel>
        <FormInput>
          <Input
            required
            tabIndex={4}
            placeholder="Enter Nationality"
            onChange={(e) => updateNationality(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Passport Number</FormLabel>
        <FormInput>
          <Input
            required
            tabIndex={6}
            placeholder="Enter Passport Number"
            onChange={(e) => updateNumber(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Tezkera Number</FormLabel>
        <FormInput>
          <Input
            tabIndex={8}
            placeholder="Enter Tazkera Number"
            onChange={(e) => updateTnumber(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Visa Number</FormLabel>
        <FormInput>
          <Input
            tabIndex={10}
            placeholder="Enter Visa Number"
            onChange={(e) => updateVisaNumber(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>
      {type === "true" && (
        <FormGroup>
          <FormLabel>City</FormLabel>
          <FormInput>
            <Input
              tabIndex={12}
              placeholder="City"
              onChange={(e) => updateCity(e.target.value)}
            ></Input>
          </FormInput>
        </FormGroup>
      )}
      <FormGroup>
        <FormLabel>Mobile Number</FormLabel>
        <FormInput>
          <Input
            required
            tabIndex={14}
            placeholder="Enter Mobile Number"
            onChange={(e) => updateMobile(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Province arrived from</FormLabel>
        <FormInput>
          <Input
            required
            tabIndex={16}
            placeholder="Province arrived from"
            onChange={(e) => updateArrivedFrom(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Job</FormLabel>
        <FormInput>
          <Input
            tabIndex={18}
            placeholder="Job"
            onChange={(e) => updateJob(e.target.value)}
          ></Input>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Upload visa </FormLabel>
        <br />

        <FileB tabIndex={20} onChange={uploadVisa}></FileB>
      </FormGroup>
      <FormGroup>
        <FormLabel>Upload passport/tazkera</FormLabel>
        <br></br>
        <FileB tabIndex={22} onChange={changePassport}></FileB>
      </FormGroup>
      {/* </FormContainer> */}
    </>
  );
};

export default TDRightDetailForm;
