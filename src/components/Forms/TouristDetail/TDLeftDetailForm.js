import React from 'react'
import { 
  FormContainer, 
  FormTitle,
  FormGroup, 
  FormLabel, 
  FormInput, 
  Input,
  FileInputContainer,
  FileInputB,
  Dt,
  FileB
} from './TDLeftDetailForm.elements'
import { Container, Row, Col } from 'styled-bootstrap-grid';

const TDLeftDetailForm = (props) => {
  const {updateReasonOfStay,
    updateRoomNumber,
    updateTFname ,
    updateCountry,
    updateCountryArrivedFrom,
    updateDtArrival,
    updateDtDeparture,
    updateAddress,
    updateDistrict,
    updatePhoto,
    ch,
    changePassport} = props;
  return (
    <>
      {/* <FormContainer> */}
        <FormTitle>
         {/* <p>Details</p> */}
        </FormTitle>

        <FormGroup>
          <FormLabel>First Name</FormLabel>
          <FormInput>
            <Input placeholder="Enter Tourist Fist Name" onChange={e => updateTFname (e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        
        <FormGroup>
          <FormLabel>Resident Country</FormLabel>
          <FormInput>
            <Input placeholder="Resident Country" onChange={e => updateCountry(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Date of Arrival In The Hotel</FormLabel>
          <FormInput>
            <Dt placeholder="Enter Nationality" onChange={e => updateDtArrival(e.target.value)}></Dt>
          </FormInput>
        </FormGroup>
        
        <FormGroup>
          <FormLabel>Date Of Departure From Hotel</FormLabel>
          <FormInput>
            <Dt placeholder="Enter Mobile Number" onChange={e => updateDtDeparture(e.target.value)}></Dt>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Address</FormLabel>
          <FormInput>
            <Input placeholder="Address" onChange={e => updateAddress(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>District</FormLabel>
          <FormInput>
            <Input placeholder="District" onChange={e => updateDistrict(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Country Arrived From</FormLabel>
          <FormInput>
            <Input placeholder="Country Arrived From" onChange={e => updateCountryArrivedFrom(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Reason of stay</FormLabel>
          <FormInput>
            <Input placeholder="Reason of stay" onChange={e => updateReasonOfStay(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Room number</FormLabel>
          <FormInput>
            <Input placeholder="Room number" onChange={e => updateRoomNumber(e.target.value)}></Input>
          </FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel>Photo Of Tourist</FormLabel>
          <br></br>
          <FileB onChange={updatePhoto}></FileB>
        </FormGroup>
        
        <FormGroup>
          <FormLabel>Upload passport/tazkera</FormLabel>
          <br></br>
          <FileB onChange={changePassport}></FileB>
        </FormGroup>
 
         
       
      {/* </FormContainer> */}
    </>
  )
}

export default TDLeftDetailForm
