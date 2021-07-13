import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Container, Row, Col } from "styled-bootstrap-grid";
import authActions from "../../store/actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dropdown, NavDropdown } from "react-bootstrap";
import api from "../../axios";
import userActions from "../../store/actions/userAction";
// import {PersonIcon} from "@material-ui/icons";
import {
  SubMenu,
  Nav,
  NavbarContainer,
  Navlogo,
  TopBar,
  NavItemProfileMobile,
  ProfilePictureMobile,
  DropdownToggle,
  ProfileContextMobile,
  ProfileContextItemMobile,
  ProfileContextItemMobileLink,
  MobileIcon,
  LogoutButton,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemProfile,
  DropdownNavLinks,
  ProfilePicture,
  ProfileContext,
  ProfileContextItem,
  ProfileContextItemLink,
  MobileDropDown,
  DesktopDropDown,
} from "./HeaderLoggedin.elements";

const HeaderLoggedin = () => {
  //   function logout() {
  //     localStorage.clear();
  //     console.log(111)
  //     window.location.href = '/login';
  // }
  const auth = useSelector((state) => state.auth);
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
    dispatch({ type: userActions.actions.CLEAR_USER });
    history.push("/login");
  };
  //mobile menu click
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  //profileContext
  const [profileContext, setProfileContext] = useState(false);
  const toggleProfileContext = () => setProfileContext(!profileContext);

  useEffect(async () => {
    if (!isHotelAdmin()) {
      try {
        if (!user._id) {
          const { data } = await api.getStaffMemberByStaffId(auth.id);
          dispatch({
            type: userActions.actions.USER_DETAILS,
            payload: { ...data.data, branches: [] },
          });
          // setHotels(data.data);
          if (user?.branches.length <= 0) {
            const assignHotels = data.data.assignedHotel;
            assignHotels.map(async (_ids, index) => {
              const res = await api.getBranchDataByStaff(_ids);
              // console.log(index, res.data.data);
              dispatch({
                type: userActions.actions.SET_BRANCH,
                payload: { ...res.data.data },
              });
            });
          }
        }

        // console.table({ data: data.data, assignHotels });
      } catch (error) {}
    }
  }, [auth]);

  return (
    <>
      <Container fluid className="p-0 m-0">
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
                              : "https://image.flaticon.com/icons/png/512/660/660611.png"
                          }
                          onClick={toggleProfileContext}
                        />
                        <ProfileContextMobile
                          className={profileContext ? "hide" : "show"}
                        >
                          {/* <ProfileContextItemMobile>
                            <ProfileContextItemMobileLink to="/hotelDetails">
                              Profile
                            </ProfileContextItemMobileLink>
                          </ProfileContextItemMobile> */}
                          <ProfileContextItem>
                            <ProfileContextItemLink to="/createProfile">
                              Create Profile
                            </ProfileContextItemLink>
                          </ProfileContextItem>
                          {/* <ProfileContextItem>
                            <ProfileContextItemLink to="/touristDetails">
                              Create Tourist
                            </ProfileContextItemLink>
                          </ProfileContextItem> */}

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
                      {/* <NavItem>
                        <NavLinks to="/tourist">Tourist</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to="/staff">Staff</NavLinks>
                      </NavItem> */}
                      <DesktopDropDown>
                        <Dropdown>
                          <DropdownToggle variant="" id="dropdown-tourist">
                            Tourist
                          </DropdownToggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <DropdownNavLinks
                                to="/touristDetails"
                                className="d-flex"
                              >
                                Create Tourist
                              </DropdownNavLinks>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <DropdownNavLinks
                                to="/tourist"
                                className="d-flex"
                              >
                                Manage Tourist
                              </DropdownNavLinks>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {userType && isHotelAdmin() && (
                          <>
                            <Dropdown>
                              <DropdownToggle variant="" id="dropdown-staff">
                                Staff
                              </DropdownToggle>

                              <Dropdown.Menu>
                                <Dropdown.Item>
                                  <DropdownNavLinks to="/createStaff">
                                    Create Staff
                                  </DropdownNavLinks>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                  <DropdownNavLinks
                                    to="/staff"
                                    className="d-flex"
                                  >
                                    Manage Staff
                                  </DropdownNavLinks>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </>
                        )}
                      </DesktopDropDown>
                      <MobileDropDown>
                        <div className="pl-4 head">
                          <span>Tourist</span>
                          <SubMenu>
                            <Dropdown.Item>
                              <DropdownNavLinks
                                to="/touristDetails"
                                className="d-flex"
                              >
                                Create Tourist
                              </DropdownNavLinks>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <DropdownNavLinks
                                to="/tourist"
                                className="d-flex"
                              >
                                Manage Tourist
                              </DropdownNavLinks>
                            </Dropdown.Item>
                          </SubMenu>
                        </div>
                        <div className="pl-4 head">
                          <span>Staff</span>
                          <SubMenu>
                            {userType && isHotelAdmin() && (
                              <Dropdown.Item>
                                <DropdownNavLinks to="/createStaff">
                                  Create Staff
                                </DropdownNavLinks>
                              </Dropdown.Item>
                            )}
                            <Dropdown.Item>
                              <DropdownNavLinks to="/staff" className="d-flex">
                                Manage Staff
                              </DropdownNavLinks>
                            </Dropdown.Item>
                          </SubMenu>
                        </div>
                      </MobileDropDown>
                      {/* <NavItem>
                        <NavLinks to="/blacklist">Blacklist</NavLinks>
                      </NavItem> */}
                      <NavItemProfile>
                        <ProfilePicture
                          src={
                            user && user.hotelLogo
                              ? user.hotelLogo
                              : "https://image.flaticon.com/icons/png/512/660/660611.png"
                          }
                          onClick={toggleProfileContext}
                        />
                        <ProfileContext
                          className={`border ${
                            profileContext ? "hide" : "show"
                          } `}
                        >
                          {/* <ProfileContextItemMobile>
                            <ProfileContextItemMobileLink to="/hotelDetails">
                              Profile
                            </ProfileContextItemMobileLink>
                          </ProfileContextItemMobile> */}
                          <ProfileContextItem>
                            <ProfileContextItemLink to="/createProfile">
                              Create Profile
                            </ProfileContextItemLink>
                          </ProfileContextItem>
                          {/* <ProfileContextItem>
                            <ProfileContextItemLink to="/touristDetails">
                              Create Tourist
                            </ProfileContextItemLink>
                          </ProfileContextItem> */}
                          {userType && isHotelAdmin() && (
                            <>
                              {/* <ProfileContextItem>
                                <ProfileContextItemLink to="/createStaff">
                                  Create Staff
                                </ProfileContextItemLink>
                              </ProfileContextItem> */}

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
