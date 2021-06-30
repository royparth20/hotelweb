import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Container, Row, Col } from "styled-bootstrap-grid";
import authActions from "../../store/actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
  LogoutButton,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemProfile,
  ProfilePicture,
  ProfileContext,
  ProfileContextItem,
  ProfileContextItemLink,
} from "./HeaderLoggedin.elements";

const HeaderLoggedin = () => {
  //   function logout() {
  //     localStorage.clear();
  //     console.log(111)
  //     window.location.href = '/login';
  // }
  const userType = useSelector((state) => state.auth.userType);
  const isHotelAdmin = () => {
    return userType === "HOTEL";
  };
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    // localStorage.clear();
    // console.log(111);
    dispatch({ type: authActions.actions.LOGOUT });
    history.push("/login");
  };
  //mobile menu click
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  //profileContext
  const [profileContext, setProfileContext] = useState(false);
  const toggleProfileContext = () => setProfileContext(!profileContext);

  return (
    <>
      <Container fluid className="p-0 m-0" >
        <Row className="p-0 m-0">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-0 m-0">
            <IconContext.Provider value={{ color: "#096DAB" }}>
              <Nav>
                <NavbarContainer>
                  <Navlogo to="/home">Hotel Management</Navlogo>
                  <div>
                    <TopBar>
                      <NavItemProfileMobile>
                        <ProfilePictureMobile
                          src={
                            user && user.hotelLogo
                              ? user.hotelLogo
                              : "https://via.placeholder.com/50x50"
                          }
                          onClick={toggleProfileContext}
                        />
                        <ProfileContextMobile
                          className={profileContext ? "hide" : "show"}
                        >
                          <ProfileContextItemMobile>
                            <ProfileContextItemMobileLink to="/hotelDetails">
                              Profile
                            </ProfileContextItemMobileLink>
                          </ProfileContextItemMobile>
                          <ProfileContextItem>
                            <ProfileContextItemLink to="/createProfile">
                              Create Profile
                            </ProfileContextItemLink>
                          </ProfileContextItem>
                          <ProfileContextItem>
                            <ProfileContextItemLink to="/touristDetails">
                              Create Tourist
                            </ProfileContextItemLink>
                          </ProfileContextItem>

                          {userType && isHotelAdmin() && (
                            <>
                              <ProfileContextItem>
                                <ProfileContextItemLink to="/createStaff">
                                  Create Staff
                                </ProfileContextItemLink>
                              </ProfileContextItem>
                              <ProfileContextItem>
                                <ProfileContextItemLink to="/branchDetails">
                                  Create Branch
                                </ProfileContextItemLink>
                              </ProfileContextItem>
                            </>
                          )}
                          <ProfileContextItemMobile>
                            <LogoutButton
                              className="text-left p-0  btn btn-link"
                              onClick={(e) => logout(e)}
                            >
                              Log Out
                            </LogoutButton>
                          </ProfileContextItemMobile>
                        </ProfileContextMobile>
                      </NavItemProfileMobile>
                      <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                      </MobileIcon>
                    </TopBar>

                    <NavMenu onClick={handleClick} click={click}>
                      <NavItem>
                        <NavLinks to="/home">Dashboard</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to="/tourist">Tourist</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to="/staff">Staff</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to="/blacklist">Blacklist</NavLinks>
                      </NavItem>
                      <NavItemProfile>
                        <ProfilePicture
                          src={
                            user && user.hotelLogo
                              ? user.hotelLogo
                              : "https://via.placeholder.com/50x50"
                          }
                          onClick={toggleProfileContext}
                        />
                        <ProfileContext
                          className={`border ${
                            profileContext ? "hide" : "show"
                          } `}
                        >
                          <ProfileContextItemMobile>
                            <ProfileContextItemMobileLink to="/hotelDetails">
                              Profile
                            </ProfileContextItemMobileLink>
                          </ProfileContextItemMobile>
                          <ProfileContextItem>
                            <ProfileContextItemLink to="/createProfile">
                              Create Profile
                            </ProfileContextItemLink>
                          </ProfileContextItem>
                          <ProfileContextItem>
                            <ProfileContextItemLink to="/touristDetails">
                              Create Tourist
                            </ProfileContextItemLink>
                          </ProfileContextItem>
                          {userType && isHotelAdmin() && (
                            <>
                              <ProfileContextItem>
                                <ProfileContextItemLink to="/createStaff">
                                  Create Staff
                                </ProfileContextItemLink>
                              </ProfileContextItem>

                              <ProfileContextItem>
                                <ProfileContextItemLink to="/branchDetails">
                                  Create Branch
                                </ProfileContextItemLink>
                              </ProfileContextItem>
                            </>
                          )}
                          <ProfileContextItem>
                            <LogoutButton
                              className="text-left p-0  btn btn-link"
                              onClick={logout}
                            >
                              Log Out
                            </LogoutButton>
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
  );
};

export default HeaderLoggedin;
