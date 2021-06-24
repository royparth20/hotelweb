import React from "react";

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
const UserDetails = (props) => {
  const { setEmail, setPassword, setConfPass, error } = props;
  let history = useHistory();

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
        <FormInput>
          <InputPass
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></InputPass>
        </FormInput>
        <FormLabelError>{error["password"]}</FormLabelError>
      </FormGroup>

      <FormGroup>
        <FormLabel>Confirm Password</FormLabel>
        <FormInput>
          <InputPass
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
