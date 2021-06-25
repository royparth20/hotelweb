import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import { FormContainer, 
         FormGroup, 
         FormLabel, 
         FormInput, 
         Input, 
         FormTitle
       } from './CPContactForm.elements'

const CPContactForm = (props) => {
  let history = useHistory();
  const {updateName,updateEmail} = props;
  const {updateNumber} = props;
    const [error, setError] = useState({});

  return (
    <>
      <FormContainer>
        <FormTitle>
         <p>Contacts</p>
        </FormTitle>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput>
            <Input placeholder="Enter Guests Name" readOnly="readonly" value={props.name} disabled  onChange={e => updateName(e.target.value)}></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Number</FormLabel>
          <FormInput>
            <Input placeholder="" value={props.num} onChange={e => updateNumber(e.target.value)}></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput>
            <Input placeholder="Email" value={props.email} onChange={e => updateEmail(e.target.value)} disabled></Input>
          </FormInput>
        </FormGroup>
      </FormContainer>
    </>
  )
}

export default CPContactForm
