import React from "react";
import {
  FormContainer,
  ProfileImage,
  UploadButton,
  RemoveButton,
  FileB,
} from "./CPPictureForm.elements";

const CPPictureForm = (props) => {
  const { ch, pro, imagePreview } = props;
  console.log(pro);
  return (
    <>
      <FormContainer>
        {(pro.hotelImages && pro?.hotelImages.length > 0) || imagePreview ? (
          <ProfileImage
            src={imagePreview ? imagePreview : pro.hotelImages[0]}
          />
        ) : (
          <ProfileImage src="https://via.placeholder.com/240x200" />
        )}
        <FileB onChange={ch}></FileB>
      </FormContainer>
    </>
  );
};

export default CPPictureForm;
