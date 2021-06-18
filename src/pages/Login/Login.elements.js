import styled from "styled-components";
import { media } from 'styled-bootstrap-grid';

export const Main = styled.main`
  display:flex;
  justify-content: center;
  align-items:center;
  padding-bottom:100px;
`;

export const ContentWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  min-height: 734px;
`;

export const FormSection = styled.div`
  min-height:734px;
  width:100%;
  position:relative;
  color:red;
`;

export const BackgroundImage = styled.div`
  min-height:734px;
  width:100%;
  background-image: url('../assets/images/hotel.jpg');
  background-size:cover;
  background-position: center;
  position:relative;
`;

export const ImageOverlay = styled.div`
  height:734px;
  width:100%;
  background: rgba(4, 83, 191, 0.74);
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  position:absolute;
`;

export const ImageHeading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 66px;
  color: #FFFFFF;
  height: 66px;
  ${media.md`
    align-self: start;
    margin-left: 56px;
  `}
`;

export const ImageContent = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  padding:40px 40px;
  text-align:justify;
  ${media.md`
    align-self: start;
    margin-left: 56px;
  `}
`;

export const SocialLoginGroup = styled.div`
  
  ${media.md`
    align-self: start;
    margin-left: 105px;
    margin-top: 20px;
  `}
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

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const TabButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  width: 166px;
  height: 49px;
  border:none;
  background: white;
  color:black;
  &.active{
    background: #2A6ECA;
    color: white;
  }
`;
