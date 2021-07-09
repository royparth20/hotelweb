import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import {
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  Button,
  FormLabelError,
  InputPass,
} from "./RegisterForm.elements";
import { FaLongArrowAltRight } from "react-icons/fa";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
const UserDetails = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { setEmail, setPassword, setConfPass, error } = props;
  let history = useHistory();
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();
  //   const [conf_pass, setConfPass] = useState();
  //   const [error, setError] = useState({});

  return (
    <>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormInput>
          <Input
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </FormInput>
        <FormLabelError>{error["email"]}</FormLabelError>
      </FormGroup>

      <FormGroup>
        <FormLabel>Password</FormLabel>
        <InputPass
          placeholder="Enter Password"
          type={passwordShown ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          id="outlined-Password"
          label="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={togglePasswordVisiblity}
                onMouseDown={togglePasswordVisiblity}
              >
                {passwordShown ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
        {/* <FormInput>

          <InputPass
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></InputPass>
        </FormInput> */}
        <FormLabelError>{error["password"]}</FormLabelError>
      </FormGroup>

      <FormGroup>
        <FormLabel>Confirm Password</FormLabel>
        <FormInput>
          <InputPass
            type="password"
            placeholder="Re-enter your password"
            onChange={(e) => setConfPass(e.target.value)}
          ></InputPass>
        </FormInput>
        <FormLabelError>{error["conf_pass"]}</FormLabelError>
      </FormGroup>

      <FormGroup>
        <FormLabelError>{error["username"]}</FormLabelError>
      </FormGroup>
    </>
  );
};

export default UserDetails;
