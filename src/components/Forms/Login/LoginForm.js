import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../../../api";
import api from "../../../axios";
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  Button,
  RememberMeCheckBox,
  RememberMeText,
  ForgetPasswordLink,
  FormLabelError,
  InputPasswordFeild,
  InputPass,
} from "./LoginForm.elements";
// import InputPass from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import { FaLongArrowAltRight } from "react-icons/fa";
import { Row, Col } from "styled-bootstrap-grid";
import { Form } from "react-bootstrap";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "../../../css/style.css";
import authActions from "../../../store/actions/authActions";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
export default function LoginForm() {
  let history = useHistory();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState({});
  const [userType, setUserType] = useState("hotel");
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();
  ////////////Ajax/////////////////////////////////////////
  async function LoginUser(credentials) {
    var data = JSON.stringify({
      email: credentials.username,
      password: credentials.password,
    });

    var config = {
      method: "post",
      url: "hotel/login",

      data: data,
    };
    API(config)
      .then(function (response) {
        var data = JSON.stringify(response.data);

        console.log("LOGIN ==> ", response.data);
        // const token = localStorage.setItem("token", response.data.token);
        const hotel_id = localStorage.setItem("hotel_id", response.data.id);
        toastr.success(response.data.message);

        dispatch({
          type: authActions.actions.LOGIN,
          payload: response.data,
        });
        // setLoading(fal,se); coz history.push will unmount the comp...
        //const hotel_token = localStorage.setItem('hotel_token',response.data.token);
        // history.replace("/home");
        history.push("/home");
        // window.location.replace("/home");
        //setToken(data.token)
      })
      .catch(function (error) {
        toastr.error(error.response.data.message);
      });
  }
  ////////////Ajax end/////////////////////////////////////////
  function valid() {
    setError({});
    let errors = {};
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!username) {
      errors["name"] = "Email is empty";
    } else if (!re.test(username)) {
      errors["name"] = "Email is not valid";
    }
    if (!password) {
      errors["password"] = "Password is empty";
    } else if (password.length < 6) {
      errors["password"] = "Password is should be min 6 length.";
    }
    console.log("errors", errors);
    if (Object.entries(errors).length > 0) {
      setError(errors);
      return false;
    }
    return true;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!valid()) {
      return false;
    }
    console.log(userType);
    if (userType === "hotel") {
      const token = await LoginUser({
        username,
        password,
      });
    } else {
      const payload = {
        // staff/login
        staffEmail: username,
        staffPassword: password,
      };
      try {
        const { data } = await api.loginStaff(payload);
        toastr.success(data.message);

        dispatch({
          type: authActions.actions.LOGIN,
          payload: data,
        });
        history.push("/home");
      } catch (error) {
        console.log("ERR LOGIN ==>", error);
        toastr.error(error.response.data.message);
      }
    }
    // setToken(token);
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  ////////////Ajax/////////////////////////////////////////
  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <div className="row">
              <div className="col-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="userType"
                    id="flexRadioStaff"
                    value="staff"
                    checked={userType === "staff"}
                    onChange={(e) => {
                      setUserType(e.currentTarget.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Staff
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="hotel"
                    name="userType"
                    checked={userType === "hotel"}
                    id="flexRadioHotel"
                    onChange={(e) => {
                      setUserType(e.currentTarget.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Hotel
                  </label>
                </div>
              </div>
            </div>
            <FormLabel>Email</FormLabel>
            <FormInput>
              <Input
                placeholder="Enter email address"
                onChange={(e) => setUserName(e.target.value)}
              ></Input>
              {}
              <FormLabelError>{error["name"]}</FormLabelError>
            </FormInput>
          </FormGroup>

          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormInput>
              <InputPass
                placeholder="Enter Password"
                type={passwordShown ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                variant="outlined"
                id="outlined-Password"
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={togglePasswordVisiblity}
                      onMouseDown={togglePasswordVisiblity}
                    >
                      {passwordShown ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {/* <InputPasswordFeild>
                <InputPass
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                ></InputPass>
                {passwordShown ? (
                  <VisibilityIcon onClick={togglePasswordVisiblity} />
                ) : (
                  <VisibilityOffIcon
                    id="clearBtn"
                    onClick={togglePasswordVisiblity}
                  />
                )}
              </InputPasswordFeild> */}
              <FormLabelError>{error.password}</FormLabelError>
            </FormInput>
          </FormGroup>

          <Row className="p-0 m-0">
            <Col xs={12} sm={6} md={6} lg={6} xl={6} className="p-2 m-0">
              <RememberMeCheckBox />
              <RememberMeText>Remember me</RememberMeText>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6} className="p-2 m-0">
              <ForgetPasswordLink>Forget Password?</ForgetPasswordLink>
            </Col>
          </Row>

          <FormGroup>
            <Button>
              Login <FaLongArrowAltRight />
            </Button>
          </FormGroup>
        </form>
      </FormContainer>
    </>
  );
}
