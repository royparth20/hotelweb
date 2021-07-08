import "./footer.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import {
  FooterWrapper,
  LogoHeading,
  AboutText,
  Heading,
  CopyRight,
  FooterLink,
  FooterSocialLink,
} from "./Footer.elements";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import facebook from "./Facebook.png";
import instagram from "./Instagram.png";
import twitter from "./Twitter.png";
import linkedIn from "./Linkedin.png";

import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
// import { Formik } from "formik";
import api from "../../axios";
import { uiActions } from "../../store/actions/uiActions";
import { contactUsActions } from "../../store/actions/contactUsActions";
import * as yup from "yup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useHistory } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
  message: "",
};

const schema = yup.object({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().label("Password"),
  message: yup.string().required().label("Message"),
});

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [socialLink, setSocialLink] = useState();
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const scrollToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      const values = {
        name: name,
        email: email,
        message: message,
      };
      try {
        api
          .contactUs(values)
          .then(({ data }) => {
            console.log("data", values);
            dispatch(contactUsActions.contactUs(data.data));
            toastr.success(data.data);
            setName("");
            setEmail("");
            setMessage("");
          })
          .catch((err) => {
            toastr.error(
              err.response ? err.response.data.message : err.message
            );
          });
      } catch (error) {
        console.log(error);

        toastr.error(
          error.response ? error.response.data.message : error.message
        );
      }
    }
  };
  const scrollToTopOpenDropDown = () => {
    // if (!e.target.closest("#dropdown-reports") && openDropdown) {
    // }
    // setOpenDropdown(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleContactUsChange = (event) => {
    if (event.target.name == "name") {
      setName(event.target.value);
    }
    if (event.target.name == "email") {
      setEmail(event.target.value);
    }
    if (event.target.name == "message") {
      setMessage(event.target.value);
    }
  };

  useEffect(async () => {
    try {
      const { data } = await api.socialLink();
      // console.log(data);
      setSocialLink(data.data);
    } catch (error) {}
  }, []);
  return (
    <>
      <FooterWrapper className="footer">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <LogoHeading>Hotel Management</LogoHeading>
              <AboutText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
                dui, dictumst mi egestas neque. Eget bibendum dignissim cras ac
                quis volutpat quam ac natoque. Enim faucibus morbi blandit sed
                pulvinar id posuere. Enim nibh bibendum risus integer.
              </AboutText>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2} xl={2}>
              <Heading>Explore</Heading>

              <ul className="m-0 list-inline">
                <div className="mb-1" onClick={scrollToTop}>
                  <li>
                    <FooterLink to="/home">Dashboard</FooterLink>
                  </li>
                </div>
                <div className="mb-1" onClick={scrollToTop}>
                  <li>
                    <FooterLink to="/tourist">Tourist</FooterLink>
                  </li>
                </div>
                <div className="mb-1" onClick={scrollToTop}>
                  <li>
                    <FooterLink to="/staff">Staff</FooterLink>
                  </li>
                </div>
                {/* <div className="mb-1" onClick={scrollToTop}>
                  <li>
                    <FooterLink to="/blacklist">Blacklist</FooterLink>
                  </li>
                </div> */}
              </ul>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <Heading>Contact</Heading>
              <form className="mb-4" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    aria-describedby="emailHelp"
                    // value={values["name"]}
                    value={name}
                    required
                    onChange={handleContactUsChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    // value={values["email"]}
                    value={email}
                    required
                    onChange={handleContactUsChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Message</label>
                  <input
                    type="text"
                    required
                    name="message"
                    className="form-control"
                    aria-describedby="emailHelp"
                    // value={values["message"]}
                    value={message}
                    onChange={handleContactUsChange}
                  />
                </div>
                <div>
                  <button type="submit" className="send-btn">
                    Send
                  </button>
                </div>
              </form>
              {/* <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}
              >
                {({ handleChange, handleSubmit, values, errors }) => (
                  <div>
                    <form className="mb-4">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          aria-describedby="emailHelp"
                          // value={values["name"]}
                          value={name}
                          onChange={handleContactUsChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          // value={values["email"]}
                          value={email}
                          onChange={handleContactUsChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Message</label>
                        <input
                          type="text"
                          name="message"
                          className="form-control"
                          aria-describedby="emailHelp"
                          // value={values["message"]}
                          value={message}
                          onChange={handleContactUsChange}
                        />
                      </div>
                    </form>

                    <div>
                      <Button type="submit" onClick={onSubmit}>
                        <FooterLink to="#" className="send-btn">
                          Send
                        </FooterLink>
                      </Button>
                    </div>
                  </div>
                )}
              </Formik> */}
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <Heading>Follow</Heading>

              <ul className="m-0 list-inline">
                <li className="list-inline-item">
                  <FooterSocialLink
                    href={socialLink && socialLink?.facebook}
                    target="_blank"
                  >
                    <img alt="#" src={facebook} />
                  </FooterSocialLink>
                </li>
                <li className="list-inline-item">
                  <FooterSocialLink
                    href={socialLink && socialLink?.twitter}
                    target="_blank"
                  >
                    <img alt="#" src={twitter} />
                  </FooterSocialLink>
                </li>
                <li className="list-inline-item">
                  <FooterSocialLink
                    href={socialLink && socialLink?.instagram}
                    target="_blank"
                  >
                    <img alt="#" src={instagram} />
                  </FooterSocialLink>
                </li>
                {/* <li className="list-inline-item">
                  <FooterLink href={socialLink && socialLink?.facebook}>
                    <img alt="#" src={linkedIn} />
                  </FooterLink>
                </li> */}
              </ul>
            </Col>
          </Row>
        </Container>
        <Row className="p-0 m-0">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-0 m-0">
            <CopyRight>Copyright 2021</CopyRight>
          </Col>
        </Row>
      </FooterWrapper>
    </>
  );
};

export default Footer;
