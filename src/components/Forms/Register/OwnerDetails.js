import React from "react";

import { useHistory } from "react-router-dom";
import {
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  FormLabelError,
  InputDropdown,
  InputDropdownOption,
} from "./RegisterForm.elements";

const OwnerDetails = (props) => {
  let history = useHistory();
  const {
    handleInputChange,
    error,
    setOwner,
    setOwnerContNo,
    setOwnerPerAdd,
    setOwnerCurrAdd,
    setGrade,
  } = props;
  //   const [owner, setOwner] = useState();
  //   const [ownerContNo, setOwnerContNo] = useState();
  //   const [ownerPerAdd, setOwnerPerAdd] = useState();
  //   const [ownerCurrAdd, setOwnerCurrAdd] = useState();

  //   const [grade, setGrade] = useState("1 star");
  return (
    <>
      <FormGroup>
        <FormLabel>Owner</FormLabel>
        <FormInput>
          <Input
            placeholder="Owner of the hotel"
            onChange={(e) => setOwner(e.target.value)}
          ></Input>
        </FormInput>
        <FormLabelError>{error["owner"]}</FormLabelError>
      </FormGroup>

      <FormGroup>
        <FormLabel>Owner Contact Number</FormLabel>
        <FormInput>
          <Input
            placeholder="Enter Owner Contact Number"
            onChange={(e) => setOwnerContNo(e.target.value)}
          ></Input>
        </FormInput>
        <FormLabelError>{error["owner_contact"]}</FormLabelError>
      </FormGroup>

      <FormGroup>
        <FormLabel>Owner Permanent Address</FormLabel>
        <FormInput>
          <Input
            placeholder="Enter Permanent Address of Owner"
            onChange={(e) => setOwnerPerAdd(e.target.value)}
          ></Input>
        </FormInput>
        <FormLabelError>{error["owner_permanent_address"]}</FormLabelError>
      </FormGroup>

      <FormGroup>
        <FormLabel>Owner Current Address</FormLabel>
        <FormInput>
          <Input
            placeholder="Enter Current Address of Owner"
            onChange={(e) => setOwnerCurrAdd(e.target.value)}
          ></Input>
        </FormInput>
        <FormLabelError>{error["owner_current_address"]}</FormLabelError>
      </FormGroup>

      {/* Licence Upload */}
      <FormGroup>
        <FormLabel>Upload Licence </FormLabel>
        <input
          type="file"
          onChange={(e) => {
            handleInputChange(e);
          }}
          // ref={input => this.fileInput = input}
          className="form-control"
        />
      </FormGroup>
      {/* MAP */}

      {/* Grade */}
      <FormGroup>
        <FormLabel>Grade</FormLabel>
        <FormInput>
          <InputDropdown
            placeholder="Enter Grade"
            onChange={(e) => setGrade(e.target.value)}
          >
            <InputDropdownOption>1 star</InputDropdownOption>
            <InputDropdownOption>2 star</InputDropdownOption>
          </InputDropdown>
        </FormInput>
      </FormGroup>
    </>
  );
};

export default OwnerDetails;
