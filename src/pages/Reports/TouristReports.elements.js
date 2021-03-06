import styled from "styled-components"

export const FormContainer = styled.div`
padding:60px;
max-height: 950px;
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
export const InputDropdown = styled.select`
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