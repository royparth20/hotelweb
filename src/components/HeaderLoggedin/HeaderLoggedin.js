import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { 
  Nav, 
  NavbarContainer, 
  Navlogo, 
  TopBar,
  NavItemProfileMobile,
  ProfilePictureMobile,
  ProfileContextMobile,
  ProfileContextItemMobile,
  ProfileContextItemMobileLink,
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavItemProfile,
  ProfilePicture,
  ProfileContext,
  ProfileContextItem,
  ProfileContextItemLink,
} from './HeaderLoggedin.elements'

const HeaderLoggedin = () => {
//   function logout() {
//     localStorage.clear();
//     console.log(111)
//     window.location.href = '/login';
// }

  const logout = () => {
      localStorage.clear();
       console.log(111)
  }
  //mobile menu click
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  //profileContext
  const[profileContext,setProfileContext] = useState(false);
  const toggleProfileContext = () => setProfileContext(!profileContext);

  return (
    <>
    <Container fluid className="p-0 m-0">
      <Row className="p-0 m-0">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-0 m-0">
          <IconContext.Provider value={{color:'#096DAB'}}>
            <Nav>
              <NavbarContainer>
                <Navlogo to="/home">
                  Hotel Management
                </Navlogo>
                <div>
                  <TopBar>
                    <NavItemProfileMobile>
                      <ProfilePictureMobile src="https://via.placeholder.com/50x50" onClick={toggleProfileContext}/>
                      <ProfileContextMobile className={profileContext ? 'hide' : 'show'}>
                        <ProfileContextItemMobile>
                          <ProfileContextItemMobileLink to="/hotelDetails">Profile</ProfileContextItemMobileLink>
                        </ProfileContextItemMobile>
                        <ProfileContextItem>
                          <ProfileContextItemLink to="/createProfile">Create Profile</ProfileContextItemLink>
                        </ProfileContextItem>
                        <ProfileContextItem>
                          <ProfileContextItemLink to="/touristDetails">Create Tourist</ProfileContextItemLink>
                        </ProfileContextItem>
                        <ProfileContextItem>
                          <ProfileContextItemLink to="/createStaff">Create Staff</ProfileContextItemLink>
                        </ProfileContextItem>
                        <ProfileContextItem>
                          <ProfileContextItemLink to="/branchDetails">Create Branch</ProfileContextItemLink>
                        </ProfileContextItem>
                        <ProfileContextItemMobile >
                          <ProfileContextItemMobileLink to="/login" onClick={ () => logout} >Log Out</ProfileContextItemMobileLink>
                        </ProfileContextItemMobile>
                      </ProfileContextMobile>
                    </NavItemProfileMobile>
                    <MobileIcon onClick={handleClick}>
                      { click ? <FaTimes/> : <FaBars/> }
                    </MobileIcon>
                  </TopBar>

                  <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                      <NavLinks to="/home">Dashboard</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to="/tourist" >Tourist</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to="/blacklist">Blacklist</NavLinks>
                    </NavItem>
                    <NavItemProfile>
                      <ProfilePicture src="https://via.placeholder.com/46x46" onClick={toggleProfileContext}/>
                      <ProfileContext className={profileContext ? 'hide' : 'show'}>
                      <ProfileContextItemMobile>
                          <ProfileContextItemMobileLink to="/hotelDetails">Profile</ProfileContextItemMobileLink>
                        </ProfileContextItemMobile>
                        <ProfileContextItem>
                          <ProfileContextItemLink to="/createProfile">Create Profile</ProfileContextItemLink>
                        </ProfileContextItem>
                        <ProfileContextItem>
                          <ProfileContextItemLink to="/touristDetails">Create Tourist</ProfileContextItemLink>
                        </ProfileContextItem>
                        <ProfileContextItem>
                          <ProfileContextItemLink to="/createStaff">Create Staff</ProfileContextItemLink>
                        </ProfileContextItem>
                        <ProfileContextItem>
                          <ProfileContextItemLink to="/branchDetails">Create Branch</ProfileContextItemLink>
                        </ProfileContextItem>
                        <ProfileContextItem>
                          <ProfileContextItemLink  onClick={logout}  to="/login">Log Out</ProfileContextItemLink>
                        </ProfileContextItem>
                      </ProfileContext>
                    </NavItemProfile>
                  </NavMenu>
                </div>
              </NavbarContainer>
            </Nav>
          </IconContext.Provider>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default HeaderLoggedin
