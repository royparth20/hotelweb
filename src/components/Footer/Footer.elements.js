import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 100px 0px 0px 0px;
  background-color: #043565;
`;

export const LogoHeading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;
`;

export const AboutText = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-transform: capitalize;
  color: #ffffff;
`;

export const FooterSocialLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150.5%;
  text-transform: capitalize;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`;
export const FooterLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150.5%;
  text-transform: capitalize;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`;
export const Heading = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #ffffff;
  margin: 0px;
  padding: 10px 0px;
  border-bottom: 1px solid #ffffff;
  margin-bottom: 10px;
`;

export const CopyRight = styled.div`
  text-align: center;
  padding: 20px 0px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150.5%;
  text-transform: capitalize;
  color: #ffffff;
  border-top: 2px solid white;
`;
