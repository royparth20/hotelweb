import React from "react";
import { useHistory } from "react-router-dom";
import {
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  FormLabelError,
  InputDropdown,
  InputTelephone,
  InputFile,
  InputDropdownOption,
} from "./RegisterForm.elements";
import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
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
    countryList,
    stateList,
    onchangeState,
    onchangeCountry,
    cityList,
    setCityList,
    setStateList,
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
            onChange={(e) => {
              try {
                let newVal = JSON.parse(e.target.value);
                onchangeCountry(newVal);
                setCountry(newVal.name);
              } catch (error) {
                setCityList([]);
                setStateList([]);
                setCountry("");
              }
            }}
            // onChange={(e) => setCountry(e.target.value || "India")}
          >
            <InputDropdownOption>Select Country</InputDropdownOption>
            {countryList &&
              countryList.map((item) => (
                <InputDropdownOption value={JSON.stringify(item)}>
                  {item.name}
                </InputDropdownOption>
              ))}
            {/* <InputDropdownOption>India</InputDropdownOption>
            <InputDropdownOption>US</InputDropdownOption> */}
          </InputDropdown>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>State</FormLabel>
        <FormInput>
          <InputDropdown
            placeholder="Enter State"
            onChange={(e) => {
              try {
                let newVal = JSON.parse(e.target.value);
                onchangeState(newVal);
                setDistrict(newVal.name);
              } catch (error) {
                setCityList([]);
                setDistrict("");
              }
              // handleChange(e);
            }}
            // onChange={(e) => setDistrict(e.target.value || "District1")}
          >
            <InputDropdownOption>Select State</InputDropdownOption>
            {stateList &&
              stateList.map((item) => (
                <InputDropdownOption value={JSON.stringify(item)}>
                  {item.name}
                </InputDropdownOption>
              ))}
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
            <InputDropdownOption>Select City</InputDropdownOption>
            {cityList &&
              cityList.map((item) => (
                <InputDropdownOption value={item.name}>
                  {item.name}
                </InputDropdownOption>
              ))}
          </InputDropdown>
        </FormInput>
      </FormGroup>

      <FormGroup>
        <FormLabel>Telephone</FormLabel>
        <FormInput>
          {/* <input
            type="tel"
            autoComplete="tel"
            className="PhoneInputInput"
            pattern="[0-9]*"
            placeholder="Enter Hotel Telephone number"
            onChange={(e) => setContact(e)}
          /> */}

          <PhoneInput
            defaultCountry="IN"
            pattern="[0-9]*"
            className="pt-3 p-2 w-100"
            withCountryCallingCode="false"
            international="false"
            countryCallingCodeEditable={false}
            placeholder="Enter Hotel Telephone number"
            onChange={(e) => {
              // console.log(e);
              // console.log(parseInt(formatPhoneNumber(e).split(" ").join("")));
              setContact(parseInt(formatPhoneNumber(e).split(" ").join("")));
            }}
          />
        </FormInput>
        <FormLabelError>{error["contact"]}</FormLabelError>
      </FormGroup>
    </>
  );
};

export default HotelDetails;
