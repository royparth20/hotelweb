import styled from "styled-components"

export const Main = styled.main`
  display:flex;
  justify-content: center;
  align-items:center;
  padding-bottom:100px;
  background:#FBFDFF;
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

export const CardWrapper = styled.div`
  min-height: 320px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.11);
  margin:10px;
`;

export const CardImage = styled.img`
  width: 100%;
  min-height: 200px;
`;


export const CardInfo = styled.div`
  padding: 20px;
`;

export const CardName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: #061422;
`;

export const CardButton = styled.button`
  height: 24px;
  border:none;
  background: rgba(245, 55, 75, 0.2);
  border-radius: 2px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #FC1C34;
  padding:0px 15px;
`;
