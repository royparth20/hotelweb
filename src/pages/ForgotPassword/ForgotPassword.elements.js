import styled from "styled-components"
import { media } from 'styled-bootstrap-grid';
export const Main = styled.main`
  display:flex;
  justify-content: center;
  align-items:center;
  padding-bottom:100px;
  margin-top:25px;
`;

export const ContentWrapper = styled.div`
  background: #FFFFFF;
  min-height: 574px;
`;

export const FormSection = styled.div`
  min-height:574px;
  width:100%;
  position:relative;
  color:red;
`;


export const GetStartContainer = styled.h2`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

export const Heading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 66px;
  color: #096DAB;
  height: 66px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #4E4E4E;
  ${media.lg`
    align-self:flex-start;
    margin-left:125px;
    margin-bottom:0px;
  `}
`;

export const Content = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #4E4E4E;
  padding:0px 20px;
  ${media.lg`
    align-self:flex-start;
    margin-left:125px;
    padding:0px;
  `}
`;

export const ArrowImage = styled.img`
  display: none;
  ${media.lg`
    display: inline;
    transform: translate(-200px, -30px);
  `}
`;
