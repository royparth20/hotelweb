import styled from "styled-components"
import { media } from 'styled-bootstrap-grid';

export const Main = styled.main`
  display:flex;
  justify-content: center;
  align-items:center;
  padding-bottom:100px;
`;

export const PageTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
`;


export const PageTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #061422;
  margin-left:15px;
`;

export const PageTitleLine = styled.img`
  
`;

export const ContentWrapper = styled.div`
  
`;

export const FormSection = styled.div`
  width:100%;
  position:relative;
`;


export const ImageHeading = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 142.9%;
  margin-top: 45px;
  letter-spacing: 0.14em;
  color: #061422;
  height: 40px;
  ${media.md`
    align-self: start;
    margin-left: 56px;
  `}
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
  padding:10px 10px;
  margin-top: 34px;

  ${media.md`
    align-self: start;
    margin-left: 56px;
  `}
`;

export const SocialLoginGroup = styled.div`
  align-self: start;
  margin-left: 40px;
  margin-top: 50px;
  @media screen and (max-width: 960px){
    margin: 50px;
  }
`;

export const SocialLogin = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 152.9%;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  color: #061422;
`;

export const SocialLoginIcon = styled.img`
  width: 30px;
  height: 40px;
  margin: 15px;
  background:white;
  padding:7px;
`;

