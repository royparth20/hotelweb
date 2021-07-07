import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  InputDropdown,
  InputDropdownOption,
  Button,
  FormLabelError,
} from "../TouristReports.elements";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { FaSadCry } from "react-icons/fa";
import API from "../../../api_test";
import { useLocation, Link } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "../../../css/style.css";

const TouristReport = (props) => {
  let history = useHistory();
  const touristId = new URLSearchParams(useLocation().search).get("id");
  const [remark, setRemark] = useState();
  const [type, setType] = useState("");

  const setTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleSubmit = async (e) => {
    //   console.log(type);
    e.preventDefault();
    var data = {
      touristId: touristId,
      typeOfsuspicion: type,
      remark: remark,
    };

    var config = {
      method: "post",
      url: "report/create/",
      data: data,
    };
    return await API(config)
      .then(function (response) {
        toastr.success(response.data.data);
        //setToken(data.token)
      })
      .catch(function (error) {
        //console.log(error.response.data.message)
        toastr.error(error.response.data.message);
        if (error.response) {
          // setError({ name: error.response.data.message });
        }
      });
  };
  // console.log("props",this.props)
  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Remark</FormLabel>
            <FormInput>
              <Input
                placeholder="Enter the Remark of the Tourist"
                onChange={(e) => setRemark(e.target.value)}
              ></Input>
            </FormInput>
            {/* <FormLabelError>{error["username"]}</FormLabelError> */}
          </FormGroup>

          <FormGroup>
            <FormLabel>Type</FormLabel>
            <FormInput>
              <InputDropdown
                placeholder="Enter Type of Suspicion"
                onChange={setTypeChange}
              >
                <InputDropdownOption value="">Select Type</InputDropdownOption>
                <InputDropdownOption value="Frequent Guests">
                  Frequent Guests
                </InputDropdownOption>
                <InputDropdownOption>Repeat Stay</InputDropdownOption>
                <InputDropdownOption>
                  Guests on a Specific Day – Calendar Functionality
                </InputDropdownOption>
                <InputDropdownOption>
                  Guests in a Specific Week/ Month
                </InputDropdownOption>
              </InputDropdown>
            </FormInput>
          </FormGroup>
          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </form>
      </FormContainer>
    </>
  );
};
export default TouristReport;
