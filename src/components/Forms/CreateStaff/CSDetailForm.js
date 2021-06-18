import React from 'react'
import { FormContainer, 
         FormGroup, 
         FormLabel, 
         FormInput, 
         Input, 
         TextArea,
         FormTitle
       } from './CSDetailForm.elements'

const CSDetailForm = (props) => {
  const {updateSName,updateSNumber,updateAddress,updateSEmail,updatePass} = props;
  return (
    <>
      <FormContainer>
        <FormTitle>
         <p>Details</p>
        </FormTitle>
        <FormGroup>
          <FormLabel>Staff Name</FormLabel>
          <FormInput>
            <Input placeholder="Enter Staff Name" onChange={e => updateSName(e.target.value)}></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Staff Password</FormLabel>
          <FormInput>
            <Input placeholder="" onChange={e => updatePass(e.target.value)}></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Staff Phone Number</FormLabel>
          <FormInput>
            <Input placeholder="Phone No." onChange={e => updateSNumber(e.target.value)}></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Staff Email</FormLabel>
          <FormInput>
            <Input placeholder="Email address" onChange={e => updateSEmail(e.target.value)}></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Address</FormLabel>
          <FormInput>
            <TextArea placeholder="Address" onChange={e => updateAddress(e.target.value)}></TextArea>
          </FormInput>
        </FormGroup>
      </FormContainer>
    </>
  )
}

export default CSDetailForm
