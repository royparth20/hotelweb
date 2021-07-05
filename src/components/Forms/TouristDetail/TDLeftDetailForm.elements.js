import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 23px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.07);
  border-bottom: 9px solid #043565;
`;

export const FormGroup = styled.div`
  color: black;
`;
export const FileB = styled.input.attrs((props) => ({
  type: "file",
}))`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 166.5%;
  text-align: left;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #3d3d3d;
  background: #ffffff;
  border: 1px solid #043565;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px 20px;
  margin: 15px 0px 15px 0px;
  height: 55px;
  width: 470px;
`;
export const FormTitle = styled.p`
  position: relative;
  font-family: Work Sans;
  font-style: normal;
  color: #373737;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: 0.1em;
`;

export const FormLabel = styled.label`
  font-weight: 600;
  margin: 0px;
  color: #373737;
`;

export const FormInput = styled.div`
  color: black;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 130px;
  border: 1px solid #000000;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 19px;
  color: black;
`;

export const FileInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FileInputB = styled.button`
  background: #043565;
  color: white;
  border: none;
  padding: 17px 0px;
  width: 25%;
  border-radius: 0px;
  font-size: 14px;
  font-weight: 600;
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

export const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
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
export const Dt = styled.input.attrs((props) => ({
  type: "date",
}))`
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
