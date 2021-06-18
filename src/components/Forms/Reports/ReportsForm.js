import React from 'react'
import { FormContainer, 
         FormGroup, 
         FormLabel, 
         FormInput, 
         Input, 
         Button, 
         FormTitle
       } from './ReportsForm.elements'

const ReportsForm = () => {
  return (
    <>
      <FormContainer>
        <FormTitle>
         <p>Details</p>
        </FormTitle>

        <FormGroup>
          <FormLabel>Frequent Guests</FormLabel>
          <FormInput>
            <Input placeholder="Enter Guests Name"></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Repeat Stay</FormLabel>
          <FormInput>
            <Input placeholder="Repeat Stay"></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Guests On A Specific Day</FormLabel>
          <FormInput>
            <Input placeholder="Date"></Input>
          </FormInput>
        </FormGroup>
        
        <FormGroup>
          <FormLabel>Specific Week/ Month</FormLabel>
          <FormInput>
            <Input placeholder="Specific Week/ Month"></Input>
          </FormInput>
        </FormGroup>

      </FormContainer>

      <Button>Send</Button>
    </>
  )
}

export default ReportsForm
