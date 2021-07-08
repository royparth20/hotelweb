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
  const { updateAddress, hname } = props;

  return (
    <>
      <FormContainer>
        <FormTitle>
          <p>Details</p>
        </FormTitle>
        {hname && (
          <FormGroup>
            <FormLabel>Hotel Name</FormLabel>
            <FormInput>
              <Input
                placeholder="Hotel Name"
                readOnly="readonly"
                disabled
                value={hname}
                onChange={(e) => updateHName(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        )}

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
        {hname && (
          <FormGroup>
            <Link to="/branchDetails">
              <OtherBranchesBtn>Other Branches</OtherBranchesBtn>
            </Link>
          </FormGroup>
        )}
      </FormContainer>
    </>
  );
};

export default CPDetailForm;
