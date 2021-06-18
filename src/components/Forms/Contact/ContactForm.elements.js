import styled from "styled-components"

export const FormContainer = styled.div`
  padding:23px;
  background: #FFFFFF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.07);
  border-bottom: 9px solid #043565;
`;

export const FormGroup = styled.div`
  color:black;
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
  font-weight:600;
  margin:0px;
  color: #373737;

`;

export const FormInput = styled.div`
  color:black;
`;

export const Input = styled.input.attrs(props => ({
  type: "text",
}))`
  width: 100%;
  height: 55px;
  border: 1px solid #000000;
  box-sizing: border-box;
  padding-left:10px;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 19px;
  color: black;
`;

export const TextArea = styled.textarea.attrs(props => ({
  type: "text",
}))`
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
  color: #AAAAAA;
`;

export const Button = styled.button`
  position: relative;
  width: 86px;
  height: 35px;
  border: 1px solid #043565;
  background: #043565;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  padding: 0px;
  border:none;
  color:white;
  margin-top: 20px;
`;
