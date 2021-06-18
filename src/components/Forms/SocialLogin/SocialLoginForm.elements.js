import styled from "styled-components"
import { media } from 'styled-bootstrap-grid';

export const FormContainer = styled.div`
  padding:60px;
  margin-top: 60px;
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

export const InputPass = styled.input.attrs(props => ({
  type: "password",
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

export const RememberMeCheckBox = styled.input.attrs({
  type: "checkbox"
})`
  width: 21px;
  height: 21px;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  align-self:flex-start;
`;

export const SocialLogin = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 142.9%;
  color: #FFFFFF;
`;


export const SocialLoginIcon = styled.img`
  width: 43px;
  height: 43px;
  margin: 15px;
  border-radius:50%;
  background:white;
  padding:7px;
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
  float:left;
  ${media.md`
    float:right;
  `}
`;

