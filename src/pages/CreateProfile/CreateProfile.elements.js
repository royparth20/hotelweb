import styled from "styled-components"
import { media } from 'styled-bootstrap-grid';

export const Main = styled.main`
  display:flex;
  justify-content: center;
  align-items:center;
  background-color: #FBFDFF;
  padding-bottom:100px;
`;
export const FormLabelError = styled.label`
  font-weight:600;
  margin:0px;
  color:red;
  width:100%;
  text-align: center;
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
  width:100%;
  align-self: flex-start;
  ${media.lg`
    width:60%;
  `}
`;
export const ContentWrapper = styled.div`
  
`;

export const FormSection = styled.div`
  height:1024px;
  width:100%;
  position:relative;
`;

export const ImageContent = styled.p`
  font-family: 'Montserrat', sans-serif;
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

export const CancelButton = styled.button`
  background: #FBFDFF;
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
  padding:10px 40px;
  margin-right:20px;
`

export const ButtonContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  padding:80px 0px 0px 0px;
  width:100%;
`
export const SaveButton = styled.button`
  background: #043565;
  border-radius: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 166.5%;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #FFFFFF;
  padding:10px 40px;
  border: 1px solid #043565;
`

