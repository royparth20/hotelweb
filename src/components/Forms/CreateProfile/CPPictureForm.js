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
  // console.log(pro);
  return (
    <>
      <FormContainer>
        {pro || imagePreview ? (
          <ProfileImage
            src={imagePreview ? imagePreview : pro}
          />
        ) : (
          <ProfileImage src="https://via.placeholder.com/240x200" />
        )}

        <div style={{ position: "relative" }} className="upload-btn mt-2">
          upload Profile
          <FileB
            onChange={ch}
            style={{
              width: "",
              height: "",
              opacity: 0,
              marginTop: 0,
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

export default CPPictureForm;
