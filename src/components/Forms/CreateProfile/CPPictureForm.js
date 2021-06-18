import React from 'react'
import { FormContainer, 
         ProfileImage,
         UploadButton,
         RemoveButton,
         FileB
       } from './CPPictureForm.elements'

const CPPictureForm = (props) => {
  const {ch} = props;
  return (
    <>
      <FormContainer>
        {props.pro.hotelImages? 
        <ProfileImage src={props.pro.hotelImages[0]}/>
        :
        <ProfileImage src="https://via.placeholder.com/240x200"/>
}
<FileB onChange={ch}></FileB>
      
      </FormContainer>
    </>
  )
}

export default CPPictureForm
