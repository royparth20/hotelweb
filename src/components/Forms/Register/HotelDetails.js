import React from "react";
import { useHistory } from "react-router-dom";
import {
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  FormLabelError,
  InputDropdown,
  InputFile,
  InputDropdownOption,
} from "./RegisterForm.elements";

const HotelDetails = (props) => {
  let history = useHistory();

  const {
    setUserName,
    setContact,
    setAddress,
    setDistrict,
    handleLogoChange,
    setCountry,
    setCity,
    error,
  } = props;
  //   const [username, setUserName] = useState();

  //   const [contact, setContact] = useState();

  //   const [address, setAddress] = useState();
  //   const [district, setDistrict] = useState("District1");
  //   const [country, setCountry] = useState("India");
  //   const [city, setCity] = useState("Mumbai");

  return (
    <>
      <FormGroup>
        <FormLabel>Name</FormLabel>
        <FormInput>
          <Input
            placeholder="Enter the name of the hotel"
            onChange={(e) => setUserName(e.target.value)}
          ></Input>
        </FormInput>
        <FormLabelError>{error["username"]}</FormLabelError>
      </FormGroup>

      <FormGroup>
        <FormLabel>Hotel Logo </FormLabel>
        <InputFile
          // type="file"
          placeholder="Upload the Logo of the hotel"
          onChange={(e) => {
            handleLogoChange(e);
          }}
          // ref={input => this.fileInput = input}
          className="form-control"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Address</FormLabel>
        <FormInput>
          <Input
            placeholder="Enter address of the hotel"
            onChange={(e) => setAddress(e.target.value)}
          ></Input>
        </FormInput>
        <FormLabelError>{error["address"]}</FormLabelError>
      </FormGroup>

      <FormGroup>
        <FormLabel>Country</FormLabel>
        <FormInput>
          <InputDropdown
            placeholder="Enter Country"
            onChange={(e) => setCountry(e.target.value || "India")}
          >
            <InputDropdownOption>India</InputDropdownOption>
            <InputDropdownOption>US</InputDropdownOption>
          </InputDropdown>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>District</FormLabel>
        <FormInput>
          <InputDropdown
            placeholder="Enter District"
            onChange={(e) => setDistrict(e.target.value || "District1")}
          >
            <InputDropdownOption>District1</InputDropdownOption>
            <InputDropdownOption>District2</InputDropdownOption>
          </InputDropdown>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>City</FormLabel>
        <FormInput>
          <InputDropdown
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value || "Mumbai")}
          >
            <InputDropdownOption>Mumbai</InputDropdownOption>
            <InputDropdownOption>Delhi</InputDropdownOption>
          </InputDropdown>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Telephone</FormLabel>
        <FormInput>
          <Input
            placeholder="Enter Hotel Telephone number"
            onChange={(e) => setContact(e.target.value)}
          ></Input>
        </FormInput>
        <FormLabelError>{error["contact"]}</FormLabelError>
      </FormGroup>
    </>
  );
};

export default HotelDetails;
