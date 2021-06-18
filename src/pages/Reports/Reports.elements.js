import styled from "styled-components"
import { media } from 'styled-bootstrap-grid';

export const Main = styled.main`
  display:flex;
  justify-content: center;
  align-items:center;
  background-color: #FBFDFF;;
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
  align-self: flex-start;
  width:70%;
  
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

