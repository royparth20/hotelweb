import styled from "styled-components"


export const FormContainer = styled.div`
  padding:10px;
  overflow-y: scroll;
`;

export const FormGroup = styled.div`
  color:black;
`;

export const FormLabel = styled.label`
  font-weight:600;
  margin:0px;
`;
export const FormLabelError = styled.label`
  font-weight:600;
  margin:0px;
  color:red;
`;
export const FormInput = styled.div`
  color:black;
`;

export const Input = styled.input.attrs(props => ({
  type: "text",
}))`
  width: 100%;
  height: 55px;
  border: 1px solid #CACACA;
  box-sizing: border-box;
  padding-left:10px;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 19px;
  color: black;
`;
export const InputFile = styled.input.attrs(props => ({
  type: "file",
}))`
  width: 100%;
  height: 55px;
  border: 1px solid #CACACA;
  box-sizing: border-box;
  padding-left:10px;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 19px;
  color: black;
`;
export const InputPass = styled.input.attrs(props => ({
  type: "password",
}))`
  width: 100%;
  height: 55px;
  border: 1px solid #CACACA;
  box-sizing: border-box;
  padding-left:10px;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 19px;
  color: black;
`;
export const Button = styled.button`
  position: relative;
  width: 100%;
  height: 57px;
  background: #096DAB;
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  padding: 10px;
  border:none;
  color:white;
  margin-top: 20px;
`
// export const FormInput = styled.div`
//   padding-top:10px;
//   padding-bottom:10px;
// `;

export const InputDropdown = styled.select`
width: 100%;
height: 55px;
border: 1px solid #CACACA;
box-sizing: border-box;
padding-left:10px;
border-radius: 8px;
margin-top: 10px;
margin-bottom: 10px;
font-size: 16px;
line-height: 19px;
color: black;
`
export const InputDropdownOption = styled.option`
  padding: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 166.5%;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #373737;
`
export const UploadButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 166.5%;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #373737;
  background: #FFFFFF;
  border: 1px solid #043565;
  box-sizing: border-box;
  padding:10px 20px;
  margin-top:20px;
`;