import React from 'react'
import { FormContainer, 
         FormGroup, 
         FormLabel, 
         FormInput, 
         Input, 
         Button, 
         TextArea, 
         FormTitle
        } from './ContactForm.elements'

const ContactForm = () => {
  return (
    <>
      <FormContainer>
        <FormTitle>
         <p>Say Something...</p>
        </FormTitle>

        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput>
            <Input placeholder="Enter Your Name"></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput>
            <Input placeholder="Enter Your Email"></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Message</FormLabel>
          <FormInput>
            <TextArea placeholder="Type Your Message"></TextArea>
          </FormInput>
        </FormGroup>

        
        <FormGroup>
          <Button>Send</Button>
        </FormGroup>

        

      </FormContainer>
    </>
  )
}

export default ContactForm
