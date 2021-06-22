import React, { useState } from "react";
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  FormTitle,
  OtherBranchesBtn,
} from "./CPDetailForm.elements";
import { Link } from "react-router-dom";
const CPDetailForm = (props) => {
  const { updateHName } = props;
  const { updateAddress } = props;

  return (
    <>
      <FormContainer>
        <FormTitle>
          <p>Details</p>
        </FormTitle>
        <FormGroup>
          <FormLabel>Hotel Name</FormLabel>
          <FormInput>
            <Input
              placeholder="Enter Guests Name"
              readOnly="readonly"
              value={props.hName}
              onChange={(e) => updateHName(e.target.value)}
            ></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Address</FormLabel>
          <FormInput>
            <Input
              placeholder="Address"
              value={props.add}
              onChange={(e) => updateAddress(e.target.value)}
            ></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <Link to="/branchDetails">
            <OtherBranchesBtn>Other Branches</OtherBranchesBtn>
          </Link>
        </FormGroup>
      </FormContainer>
    </>
  );
};

export default CPDetailForm;
