import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  background: #fbfdff;
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
  margin-left: 15px;
`;

export const PageTitleLine = styled.img``;

export const CardWrapper = styled.div`
  // min-height: 320px;
  background: #ffffff;
  // box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.11);
  margin: 10px;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 250px;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
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
  border: none;
  background: rgba(245, 55, 75, 0.2);
  border-radius: 2px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fc1c34;
  padding: 0px 15px;
`;
export const CardReportButton = styled.button`
  border: none;
  background: rgba(66, 144, 245, 0.5);
  border-radius: 2px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #0570fa;
  padding: 0px 15px;
`;
