import React from "react";
import {
  FormContainer,
  ProfileImage,
  UploadButton,
  RemoveButton,
  FileB,
} from "./BDPictureForm.elements";

const BDPictureForm = (props) => {
  const { ch, imagePreview } = props;
  return (
    <>
      <FormContainer>
        {imagePreview ? (
          <ProfileImage src={imagePreview && imagePreview} />
        ) : (
          <ProfileImage src="https://via.placeholder.com/240x200" />
        )}
        <FileB onChange={ch}></FileB>
      </FormContainer>
    </>
  );
};

export default BDPictureForm;
