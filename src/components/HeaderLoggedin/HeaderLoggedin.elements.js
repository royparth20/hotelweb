import styled from "styled-components"
import { media } from 'styled-bootstrap-grid';
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  width:100%;
  height: 100px;
  background-color: #FBFDFF;
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
  font-size: 20px;
  &:hover{
    text-decoration: none;
    color:#096DAB;
  }
  ${media.lg`
    font-size: 25px;
  `}
`

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  ${media.lg`
    position: absolute;
  `}
`

export const NavItemProfileMobile = styled.div`
  position:relative;
  ${media.lg`
    display: none;
  `}
`

export const ProfilePictureMobile = styled.img`
  margin-right:10px;
  border-radius: 50%;
`

export const ProfileContextMobile = styled.div`
  position: absolute;
  background:white;
  padding:10px 20px;
  text-align: start;
  margin-top:10px;
  right:0px;
  &.show{
    display:none;
  }
  ${media.lg`
    display: none;  
  `}
`

export const ProfileContextItemMobile = styled.div`
  height:35px;
`

export const ProfileContextItemMobileLink = styled(Link)`
  text-decoration:none;
  min-width: 100px;
  font-size:16px;
  display: block;
  color:#6B6B6B;
  &:hover{
    color:#096DAB;
    text-decoration: none;
  }
`

export const MobileIcon = styled.div`
  display: block;
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
  background: #FBFDFF;

  ${media.lg`
    height: 100px;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    flex-direction: row;
    position: static;
    transition: none;
  `}
`;

export const NavItem = styled.li`
  width: 100%;
  &:hover {
    border: none;
  }
  ${media.lg`
    height: 100px;
  `}
`

export const NavLinks = styled(Link)`
  color:#096DAB;
  padding: 1.4rem;
  display: block;
  &:hover {
    color: #FBFDFF;
    transition: all 0.3s ease;
    text-decoration: none;
    background-color: #096DAB;
  }

  ${media.lg`
    height: 100px;
    width:140px;
    background: #FBFDFF;
    color: #6B6B6B;
    display: flex;
    font-size: 22px;
    text-transform: none;
    padding: 0.5rem 0.5rem;
    text-decoration: none;
    font-weight: 600;
    justify-content:center;
    align-items:center;
    &:hover {
      color: #096DAB;
      text-decoration:none;
      background-color: #FBFDFF;
    }
    &.active{
      color: #096DAB;
      text-decoration:none;
      background-color: #FBFDFF;
    }
  `}
`;

export const NavItemProfile = styled.div`
  display: none;
  ${media.lg`
    position:relative;
    display: flex;
  `}
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
`;

export const ProfileContext = styled.div`
  display: none;
  ${media.lg`
    position: absolute;
    background:white;
    padding:10px 20px;
    text-align: start;
    margin-top:50px;
    right:0px;
    display: block;
    &.show{
      display:none;
    }
  `}
`;

export const ProfileContextItem = styled.div`
  height:35px;
`;

export const ProfileContextItemLink = styled(Link)`
  text-decoration:none;
  min-width: 150px;
  display: block;
  color:#6B6B6B;
  &:hover{
    color:#096DAB;
    text-decoration: none;
  }
`

export const LogoutButton = styled.button`
  text-decoration:none;
  min-width: 150px;
  display: block;
  color:#6B6B6B;
  &:hover{
    color:#096DAB;
    text-decoration: none;
  }
`





