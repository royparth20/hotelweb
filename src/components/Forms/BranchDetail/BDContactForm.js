import React from "react";
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  FormTitle,
} from "./BDContactForm.elements";

const BDContactForm = (props) => {
  const { updateBEmail, updateBNumber, email, mobile } = props;
  return (
    <>
      <FormContainer>
        <FormTitle>
          <p>Contacts</p>
        </FormTitle>
        <FormGroup>
          <FormLabel>Branch Email</FormLabel>
          <FormInput>
            <Input
              placeholder="Enter Email"
              value={email}
              onChange={(e) => updateBEmail(e.target.value)}
            ></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Branch Number</FormLabel>
          <FormInput>
            <Input
              placeholder="Enter Phone number"
              value={mobile}
              onChange={(e) => updateBNumber(e.target.value)}
            ></Input>
          </FormInput>
        </FormGroup>
      </FormContainer>
    </>
  );
};

export default BDContactForm;
