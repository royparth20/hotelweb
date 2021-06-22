import React, { useState, useEffect } from "react";
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  TextArea,
  FormTitle,
} from "./BDDetailForm.elements";

import { useSelector } from "react-redux";
const BDDetailForm = (props) => {
  const { updatePNam, updateBMName, updateAddress } = props;
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log("BDDetails ==> ", user);
  }, [user]);
  return (
    <>
      <FormContainer>
        <FormTitle>
          <p>Details</p>
        </FormTitle>
        <FormGroup>
          <FormLabel>Parent Hotel</FormLabel>
          <FormInput>
            <Input
              placeholder="Enter Hotel Name"
              value={user && user.hotelName}
              disabled
              onChange={(e) => updatePNam(e.target.value)}
            ></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Branch Manager Name</FormLabel>
          <FormInput>
            <Input
              placeholder="Manager Name"
              onChange={(e) => updateBMName(e.target.value)}
            ></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Address</FormLabel>
          <FormInput>
            <TextArea
              placeholder="Address"
              onChange={(e) => updateAddress(e.target.value)}
            ></TextArea>
          </FormInput>
        </FormGroup>
      </FormContainer>
    </>
  );
};

export default BDDetailForm;
