import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfdff;
  padding-bottom: 100px;
`;

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
`;

export const FormLabelError = styled.label`
  font-weight: 600;
  margin: 0px;
  color: red;
  width: 100%;
  text-align: center;
`;
export const PageTitle = styled.div`
  font-size: 24px;
  line-height: 142.9%;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  flex-direction: column;
  color: #061422;
  margin-bottom: 10px;
  align-self: flex-start;
`;

export const PageParagraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 166.5%;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #373737;
  width: 100%;
  align-self: flex-start;
  ${media.lg`
    width:60%;
  `}
`;
export const ContentWrapper = styled.div`
  position: relative;
`;

export const FormSection = styled.div`
  height: 1024px;
  width: 100%;
  position: relative;
`;

export const ImageContent = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  position: relative;
  height: 84px;
  line-height: 27.52px;
  letter-spacing: 0.04em;
  color: #061422;

  ${media.md`
    align-self: start;
    margin-left: 56px;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0px 0px 0px;
  width: 100%;
`;

export const CancelButton = styled.button`
  background: #fbfdff;
  border: 1px solid #043565;
  box-sizing: border-box;
  border-radius: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 166.5%;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #373737;
  padding: 10px 40px;
  margin-right: 20px;
`;
export const SaveButton = styled.button`
  background: #043565;
  border-radius: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 166.5%;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #ffffff;
  padding: 10px 40px;
  border: 1px solid #043565;
`;

export const BgTopRightImage = styled.img`
  display: none;
  ${media.lg`
    position:absolute;
    right:-35px;
    top:-35px;
  `}
`;
export const BgBottomLeftImage = styled.img`
  display: none;
  ${media.lg`
    position:absolute;
    right:-35px;
    top:-35px;
  `}
`;
export const Select = styled.select`
  width: 100%;
  height: 55px;
  border: 1px solid #000000;
  box-sizing: border-box;
  padding-left: 10px;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 19px;
  color: black;
  &.fileInput {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;
export const Options = styled.option`
  width: 100%;
  height: 55px;
  border: 1px solid #000000;
  box-sizing: border-box;
  padding-left: 10px;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 19px;
  color: black;
`;
export const FormLabel = styled.label`
  font-weight: 600;
  margin: 0px;
  color: #373737;
`;

export const FormGroup = styled.div`
  color: black;
`;
export const FormInput = styled.div`
  color: black;
`;
