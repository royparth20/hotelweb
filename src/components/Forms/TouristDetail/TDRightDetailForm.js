import React from 'react'
import { FormContainer, 
         FormGroup, 
         FormLabel, 
         FormInput, 
         Input, 
         Button, 
         FormTitle,
         FileB
       } from './TDRightDetailForm.elements'

const TDRightDetailForm = (props) => {
  const {uploadVisa,updateTLname,updateNumber,updateJob,updateNationality,updateMobile,updateArrivedFrom,updateTnumber,updateCity,updateVisaNumber,ch} = props;
  return (
    <>
      {/* <FormContainer> */}
        <FormTitle>
         <p></p>
        </FormTitle>

        <FormGroup>
          <FormLabel>Last Name</FormLabel>
          <FormInput>
            <Input placeholder="Enter Last Name" onChange={e => updateTLname(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Nationality</FormLabel>
          <FormInput>
            <Input placeholder="Enter Nationality" onChange={e => updateNationality(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Passport Number</FormLabel>
          <FormInput>
            <Input placeholder="Enter Passport Number" onChange={e => updateNumber(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Tezkera Number</FormLabel>
          <FormInput>
            <Input placeholder="Enter Tazkera Number" onChange={e => updateTnumber(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Visa Number</FormLabel>
          <FormInput>
            <Input placeholder="Enter Visa Number" onChange={e => updateVisaNumber(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>City</FormLabel>
          <FormInput>
            <Input placeholder="City" onChange={e => updateCity(e.target.value)}></Input>
          </FormInput>
        </FormGroup>
        
        <FormGroup>
          <FormLabel>Mobile Number</FormLabel>
          <FormInput>
            <Input placeholder="Enter Mobile Number" onChange={e => updateMobile(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Province arrived from</FormLabel>
          <FormInput>
            <Input placeholder="Province arrived from" onChange={e => updateArrivedFrom(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Job</FormLabel>
          <FormInput>
            <Input placeholder="Job" onChange={e => updateJob(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Upload visa </FormLabel>
          <br></br>
          <FileB onChange={uploadVisa}></FileB>
        </FormGroup> 
       
      {/* </FormContainer> */}
    </>
  )
}

export default TDRightDetailForm
