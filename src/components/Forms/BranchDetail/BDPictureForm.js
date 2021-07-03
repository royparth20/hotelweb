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
        <div
          style={{ cursor: "pointer", position: "relative" }}
          className="upload-btn mt-2"
        >
          upload Profile
          <FileB
            onChange={ch}
            style={{
              width: "100%",
              height: "100%",
              opacity: 0,
              position: "absolute",
              left: 0,
              top: 0,
            }}
          ></FileB>
        </div>
      </FormContainer>
    </>
  );
};

export default BDPictureForm;
