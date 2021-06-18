import styled from "styled-components"

export const FormContainer = styled.div`
  padding:23px;
  background: #FFFFFF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.07);
  border-bottom: 9px solid #043565;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 400px;
`;

export const FileB = styled.input.attrs(props => ({
  type: "file"
}))`
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
  width: 157px;
`;

export const ProfileImage = styled.img`
  width:100%;
`;
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

export const RemoveButton = styled.button`
  margin-top:10px;
  padding:10px 20px;
  border:none;
  background: rgba(232, 0, 0, 0.1);
  color:#E80000;
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
