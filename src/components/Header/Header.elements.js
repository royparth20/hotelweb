import styled from "styled-components"
import { media } from 'styled-bootstrap-grid';
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  width:100%;
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items:center;
  position: sticky;
  top:0;
  z-index:9999;
  margin-bottom:0px;
`
export const NavbarContainer = styled.div`
  display: flex;
  font-size:1.2rem;
  justify-content: space-between;
  height: 100px;
  width: 80%;
  color:#096DAB;
  margin-bottom:0px;
`

export const Navlogo = styled(Link)`
  color: #096DAB;
  font-weight:600;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display:flex;
  align-items:center;
  font-size: 25px;
`

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 90%);
  font-size: 25px;
  cursor:pointer;
  ${media.lg`
    display:none;
  `}
`

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 100px;
  left: ${({click}) => (click ? 0 : '-100%')};
  opacity: 1;
  transition: all 0.5s ease;
  background: #101522;
  ${media.lg`
    height: 100px;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    flex-direction: row;
    position: static;
    background: white;
    transition: none;
  `}
`;

export const NavItem = styled.li`
  width: 100%;
  &:hover {
    border: none;
  }

  ${media.md`
    height: 100px;
    border-bottom: 2px solid transparent;
  `}
`

export const NavLinks = styled(Link)`
    text-align: center;
    padding: 2rem;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  ${media.md`
    height: 100px;
    width:140px;
    color: #6B6B6B;
    display: flex;
    font-size: 22px;
    align-items: center;
    text-transform: none;
    padding: 0.5rem 0.5rem;
    text-decoration: none;
    font-weight: 600;
    justify-content:center;
    align-items:center;
    &:hover {
      color: #096DAB;
      text-decoration:none;
    }
  `}
`;


export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;