import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import API from "../../../api";
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
  InputDropdownOption,
} from "./RegisterForm.elements";
import { FaLongArrowAltRight } from "react-icons/fa";
import toastr from 'toastr'

import 'toastr/build/toastr.min.css'
import '../../../css/style.css';

const RegisterForm = () => {
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
  
  
  console.log("country",district)
  async function RegisterUser(credentials) {
    var data = JSON.stringify({
      hotelName: username,
      ownerName: owner,
      ownerPermanentAddress: ownerPerAdd,
      ownerCurrentAddress: ownerCurrAdd,
      ownerTelephoneNumber: ownerContNo,
      hotelTelephoneNumber : contact,
      email: email,
      hotelLogo:hotelLogo,
      hotelLicense :hotelLicense,
      address: address,
      password: password,
      confirmPassword: conf_pass,
      city:city,
      country:country,
      district:district,
      hotelGrade : grade
    });

    var config = {
      method: "post",
      url: "hotel/",

      data: data,
    };
    return await API(config)
      .then(function (response) {
           toastr.success(response.data.message)
//
        history.push("/login");
        //setToken(data.token)
      })
      .catch(function (error) {
        console.log("hi test");
        if (error.response) {
             toastr.error(error.response.data.message)
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
    e.preventDefault();

    if (!valid()) {
      return false;
    }
    if(hotelLogo!==undefined){
    const token = await RegisterUser({
      username,
      password,
    });}
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
    touristImagedata.append('file', event.target.files[0]);
    var touristImageconfig = {
      method: 'post',
      url: 'files',
      data : touristImagedata
    };
    var config = {
      method: "post",
      url: "files/",

      data: touristImagedata,
    };
    return await API(config)
      .then(function (response) {
        console.log("response",response)
        setHotelLogo(response.data.data)
          //   toastr.success(response.data.message)

      })
      .catch(function (error) {
        console.log("hi test");
        if (error.response) {
                
         // setError({ name: error.response.data.message });
        }
      });

}
    const handleInputChange = async (event) => {
    
      var touristImagedata = new FormData();
      touristImagedata.append('file', event.target.files[0]);
      var touristImageconfig = {
        method: 'post',
        url: 'files',
        data : touristImagedata
      };
    
      return await API(touristImageconfig)
        .then(function (response) {
          sethotelLicense(response.data.data)
          console.log("response",response)
        })
        .catch(function (error) {
          console.log("hi test");
          if (error.response) {
            setError({ name: error.response.data.message });
          }
        });

  }
  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
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
					<input type="file" placeholder="Upload the Logo of the hotel"
						onChange={(e)=>{handleLogoChange(e)}}
						// ref={input => this.fileInput = input}
						className="form-control" />
        </FormGroup>

          {/* <FormGroup>
          <FormLabel>Owner</FormLabel>
          <FormInput>
            <Input placeholder="Owner of the hotel" onChange={e => setOwner(e.target.value)}></Input>
          </FormInput>
          <FormLabelError>{error["owner"]}</FormLabelError>
        </FormGroup> */}

          {/* <FormGroup>
            <FormLabel>Contact</FormLabel>
            <FormInput>
              <Input
                placeholder="Enter Hotel Telephone number"
                onChange={(e) => setContact(e.target.value)}
              ></Input>
            </FormInput>
            <FormLabelError>{error["contact"]}</FormLabelError>
          </FormGroup> */}

          {/* <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput>
              <Input
                placeholder="Enter email address"
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
            </FormInput>
            <FormLabelError>{error["email"]}</FormLabelError>
          </FormGroup> */}

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

           {/* Country */}
           <FormGroup>
            <FormLabel>Country</FormLabel>
            <FormInput>
              <InputDropdown
                placeholder="Enter Country"
                onChange={(e) => setCountry(e.target.value||"India")}
              >
                <InputDropdownOption>India</InputDropdownOption>
                <InputDropdownOption>US</InputDropdownOption>
              </InputDropdown>
            </FormInput>
          </FormGroup>

          {/* District */}
          <FormGroup>
            <FormLabel>District</FormLabel>
            <FormInput>
              <InputDropdown
                placeholder="Enter District"
                onChange={(e) => setDistrict(e.target.value||"District1")}
              >
                <InputDropdownOption>District1</InputDropdownOption>
                <InputDropdownOption>District2</InputDropdownOption>
              </InputDropdown>
            </FormInput>
          </FormGroup>
          {/* City */}
          <FormGroup>
            <FormLabel>City</FormLabel>
            <FormInput>
              <InputDropdown
                placeholder="Enter City"
                onChange={(e) => setCity(e.target.value||"Mumbai")}
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

          <FormGroup>
            <FormLabel>Owner</FormLabel>
            <FormInput>
              <Input
                placeholder="Owner of the hotel"
                onChange={(e) => setOwner(e.target.value)}
              ></Input>
            </FormInput>
            <FormLabelError>{error["owner"]}</FormLabelError>
          </FormGroup>

          <FormGroup>
            <FormLabel>Owner Contact Number</FormLabel>
            <FormInput>
              <Input
                placeholder="Enter Owner Contact Number"
                onChange={(e) => setOwnerContNo(e.target.value)}
              ></Input>
            </FormInput>
            <FormLabelError>{error["owner_contact"]}</FormLabelError>
          </FormGroup>

          <FormGroup>
            <FormLabel>Owner Permanent Address</FormLabel>
            <FormInput>
              <Input
                placeholder="Enter Permanent Address of Owner"
                onChange={(e) => setOwnerPerAdd(e.target.value)}
              ></Input>
            </FormInput>
            <FormLabelError>{error["owner_permanent_address"]}</FormLabelError>
          </FormGroup>

          <FormGroup>
            <FormLabel>Owner Current Address</FormLabel>
            <FormInput>
              <Input
                placeholder="Enter Current Address of Owner"
                onChange={(e) => setOwnerCurrAdd(e.target.value)}
              ></Input>
            </FormInput>
            <FormLabelError>{error["owner_current_address"]}</FormLabelError>
          </FormGroup>

          {/* Licence Upload */}
          <FormGroup>
            <FormLabel>Upload Licence </FormLabel>
					<input type="file"
						onChange={(e)=>{handleInputChange(e)}}
						// ref={input => this.fileInput = input}
						className="form-control" />
        </FormGroup>
          {/* MAP */}
          
          {/* Grade */}
          <FormGroup>
            <FormLabel>Grade</FormLabel>
            <FormInput>
              <InputDropdown
                placeholder="Enter Grade"
                onChange={(e) => setGrade(e.target.value)}
              >
                <InputDropdownOption>1 star</InputDropdownOption>
                <InputDropdownOption>2 star</InputDropdownOption>
              </InputDropdown>
            </FormInput>
          </FormGroup>

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
            <Button>
              Register
              <FaLongArrowAltRight />
            </Button>
          </FormGroup>
        </form>
      </FormContainer>
    </>
  );
};

export default RegisterForm;
