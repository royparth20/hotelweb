import React, { useState, useEffect } from "react";
import ReactWizard from "react-bootstrap-wizard";
import { useHistory } from "react-router-dom";
import API from "../../../api";
import api from "../../../axios";
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  Button,
  FormLabelError,
  InputPass,
  InputDropdown,
  InputFile,
  InputDropdownOption,
} from "./RegisterForm.elements";
import { FaLongArrowAltRight } from "react-icons/fa";
import toastr from "toastr";

import "toastr/build/toastr.min.css";
import "../../../css/style.css";
import HotelDetails from "./HotelDetails";
import UserDetails from "./UserDetails";
import OwnerDetails from "./OwnerDetails";
const TempRegisterForm = () => {
  let history = useHistory();
  const [username, setUserName] = useState();
  const [owner, setOwner] = useState();
  const [ownerContNo, setOwnerContNo] = useState();
  const [ownerPerAdd, setOwnerPerAdd] = useState();
  const [ownerCurrAdd, setOwnerCurrAdd] = useState();

  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [hotelLicense, sethotelLicense] = useState();
  const [password, setPassword] = useState();
  const [conf_pass, setConfPass] = useState();
  const [error, setError] = useState({});
  const [district, setDistrict] = useState("District1");
  const [country, setCountry] = useState("India");
  const [city, setCity] = useState("Mumbai");
  const [grade, setGrade] = useState("1 star");
  const [hotelLogo, setHotelLogo] = useState();

  console.log("country", district);
  async function RegisterUser(credentials) {
    var data = JSON.stringify({
      hotelName: username,
      ownerName: owner,
      ownerPermanentAddress: ownerPerAdd,
      ownerCurrentAddress: ownerCurrAdd,
      ownerTelephoneNumber: ownerContNo,
      hotelTelephoneNumber: contact,
      email: email,
      hotelLogo: hotelLogo,
      hotelLicense: hotelLicense,
      address: address,
      password: password,
      confirmPassword: conf_pass,
      city: city,
      country: country,
      district: district,
      hotelGrade: grade,
    });

    var config = {
      method: "post",
      url: "hotel/",

      data: data,
    };
    return API(config)
      .then(function (response) {
        toastr.success(response.data.message);
        //
        history.push("/login");
        //setToken(data.token)
      })
      .catch(function (error) {
        console.log("hi test");
        if (error.response) {
          toastr.error(error.response.data.message);
          //
          //setError({ name: error.response.data.message });
        }
      });
  }

  function valid() {
    let errors = {};
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!username) {
      errors["username"] = "Name is empty";
    }
    if (!email) {
      errors["email"] = "Email is empty";
    } else if (!re.test(email)) {
      errors["email"] = "Email is not valid";
    }
    if (!password) {
      errors["password"] = "Password is empty";
    } else if (password.length < 7) {
      errors["password"] = "Password length should 8 or more";
    }
    if (!conf_pass) {
      errors["conf_pass"] = "Confirm Password is empty";
    } else if (conf_pass != password) {
      errors["conf_pass"] = "Confirm Password is not same as Password";
    }

    if (!contact) {
      errors["contact"] = "Contact is empty";
    }

    if (Object.entries(errors).length > 0) {
      setError(errors);
      return false;
    }
    return true;
  }
  const handleSubmit = async (e) => {
    //     e.preventDefault();

    if (!valid()) {
      return false;
    }
    if (hotelLogo !== undefined) {
      const token = await RegisterUser({
        username,
        password,
      });
    }
    // setToken(token);
    /*
     const [username, setUserName] = useState();
  const [owner, setOwner] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
 
  const [password, setPassword] = useState();
  const [conf_pass, setConfPass] = useState();
  */
  };

  const handleLogoChange = async (event) => {
    var touristImagedata = new FormData();
    touristImagedata.append("file", event.target.files[0]);
    var touristImageconfig = {
      method: "post",
      url: "files",
      data: touristImagedata,
    };
    var config = {
      method: "post",
      url: "files/",

      data: touristImagedata,
    };
    return await API(config)
      .then(function (response) {
        console.log("response", response);
        setHotelLogo(response.data.data);
        //   toastr.success(response.data.message)
      })
      .catch(function (error) {
        console.log("hi test");
        if (error.response) {
          // setError({ name: error.response.data.message });
        }
      });
  };
  const handleInputChange = async (event) => {
    var touristImagedata = new FormData();
    touristImagedata.append("file", event.target.files[0]);
    var touristImageconfig = {
      method: "post",
      url: "files",
      data: touristImagedata,
    };

    return await API(touristImageconfig)
      .then(function (response) {
        sethotelLicense(response.data.data);
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("hi test");
        if (error.response) {
          setError({ name: error.response.data.message });
        }
      });
  };

  const [countryList, setCountryList] = useState(null);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  useEffect(async () => {
    try {
      const { data } = await api.getCountryList();
      // console.log(data.data);
      setCountryList(data.data);
    } catch (error) {
      console.error("COUNTRY LIST ERR ==> ", error);
    }
  }, []);
  const onchangeCountry = async (item) => {
    // e.preventDefault();
    // console.log(JSON.stringify(item, null, 4));
    try {
      const { data } = await api.getStateList(item._id);
      // console.log(data?.data?.stateList);
      setStateList(data?.data?.stateList);
      setCityList([]);
    } catch (error) {
      console.error(error);
    }
  };
  const onchangeState = async (item) => {
    // e.preventDefault();
    // console.log(JSON.stringify(item, null, 4));
    try {
      const { data } = await api.getCityList(item._id);
      // console.log(data?.data?.cityList);
      setCityList(data?.data?.cityList);
    } catch (error) {
      console.error(error);
    }
  };

  var steps = [
    // this step hasn't got a isValidated() function, so it will be considered to be true
    {
      stepName: "Hotel Info",

      component: (
        <HotelDetails
          error={error}
          setUserName={setUserName}
          setContact={setContact}
          setAddress={setAddress}
          setDistrict={setDistrict}
          handleLogoChange={handleLogoChange}
          setCountry={setCountry}
          setStateList={setStateList}
          setCityList={setCityList}
          setCity={setCity}
          countryList={countryList}
          onchangeCountry={onchangeCountry}
          onchangeState={onchangeState}
          stateList={stateList}
          cityList={cityList}
          error={error}
        />
      ),
    },
    // this step will be validated to false
    {
      stepName: "Owner Info",

      component: (
        <OwnerDetails
          handleInputChange={handleInputChange}
          setOwner={setOwner}
          setOwnerContNo={setOwnerContNo}
          setOwnerPerAdd={setOwnerPerAdd}
          setOwnerCurrAdd={setOwnerCurrAdd}
          setGrade={setGrade}
          error={error}
        />
      ),
    },
    {
      stepName: "User",

      component: (
        <UserDetails
          setEmail={setEmail}
          setPassword={setPassword}
          setConfPass={setConfPass}
          error={error}
        />
      ),
    },
    // this step will never be reachable because of the seconds isValidated() steps function that will always return false
  ];

  return (
    <>
      <FormContainer className="scrollbar-morpheus-den">
        <form onSubmit={handleSubmit}>
          <ReactWizard
            steps={steps}
            navSteps
            headerTextCenter
            validate
            color="primary"
            previousButtonClasses="btn-prev-reactWizard"
            finishButtonClasses="btn-finish-reactWizard"
            nextButtonClasses="btn-next-reactWizard"
            progressbar={false}
            finishButtonText={"Register"}
            finishButtonClick={handleSubmit}
          />
        </form>
      </FormContainer>
    </>
  );
};

export default TempRegisterForm;
