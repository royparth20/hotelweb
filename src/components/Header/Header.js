import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn,
} from "./Header.elements";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import { Container, Row, Col } from "styled-bootstrap-grid";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [page, setcurrentPage] = useState("");
  useEffect(() => {
    process.browser && setcurrentPage(window.location.pathname);
    console.log("path", window.location.pathname);
  }, [process.browser && window.location.pathname]);
  const handleClick = () => setClick(!click);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <Container fluid className="p-0 m-0">
        <Row className="p-0 m-0">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-0 m-0">
            <IconContext.Provider value={{ color: "#096DAB" }}>
              <Nav className="loggedin">
                <NavbarContainer>
                  <Navlogo to="/">Hotel Management</Navlogo>
                  <div>
                    <MobileIcon onClick={handleClick}>
                      {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                      {/*<NavItem>
                      <NavLinks to="/">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to="/about">About us</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to="/service">Service</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to="/blog">Blog</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to="/contact">Contact us</NavLinks>
                    </NavItem>*/}
                      <NavItemBtn>
                        {page !== "/register" && page !== "/login" && button ? (
                          <NavBtnLink to="/login">
                            <Button primary>Login</Button>
                          </NavBtnLink>
                        ) : (
                          // <NavBtnLink to='/login'>
                          //   <Button fontBig primary>
                          //     Login
                          //   </Button>
                          // </NavBtnLink>
                          <></>
                        )}
                      </NavItemBtn>
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

export default Header;
