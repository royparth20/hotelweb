import styled from "styled-components"

export const FormContainer = styled.div`
  padding:23px;
  background: #FFFFFF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.07);
  border-bottom: 9px solid #043565;
  min-height: 400px;
`;

export const FormGroup = styled.div`
  color:black;
  margin:20px auto;
`;

export const FormTitle = styled.p`
  position: relative;
  font-style: normal;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.1em;
`;


export const FormLabel = styled.label`
  font-weight:600;
  margin:0px;
  color: #373737;
  display:block;
  margin-bottom:10px;
  margin-left:5px;
`;

export const FormInput = styled.div`
  color:black;
`;

export const Input = styled.input.attrs(props => ({
  type: "text"
}))`
  width: 100%;
  border: 1px solid #000000;
  box-sizing: border-box;
  border:none;
  border-bottom: 1px solid #000000;
  font-size: 16px;
  color: black;
  padding-left:5px;
`;

export const TextArea = styled.textarea.attrs(props => ({
  type: "text",
}))`
  width: 100%;
  height: 50px;
  border:none;
  border-bottom: 1px solid #000000;
  margin-top: 10px;
  resize:none;
  font-size: 16px;
  line-height: 19px;
  color: black;
  padding-left:5px;
`;


export const OtherBranchesBtn = styled.button`
  background: #043565;
  border-radius: 6px;
  color:white;
  border:none;
  padding:15px 40px;
  font-weight:600;
`

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