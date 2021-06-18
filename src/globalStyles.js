import styled, {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    padding:0;
    font-family: 'Work Sans', sans-serif;
  }
`;

// export const Container = styled.div`
//   z-index:1;
//   width: 100%;
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
//   padding-left: 30px;
//   padding-right: 30px;

//   @media screen and (max-width: 991px){
//     padding-left: 30px;
//     padding-right: 30px;
//   }
// `;

export const Button = styled.button`
  width: 114px;
  height: 47px;
  border-radius: 12px;
  background: #096DAB;
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px' )};
  color: #fff;
  font-size: 22px;
  font-weight:600;
  outline: none;
  border: none;
  cursor: pointer;
  line-height: 10px;

&:hover {
  transition: all 0.3s ease-out;
  background: #fff;
  background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
}

@media screen and (max-width: 960px) {
  width: 30%;
}
`

export default GlobalStyle

