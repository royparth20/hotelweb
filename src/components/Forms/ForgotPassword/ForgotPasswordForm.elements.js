import styled from "styled-components"


export const FormContainer = styled.div`
  padding:30px 60px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
`;

export const FormGroup = styled.div`
  color:black;
`;


export const FormTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #096DAB;
  text-align:center;
  margin-bottom: 30px;
`;

export const FormLabel = styled.label`
  font-weight:600;
  margin:0px;
`;

export const Divider = styled.div`
  width:100%;
  text-align:center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #096DAB;
  padding:20px;
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
  margin-top: 15px;
  margin-bottom: 15px;
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
export const FormLabelError = styled.label`
  font-weight:600;
  margin:0px;
  color:red;
`;

export const RememberMeGroup = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
`;

export const RememberMeContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
`;

export const RememberMeCheckBox = styled.input.attrs({
  type: "checkbox"
})`
  width: 21px;
  height: 21px;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin:15px;
  align-self:flex-start;
`;


export const RememberMeText = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 142.9%;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: #030303;
  margin: 0px 10px;
`;


export const ForgetPasswordLink = styled.a.attrs({
  href:"/forgotPassword"
})`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 142.9%;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: #096DAC;
  margin:15px;
`;

