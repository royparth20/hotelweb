import React, { useEffect, useState } from "react";
import api from "../../../../axios";
import {
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  Input,
  Dt,
  FileB,
  InputNumber,
  InputDropdownOption,
  InputDropdown,
  InputPhoneNumber,
} from "./Form.elements";

const Forms = (props) => {
  const {
    updateReasonOfStay,
    updateRoomNumber,
    updateTFname,
    updateCountry,
    updateCountryArrivedFrom,
    updateDtArrival,
    updateDtDeparture,
    updateAddress,
    updateDistrict,
    updatePhoto,
    updateTFatherName,
    uploadVisa,
    updateTLname,
    updateNumber,
    updateJob,
    updateNationality,
    updateMobile,
    updateArrivedFrom,
    updateTnumber,
    updateCity,
    updateVisaNumber,
    updateState,
    ch,
    type,
    changePassport,

    updateResidentPlace,
    updateAdditionalNumber,
    updateGender,
    updateGrantor,
    updateAge,
    updateVehicle,
  } = props;
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
  useEffect(async () => {}, []);
  return (
    <>
      <div className="row">
        <FormTitle>{/* <p>Details</p> */}</FormTitle>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>First Name</FormLabel>
            <FormInput>
              <Input
                required
                placeholder="Enter Tourist First Name"
                onChange={(e) => updateTFname(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Last Name</FormLabel>
            <FormInput>
              <Input
                placeholder="Enter Last Name"
                onChange={(e) => updateTLname(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Father Name</FormLabel>
            <FormInput>
              <Input
                required={type === "true" ? true : false}
                placeholder="Father Name"
                onChange={(e) => updateTFatherName(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Resident Place</FormLabel>
            <FormInput>
              <Input
                required
                placeholder="Resident Place"
                onChange={(e) => updateResidentPlace(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Passport Number</FormLabel>
            <FormInput>
              <Input
                required
                placeholder="Enter Passport Number"
                onChange={(e) => updateNumber(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Tezkera Number</FormLabel>
            <FormInput>
              <Input
                placeholder="Enter Tazkera Number"
                onChange={(e) => updateTnumber(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Mobile Number</FormLabel>
            <FormInput>
              <InputPhoneNumber
                required
                placeholder="Enter Mobile Number"
                onChange={(e) => updateMobile(e.target.value)}
              ></InputPhoneNumber>
            </FormInput>
          </FormGroup>
        </div>

        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Additional contact number</FormLabel>
            <FormInput>
              <InputPhoneNumber
                placeholder="Enter Additional contact number"
                onChange={(e) => updateAdditionalNumber(e.target.value)}
              ></InputPhoneNumber>
            </FormInput>
          </FormGroup>
        </div>
        {type && type === "true" ? (
          <>
            {/* {console.log("Show ", type)} */}
            <div className="col-md-6 col-sm-12">
              <FormGroup>
                <FormLabel>Address</FormLabel>
                <FormInput>
                  <Input
                    placeholder="Address"
                    onChange={(e) => updateAddress(e.target.value)}
                  ></Input>
                </FormInput>
              </FormGroup>
            </div>
            <div className="col-md-6 col-sm-12">
              <FormGroup>
                <FormLabel>Country</FormLabel>
                <FormInput>
                  <InputDropdown
                    placeholder="Enter Country"
                    onChange={(e) => {
                      try {
                        let newVal = JSON.parse(e.target.value);
                        onchangeCountry(newVal);
                        updateCountry(newVal.name);
                      } catch (error) {
                        setCityList([]);
                        setStateList([]);
                        updateCountry("");
                      }
                    }}
                  >
                    <InputDropdownOption value="">
                      Select Country
                    </InputDropdownOption>
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
            </div>
            <div className="col-md-6 col-sm-12">
              <FormGroup>
                <FormLabel>State</FormLabel>
                <FormInput>
                  <InputDropdown
                    placeholder="Enter State"
                    onChange={(e) => {
                      try {
                        let newVal = JSON.parse(e.target.value);
                        onchangeState(newVal);
                        updateState(newVal.name);
                      } catch (error) {
                        setCityList([]);
                        updateState("");
                      }
                    }}
                  >
                    <InputDropdownOption value="">
                      Select State
                    </InputDropdownOption>
                    {stateList &&
                      stateList.map((item) => (
                        <InputDropdownOption value={JSON.stringify(item)}>
                          {item.name}
                        </InputDropdownOption>
                      ))}
                  </InputDropdown>
                </FormInput>
              </FormGroup>
            </div>
            <div className="col-md-6 col-sm-12">
              <FormGroup>
                <FormLabel>City</FormLabel>
                <FormInput>
                  <InputDropdown
                    placeholder="Enter City"
                    onChange={(e) => updateCity(e.target.value)}
                  >
                    <InputDropdownOption value="">
                      Select City
                    </InputDropdownOption>
                    {cityList &&
                      cityList.map((item) => (
                        <InputDropdownOption value={item.name}>
                          {item.name}
                        </InputDropdownOption>
                      ))}
                  </InputDropdown>
                </FormInput>
              </FormGroup>
            </div>

            <div className="col-md-6 col-sm-12">
              <FormGroup>
                <FormLabel>District</FormLabel>
                <FormInput>
                  <Input
                    placeholder="District"
                    onChange={(e) => updateDistrict(e.target.value)}
                  ></Input>
                </FormInput>
              </FormGroup>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Reason of stay</FormLabel>
            <FormInput>
              <Input
                required
                placeholder="Reason of stay"
                onChange={(e) => updateReasonOfStay(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Date of Arrival In The Hotel</FormLabel>
            <FormInput>
              <Dt
                required
                onChange={(e) => updateDtArrival(e.target.value)}
              ></Dt>
            </FormInput>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Date Of Departure From Hotel</FormLabel>
            <FormInput>
              <Dt
                required
                onChange={(e) => updateDtDeparture(e.target.value)}
              ></Dt>
            </FormInput>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Room number</FormLabel>
            <FormInput>
              <Input
                required
                placeholder="Room number"
                onChange={(e) => updateRoomNumber(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        </div>
        {/* <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Country Arrived From</FormLabel>
            <FormInput>
              <Input
                required
                placeholder="Country Arrived From"
                onChange={(e) => updateCountryArrivedFrom(e.target.value)}
              ></Input>
            </FormInput>
          </FormGroup>
        </div> */}

        {type === "false" && (
          <>
            <div className="col-md-6 col-sm-12">
              <FormGroup>
                <FormLabel>Nationality</FormLabel>
                <FormInput>
                  <Input
                    required
                    placeholder="Enter Nationality"
                    onChange={(e) => updateNationality(e.target.value)}
                  ></Input>
                </FormInput>
              </FormGroup>
            </div>
            <div className="col-md-6 col-sm-12">
              <FormGroup>
                <FormLabel>Visa Number</FormLabel>
                <FormInput>
                  <Input
                    placeholder="Enter Visa Number"
                    onChange={(e) => updateVisaNumber(e.target.value)}
                  ></Input>
                </FormInput>
              </FormGroup>
            </div>
            <div className="col-md-6 col-sm-12">
              <FormGroup>
                <FormLabel>Province arrived from</FormLabel>
                <FormInput>
                  <Input
                    required
                    placeholder="Province arrived from"
                    onChange={(e) => updateArrivedFrom(e.target.value)}
                  ></Input>
                </FormInput>
              </FormGroup>
            </div>
          </>
        )}

        {type === "true" && (
          <div className="col-md-6 col-sm-12">
            <FormGroup>
              <FormLabel>Garantor</FormLabel>
              <FormInput>
                <Input
                  placeholder="Garantor"
                  onChange={(e) => updateGrantor(e.target.value)}
                ></Input>
              </FormInput>
            </FormGroup>
          </div>
        )}
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Gender</FormLabel>
            {/* <FormInput>
              <Input required placeholder="Gender"></Input>
            </FormInput> */}

            <InputDropdown
              required
              
              onChange={(e) => {
                updateGender(e.target.value);
              }}
            >
              <InputDropdownOption value="Male">
                Male
              </InputDropdownOption>
              <InputDropdownOption value="Female">Female</InputDropdownOption>
            </InputDropdown>
          </FormGroup>
        </div>

        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Age</FormLabel>
            <FormInput>
              <InputNumber
                required
                type="number"
                placeholder="Age"
                onChange={(e) => updateAge(e.target.value)}
              ></InputNumber>
            </FormInput>
          </FormGroup>
        </div>

        {type === "true" && (
          <div className="col-md-6 col-sm-12">
            <FormGroup>
              <FormLabel>Vehicle number plate</FormLabel>
              <FormInput>
                <Input
                  placeholder="Vehicle number plate "
                  onChange={(e) => updateVehicle(e.target.value)}
                ></Input>
              </FormInput>
            </FormGroup>
          </div>
        )}
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Photo Of Tourist</FormLabel>
            <br></br>
            <FileB onChange={updatePhoto}></FileB>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Upload visa </FormLabel>
            <br />

            <FileB onChange={uploadVisa}></FileB>
          </FormGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <FormLabel>Upload passport/tazkera</FormLabel>
            <br></br>
            <FileB onChange={changePassport}></FileB>
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default Forms;
