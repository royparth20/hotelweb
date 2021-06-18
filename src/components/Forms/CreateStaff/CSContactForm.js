import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { map } from 'rxjs/operators';
import { 
  FormContainer,
  FormTitle,
  FormGroup, 
  FormInput, 
  InputDropdown,
  InputDropdownOption        
} from './CSContactForm.elements'

const CSContactForm = (props) => {
  console.log('main',props.bb)
  const {updateBranch} = props;
  return (
    <>
      <FormContainer>
        <FormTitle>
         <p>Details</p>
        </FormTitle>
        <FormGroup>
          <FormInput>
          
            <InputDropdown onChange={e => updateBranch(e.target.value)}>
              <InputDropdownOption>
                Branches
              </InputDropdownOption>
              {props.bb ?
            <> {props.bb.map(bl =>  
              <InputDropdownOption value= {bl._id}>
                {bl.address}
              </InputDropdownOption>
              )}</>:  
            <></>
            }
             
              
            </InputDropdown>
          </FormInput>
          <FormInput>
            <InputDropdown placeholder="Enter Email">
              <InputDropdownOption>
                Location
              </InputDropdownOption>
            </InputDropdown>
          </FormInput>
          <FormInput>
            <InputDropdown placeholder="Assign Staff">
              <InputDropdownOption>
                Assign Staff
              </InputDropdownOption>
            </InputDropdown>
          </FormInput>
        </FormGroup>
      </FormContainer>
    </>
  )
}

export default CSContactForm
