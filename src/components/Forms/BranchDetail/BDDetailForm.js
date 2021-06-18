import React from 'react'
import { FormContainer, 
         FormGroup, 
         FormLabel, 
         FormInput, 
         Input, 
         TextArea,
         FormTitle
       } from './BDDetailForm.elements'

const BDDetailForm = (props) => {
  const {updatePNam,updateBMName,updateAddress} = props;
 
  return (
    <>
      <FormContainer>
        <FormTitle>
         <p>Details</p>
        </FormTitle>
        <FormGroup>
          <FormLabel>Parent Hotel</FormLabel>
          <FormInput>
            <Input placeholder="Enter Hotel Name"  onChange={e => updatePNam(e.target.value)}></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Branch Manager Name</FormLabel>
          <FormInput>
            <Input placeholder="Manager Name"  onChange={e => updateBMName(e.target.value)}></Input>
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel>Address</FormLabel>
          <FormInput>
            <TextArea placeholder="Address"  onChange={e => updateAddress(e.target.value)}></TextArea>
          </FormInput>
        </FormGroup>
      </FormContainer>
    </>
  )
}

export default BDDetailForm
