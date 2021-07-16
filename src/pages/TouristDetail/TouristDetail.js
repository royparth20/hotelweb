import React, { useEffect, useState } from "react";
import { map } from "rxjs/operators";

import {
  Main,
  PageTitleContainer,
  PageTitle,
  ContentWrapper,
  BgTopRightImage,
  BgBottomLeftImage,
  PageParagraph,
  FormGroup,
  Select,
  Options,
  FormInput,
  FormLabel,
  ButtonContainer,
  CancelButton,
  SaveButton,
  FormLabelError,
} from "./TouristDetail.elements.js";
import { FormTitle } from "../../components/Forms/TouristDetail/TDLeftDetailForm.elements";
import TDLeftDetailForm from "../../components/Forms/TouristDetail/TDLeftDetailForm";
import TDRightDetailForm from "../../components/Forms/TouristDetail/TDRightDetailForm";
import National from "../../components/Forms/TouristDetail/National";
import Form from "../../components/Forms/TouristDetail/Form";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Loader from "react-loader-spinner";
import API from "../../api_test";
import api from "../../axios";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toastr from "toastr";
const TouristDetail = () => {
  const params = useParams();
  const history = useHistory();
  const bb = useSelector((state) => state.user.branches);
  const userType = useSelector((state) => state.auth.userType);
  const [loader, setLoader] = useState(false);
  const [guestMembers, setGuestMember] = useState(false);
  const [submitBtnStatus, setSubmitBtnStatus] = useState(false);
  const [branches, setBranches] = useState([]);
  const [inputList, setInputList] = useState([]);
  const [error, setError] = useState({});

  const [touristFirstname, setTFName] = useState("");
  const [touristLastname, setTLname] = useState("");
  const [touristFathername, setTFathername] = useState("");
  const [country, setCountry] = useState("");
  const [dtArraival, setDtArrival] = useState("");
  const [dtDeparture, setDtDeparture] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setaddress] = useState("");
  const [district, setdistrict] = useState("");
  const [countryArrivedFrom, setcountryArrivedFrom] = useState("");
  const [provinceArrivedFrom, setProvinceArrivedFrom] = useState("");
  const [reasonForStay, setreasonForStay] = useState("");
  const [roomNumber, setroomNumber] = useState("");
  const [visaNumber, setVisaNumber] = useState("");
  const [number, setNumber] = useState("");
  const [tnumber, setTnumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [mobile, setMobile] = useState("");
  const [photo, setPhoto] = useState("");
  const [visa, setVisa] = useState("");
  const [passport, setPassport] = useState("");
  const [job, setJob] = useState("");
  const [type, setType] = useState("true");
  const [branch, setBranch] = useState("");
  const [residentPlace, setResidentPlace] = useState("");
  const [additionalNumber, setAdditionalNumber] = useState("");
  const [gender, setGender] = useState("");
  const [grantor, setGrantor] = useState("");
  const [age, setAge] = useState("");
  const [vehicle, setVehicle] = useState("");

  ///////////////////////////////
  var formData = {
    touristFirstname,
    touristLastname,
    touristFathername,
    country,
    dtArraival,
    dtDeparture,
    city,
    state,
    address,
    district,
    countryArrivedFrom,
    provinceArrivedFrom,
    reasonForStay,
    roomNumber,
    visaNumber,
    number,
    tnumber,
    nationality,
    mobile,
    photo,
    visa,
    passport,
    job,
    type,
    branch,
    residentPlace,
    grantor,
    additionalNumber,
    vehicle,
    gender,
    age,
  };

  useEffect(() => {
    setBranches(bb);
  }, [bb]);
  const changeHandler = (event) => {
    setPhoto(event.target.files[0]);
    // console.log("event.target.files[0]", event);
  };
  if (passport) {
    // console.log("passport", passport.target.files);
  }
  if (photo) {
    // console.log("photo", photo.target.files);
  }
  ///////////////////////////////////
  async function CreateProfileAjax(timage, tpassport, tvisa) {
    setError({ name: "" });
    setLoader(true);

    // address &&
    //     city &&
    //     district &&
    //var data = JSON.stringify({"ownerName":pname,"mobile":bnumber,"email":bemail,"address":address,"hotelImages":[]});
    if (passport && photo) {
      if (type === "true") {
        if (address === "" || city === "" || district === "") {
          console.log("Address Not valid");
          setError({ name: "Fill All the details!" });
          toastr.error("Fill All Details!");
          setLoader(false);
          return;
        }
      } else {
        if (nationality === "") {
          setError({ name: "Fill All the details!" });
          toastr.error("Fill All Details!");
          setLoader(false);
          return;
        }
      }
      if (
        touristFirstname !== "" &&
        residentPlace !== "" &&
        // country &&
        mobile !== "" &&
        dtArraival !== "" &&
        dtDeparture !== "" &&
        // nationality &&
        // countryArrivedFrom &&
        reasonForStay !== "" &&
        // provinceArrivedFrom &&
        gender !== "" &&
        roomNumber !== ""
      ) {
        var data = {
          touristName: touristFirstname,
          residentCountry: country,
          mobileNumber: mobile,
          address: address,
          city: city,
          district: district,
          state: state,
          dateOfArrival: dtArraival,
          dateOfDeparture: dtDeparture,
          passportNumber: number,
          nationality: nationality,
          countryArrivedFrom: countryArrivedFrom,
          roomNumber: roomNumber,
          reasonOfStay: reasonForStay,
          provinceArrivedFrom: provinceArrivedFrom,
          job: job,
          tazkeraNumber: tnumber,
          touristImage: timage,
          uploadPassportOrTazkera: tpassport,
          uploadVisa: tvisa || "",
          hotelId: localStorage.getItem("hotel_id"),
          lastName: touristLastname,
          fatherName: touristFathername,
          additionalContact: additionalNumber,
          // number: yup.string(),
          grantor: grantor,
          age: age,
          gender: gender,
          vehicalNumberPlate: vehicle,
          accompaniedMember: type === "true" ? inputList : [],
          residentPlace: residentPlace,
          isForeigner: type === "true" ? false : true,
        };
        // console.log("payload", data);

        if (branches.length > 0) {
          if (params.id === null || params.id === undefined) {
            if (branch !== "") {
              if (branch !== "main") {
                data["hotelId"] = branch;
              }

              try {
                if (userType === "HOTEL") {
                  const response = await api.createTouristByManagerInBranch(
                    data
                  );
                  setLoader(false);
                } else {
                  const response = await api.createTouristByStaffBranch(data);
                  setLoader(false);
                }
                if (branch !== "main") history.replace(`/tourist/${branch}`);
                else history.replace(`/tourist`);
                //setToken(data.token)
                // console.log("response", response);
              } catch (error) {
                setLoader(false);
                toastr.error(error.response.data.message);
                if (error.response) {
                  setError({
                    name:
                      "Please Fix These Errors:  " +
                      error.response.data.message,
                  });
                  setLoader(false);
                  // console.log(error.response.data.message);
                }
              }
            } else {
              setError({
                name: "Please Select Branch",
              });
              toastr.error("Please Select Branch");
              setLoader(false);
              // try {
              //   if (userType === "HOTEL") {
              //     const response = await api.createTouristByManagerInBranch(
              //       data
              //     );
              //     setLoader(false);
              //     history.replace(`/tourist/${branch}`);
              //   } else {
              //     setError({
              //       name: "Please Select Branch",
              //     });
              //     toastr.error("Please Select Branch");
              //     setLoader(false);
              //   }
              //   //setToken(data.token)
              //   // console.log("response", response);
              // } catch (error) {
              //   setLoader(false);
              //   toastr.error(error.response.data.message);
              //   if (error.response) {
              //     setError({
              //       name:
              //         "Please Fix These Errors:  " +
              //         error.response.data.message,
              //     });
              //     setLoader(false);
              //     // console.log(error.response.data.message);
              //   }
              // }
            }
          } else {
            data["hotelId"] = params.id;

            try {
              if (userType === "HOTEL") {
                const response = await api.createTouristByManagerInBranch(data);
              } else {
                const response = await api.createTouristByStaffBranch(data);
              }
              setLoader(false);
              history.replace(`/tourist/${params.id}`);
            } catch (error) {
              setLoader(false);
              if (error.response) {
                setError({
                  name:
                    "Please Fix These Errors:  " + error.response.data.message,
                });
                toastr.error(error.response.data.message);
                setLoader(false);
                // console.log(error.response.data.message);
              }
            }
          }
          // if (branch !== "") {
          //   data["hotelId"] = branch;

          //   try {
          //     if (userType === "HOTEL") {
          //       const response = await api.createTouristByManagerInBranch(data);
          //       setLoader(false);
          //     } else {
          //       const response = await api.createTouristByStaffBranch(data);
          //       setLoader(false);
          //     }
          //     history.replace(`/tourist/${branch}`);
          //     //setToken(data.token)
          //     // console.log("response", response);
          //   } catch (error) {
          //     setLoader(false);
          //     if (error.response) {
          //       setError({
          //         name:
          //           "Please Fix These Errors:  " + error.response.data.message,
          //       });
          //       setLoader(false);
          //       // console.log(error.response.data.message);
          //     }
          //   }
          // } else {
          //   setError({
          //     name: "Please Select Branch",
          //   });
          //   setLoader(false);
          // }
        } else {
          var config = {
            method: "post",
            url: "tourist/createBymanager",

            data: data,
          };
          return await API(config)
            .then(function (response) {
              setLoader(false);
              history.replace("/tourist");
              // window.location.href = "/tourist";
              //setToken(data.token)
              // console.log("response", response);
            })
            .catch(function (error) {
              setLoader(false);

              if (error.response) {
                toastr.error(error.response.data.message);
                setError({
                  name:
                    "Please Fix These Errors:  " + error.response.data.message,
                });
                setLoader(false);
                // console.log(error.response.data.message);
              }
            });
        }
      } else {
        console.log(
          "Field Not valid",

          // provinceArrivedFrom &&
          tnumber !== "" && gender !== "" && roomNumber !== ""
        );
        setError({ name: "Fill All the details!" });
        toastr.error("Fill All Details!");
        setLoader(false);
      }
    } else {
      console.log("Photo Field Not valid");
      setError({
        name: "Upload Photos of Visa && Passport/tazkera && Tourist",
      });
      toastr.error("Fill All Details!");
      setLoader(false);
    }
  }
  async function upload() {
    if (photo) {
      var touristImagedata = new FormData();
      var passportdata = new FormData();
      var visadata = new FormData();
      touristImagedata.append("file", photo.target.files[0]);
      passportdata.append("file", passport.target.files[0]);
      // visadata.append("file", visa.target.files[0]);
      let timage;
      let tpassport;
      let tvisa;
      var touristImageconfig = {
        method: "post",
        url: "files",
        data: touristImagedata,
      };
      var passportConfig = {
        method: "post",
        url: "files",
        data: passportdata,
      };
      // var VisaImageConfig = {
      //   method: "post",
      //   url: "files",
      //   data: visadata,
      // };
      await API(touristImageconfig)
        .then((response) => {
          setLoader(false);
          // console.log("image", response);
          timage = response.data.data;
          //  CreateProfileAjax(timage);
          // tpassport,tvisa
        })
        .catch(function (error) {
          setLoader(false);
          if (error.response) {
            setError({
              name: "Please Fix These Errors:  " + error.response.data.message,
            });
            setLoader(false);
          }
        });
      await API(passportConfig)
        .then((response) => {
          setLoader(false);
          // console.log("image", response);
          tpassport = response.data.data;
          //  CreateProfileAjax(tpassport);
          // tpassport,tvisa
        })
        .catch(function (error) {
          setLoader(false);
          if (error.response) {
            setError({
              name: "Please Fix These Errors:  " + error.response.data.message,
            });
            setLoader(false);
          }
        });
      // await API(VisaImageConfig)
      //   .then((response) => {
      //     setLoader(false);
      //     // console.log("image", response);
      //     tvisa = response.data.data;
      //     //  CreateProfileAjax(tvisa);
      //     // tpassport,tvisa
      //   })
      //   .catch(function (error) {
      //     setLoader(false);
      //     if (error.response) {
      //       setError({
      //         name: "Please Fix These Errors:  " + error.response.data.message,
      //       });
      //       setLoader(false);
      //     }
      //   });
      if (timage && tpassport) {
        CreateProfileAjax(timage, tpassport, null);
      }
    } else {
      CreateProfileAjax("");
    }
  }

  const valid = () => {
    setError({});
    const phoneRegEx = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
    // console.log("Valid", mobile.match(phoneRegEx));
    if (!mobile.match(phoneRegEx)) {
      // document.getElementById("numloc").innerHTML="Enter Numeric value only";

      setError({
        ...error,
        mobile: "Enter Valid Mobile Number",
      });
      toastr.error("Enter Valid Mobile Number");
      return false;
    } else if (additionalNumber.length > 0) {
      // console.log(additionalNumber.length);
      if (!additionalNumber.match(phoneRegEx)) {
        setError({
          ...error,
          additionalNumber: "Enter Valid Additional Mobile Number",
        });
        toastr.error("Enter Valid Additional Mobile Number");
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitBtnStatus(true);
    if (!valid()) {
      console.log("Valid");
      return false;
    }
    await upload();
    return true;
    const token = await CreateProfileAjax();
    // setToken(token);
  };

  ///////////////////////////////////

  // console.error(params.id !== undefined && params.id !== "undefined");
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { name: "", relationship: "", age: "" }]);
  };

  useEffect(() => {
    return () => {
      if (error.mobile !== "" || error.additionalNumber !== "") {
        setError({});
      }
    };
  }, [mobile, additionalNumber]);
  ///////////////////////////////////

  return (
    <>
      <Main>
        <form
          // onSubmit={handleSubmit}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Container>
            {/* <Row>
          <Col>
            <PageTitleContainer>
              <PageTitle>TOURIST DETAILS</PageTitle>
              <PageParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum semper vitae, fusce.
              </PageParagraph>
            </PageTitleContainer>
          </Col>
        </Row> */}

            <ContentWrapper className="p- m-0">
              <BgTopRightImage src="./assets/icons/form_back.svg" />
              <BgBottomLeftImage src="./assets/icons/form_back.svg" />
              <FormTitle>
                <p>Details</p>
              </FormTitle>
              {(params.id === null || params.id === undefined) &&
                branches &&
                branches.length > 0 && (
                  <FormGroup>
                    <FormLabel> Branch </FormLabel>
                    <FormInput>
                      <Select
                        // tabIndex={1}
                        onChange={(e) => {
                          setBranch(e.target.value);
                        }}
                        className={`${
                          submitBtnStatus && branch === "" && "input-error"
                        }`}
                      >
                        <Options value="">Select Branch</Options>
                        {userType === "HOTEL" && (
                          <Options value="main">Main Branch</Options>
                        )}
                        {branches.map(
                          (item) =>
                            item.approved && (
                              <Options value={item._id} key={item._id}>
                                {item.address}
                              </Options>
                            )
                        )}
                      </Select>
                      <div className="text-danger">
                        {submitBtnStatus && branch === "" && "Select Branch"}
                      </div>
                    </FormInput>
                  </FormGroup>
                )}

              <FormGroup>
                <FormLabel> From </FormLabel>
                <FormInput>
                  <Select
                    // tabIndex={1}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    <Options value={true}>National</Options>
                    <Options value={false}>International</Options>
                  </Select>
                </FormInput>
              </FormGroup>
              <Row className="p-0 m-0">
                <Col md={12} lg={12} className="p-0 m-0">
                  {/* {params.id !== null && params.id !== undefined ? ( */}
                  <National
                    setType={setType}
                    type={type}
                    ch={changeHandler}
                    updateState={setState}
                    updateTFname={setTFName}
                    updateTFatherName={setTFathername}
                    updateCountry={setCountry}
                    updateDtArrival={setDtArrival}
                    updateDtDeparture={setDtDeparture}
                    updateAddress={setaddress}
                    updateDistrict={setdistrict}
                    updateCountryArrivedFrom={setcountryArrivedFrom}
                    updateReasonOfStay={setreasonForStay}
                    updateRoomNumber={setroomNumber}
                    updatePhoto={setPhoto}
                    changePassport={setPassport}
                    updateTLname={setTLname}
                    updateNumber={setNumber}
                    updateMobile={setMobile}
                    updateCity={setCity}
                    updateVisaNumber={setVisaNumber}
                    updateTnumber={setTnumber}
                    updateArrivedFrom={setProvinceArrivedFrom}
                    updateJob={setJob}
                    uploadVisa={setVisa}
                    updateNationality={setNationality}
                    updateResidentPlace={setResidentPlace}
                    updateAdditionalNumber={setAdditionalNumber}
                    updateGender={setGender}
                    updateGrantor={setGrantor}
                    updateAge={setAge}
                    userType={userType}
                    error={error}
                    status={submitBtnStatus}
                    updateVehicle={setVehicle}
                    {...formData}
                  ></National>
                  {/* ) : (
                    <Form
                      setType={setType}
                      type={type}
                      ch={changeHandler}
                      updateState={setState}
                      updateTFname={setTFName}
                      updateTFatherName={setTFathername}
                      updateCountry={setCountry}
                      updateDtArrival={setDtArrival}
                      updateDtDeparture={setDtDeparture}
                      updateAddress={setaddress}
                      updateDistrict={setdistrict}
                      updateCountryArrivedFrom={setcountryArrivedFrom}
                      updateReasonOfStay={setreasonForStay}
                      updateRoomNumber={setroomNumber}
                      updatePhoto={setPhoto}
                      changePassport={setPassport}
                      updateTLname={setTLname}
                      updateNumber={setNumber}
                      updateMobile={setMobile}
                      updateCity={setCity}
                      updateVisaNumber={setVisaNumber}
                      updateTnumber={setTnumber}
                      updateArrivedFrom={setProvinceArrivedFrom}
                      updateJob={setJob}
                      uploadVisa={setVisa}
                      updateNationality={setNationality}
                      updateResidentPlace={setResidentPlace}
                      updateAdditionalNumber={setAdditionalNumber}
                      updateGender={setGender}
                      updateGrantor={setGrantor}
                      updateAge={setAge}
                      updateVehicle={setVehicle}
                    ></Form>
                  )} */}
                </Col>
              </Row>
            </ContentWrapper>
            <Row className="">
              <Col lg={12} className="ButtonContainer">
                <FormLabelError>{error["name"]}</FormLabelError>
              </Col>
            </Row>
            <Row className="p-0 m-0">
              {type === "true" && (
                <>
                  <Col lg={12} className="">
                    <div
                      className="btn btn-warning"
                      onClick={(e) => {
                        if (guestMembers) {
                          setInputList([]);
                          setGuestMember(!guestMembers);
                        } else {
                          setInputList([
                            { name: "", relationship: "", age: "" },
                          ]);
                          setGuestMember(!guestMembers);
                        }
                      }}
                    >
                      {guestMembers
                        ? "Remove All Member"
                        : "Add Tourist Member"}
                    </div>
                    <div className="">
                      {guestMembers && inputList.length > 0 && (
                        <>
                          <div className="text-muted mt-2 h4 ">
                            Add Tourist Member
                          </div>
                          <hr />
                        </>
                      )}
                      {guestMembers &&
                        inputList.length > 0 &&
                        inputList.map((x, i) => {
                          return (
                            <>
                              <div className="row mt-1" key={i}>
                                <div className="text-muted mt-1 h6 text-center m-auto">
                                  {i + 1}
                                </div>

                                <div className="form-group m-1">
                                  <input
                                    type="text"
                                    name="name"
                                    className="p-1"
                                    placeholder="Enter Name"
                                    value={x.name}
                                    onChange={(e) => handleInputChange(e, i)}
                                  />
                                </div>
                                <div className="form-group m-1">
                                  <input
                                    className="p-1"
                                    type="text"
                                    name="relationship"
                                    placeholder="Enter Relationship"
                                    onChange={(e) => handleInputChange(e, i)}
                                    value={x.relationship}
                                  />
                                </div>
                                <div className="form-group m-1">
                                  <input
                                    className="p-1"
                                    type="number"
                                    name="age"
                                    placeholder="Enter Age"
                                    value={x.age}
                                    onChange={(e) => handleInputChange(e, i)}
                                  />
                                </div>
                                <div className="col-md-3 text-center d-flex justify-content-around">
                                  {inputList.length !== 1 && (
                                    <div
                                      className="col-4 btn pl-1 pr-1 btn-danger"
                                      onClick={() => handleRemoveClick(i)}
                                    >
                                      Remove
                                    </div>
                                  )}
                                  {inputList.length - 1 === i && (
                                    <div
                                      className="col-6 btn btn-primary"
                                      onClick={handleAddClick}
                                    >
                                      Add
                                    </div>
                                  )}
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                    {/* <div style={{ marginTop: 20 }}>
                  {JSON.stringify(inputList, null, 4)}
                </div> */}
                  </Col>
                </>
              )}
              <Col lg={12} className="p-0 m-0 d-flex">
                <ButtonContainer>
                  <CancelButton type="reset">Cancel</CancelButton>
                  {/* {loader ? (
                    <Loader
                      type="TailSpin"
                      color="#0A3565"
                      height={20}
                      width={20}
                    />
                  ) : (
                    <SaveButton
                      type="submit"
                      onClick={(e) => {
                        return handleSubmit(e);
                      }}
                    >
                      Save
                    </SaveButton>
                  )} */}
                  <SaveButton
                    type="submit"
                    onClick={(e) => {
                      return handleSubmit(e);
                    }}
                    disabled={loader}
                  >
                    {loader ? (
                      <Loader
                        type="TailSpin"
                        color="#0A3565"
                        height={20}
                        width={20}
                      />
                    ) : (
                      "Save"
                    )}
                  </SaveButton>
                  {/* <Col lg={2} className="p-0 m-0 d-flex">
                    {loader ? (
                      <Loader
                        type="TailSpin"
                        color="#0A3565"
                        height={20}
                        width={20}
                      />
                    ) : null}
                  </Col> */}
                </ButtonContainer>
              </Col>
            </Row>
          </Container>
        </form>
      </Main>
    </>
  );
};

export default TouristDetail;
