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

export default CPPictureForm;
