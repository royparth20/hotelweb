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

export const FormInput = styled.div`
  padding-top:10px;
  padding-bottom:10px;
`;

export const InputDropdown = styled.select`
  border:none;
  width:100%;
  border-bottom: 1px solid #000000;
`
export const InputDropdownOption = styled.option`
  padding-left:20px;
  padding-bottom:5px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 166.5%;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #373737;
`
