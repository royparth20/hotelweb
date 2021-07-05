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
  ButtonContainer,
  CancelButton,
  SaveButton,
  FormLabelError,
} from "./TouristDetail.elements.js";
import { FormTitle } from "../../components/Forms/TouristDetail/TDLeftDetailForm.elements";
import TDLeftDetailForm from "../../components/Forms/TouristDetail/TDLeftDetailForm";
import TDRightDetailForm from "../../components/Forms/TouristDetail/TDRightDetailForm";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Loader from "react-loader-spinner";
import API from "../../api_test";
const TouristDetail = () => {
  const [loader, setLoader] = useState(false);
  const [touristFirstname, setTFName] = useState();
  const [touristLastname, setTLname] = useState();
  const [country, setCountry] = useState();
  const [dtArraival, setDtArrival] = useState();
  const [dtDeparture, setDtDeparture] = useState();
  const [city, setCity] = useState("");
  const [address, setaddress] = useState("");
  const [district, setdistrict] = useState("");
  const [countryArrivedFrom, setcountryArrivedFrom] = useState();
  const [provinceArrivedFrom, setProvinceArrivedFrom] = useState();
  const [reasonForStay, setreasonForStay] = useState("");
  const [roomNumber, setroomNumber] = useState("");
  const [visaNumber, setVisaNumber] = useState("");
  const [number, setNumber] = useState();
  const [tnumber, setTnumber] = useState();
  const [nationality, setNationality] = useState();
  const [pass, setPass] = useState();
  const [mobile, setMobile] = useState();
  const [photo, setPhoto] = useState();
  const [visa, setVisa] = useState();
  const [error, setError] = useState({});
  const [passport, setPassport] = useState();
  const [job, setJob] = useState();
  const [type, setType] = useState("true");
  const [guestMembers, setGuestMember] = useState(false);
  const [inputList, setInputList] = useState([]);

  ///////////////////////////////////
  const changeHandler = (event) => {
    setPhoto(event.target.files[0]);
    console.log("event.target.files[0]", event);
  };
  if (passport) {
    console.log("passport", passport.target.files);
  }
  if (photo) {
    console.log("photo", photo.target.files);
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
          setError({ name: "Fill All the details!" });
          setLoader(false);
          return;
        }
      }
      if (
        touristFirstname &&
        country &&
        mobile &&
        dtArraival &&
        dtDeparture &&
        number &&
        nationality &&
        countryArrivedFrom &&
        reasonForStay &&
        provinceArrivedFrom &&
        tnumber &&
        visaNumber
      ) {
        var data = {
          touristName: touristFirstname + " " + touristLastname,
          residentCountry: country,
          mobileNumber: mobile,
          address: address,
          city: city,
          district: district,
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
          uploadVisa: tvisa,
          hotelId: localStorage.getItem("hotel_id"),
        };

        var config = {
          method: "post",
          url: "tourist/createBymanager",

          data: data,
        };
        return await API(config)
          .then(function (response) {
            setLoader(false);
            window.location.href = "/tourist";
            //setToken(data.token)
            console.log("response", response);
          })
          .catch(function (error) {
            setLoader(false);
            if (error.response) {
              setError({
                name:
                  "Please Fix These Errors:  " + error.response.data.message,
              });
              setLoader(false);
            }
          });
      } else {
        setError({ name: "Fill All the details!" });
        setLoader(false);
      }
    } else {
      setError({ name: "Fill All the details!" });
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
      visadata.append("file", visa.target.files[0]);
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
      var VisaImageConfig = {
        method: "post",
        url: "files",
        data: visadata,
      };
      await API(touristImageconfig)
        .then((response) => {
          setLoader(false);
          console.log("image", response);
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
          console.log("image", response);
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
      await API(VisaImageConfig)
        .then((response) => {
          setLoader(false);
          console.log("image", response);
          tvisa = response.data.data;
          //  CreateProfileAjax(tvisa);
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
      if (timage && tpassport) {
        CreateProfileAjax(timage, tpassport);
      }
    } else {
      CreateProfileAjax("");
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await upload();
    return false;
    //if(!valid()){
    // return false;
    //}
    const token = await CreateProfileAjax();
    // setToken(token);
  };

  ///////////////////////////////////

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
  ///////////////////////////////////
  return (
    <>
      <Main>
        <form onSubmit={handleSubmit}>
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

              <Row className="p-0 m-0">
                <Col md={6} lg={6} className="p-2 m-0">
                  <TDLeftDetailForm
                    setType={setType}
                    type={type}
                    ch={changeHandler}
                    updateTFname={setTFName}
                    updateCountry={setCountry}
                    updateDtArrival={setDtArrival}
                    updateDtDeparture={setDtDeparture}
                    updateAddress={setaddress}
                    updateDistrict={setdistrict}
                    updateCountryArrivedFrom={setcountryArrivedFrom}
                    updateReasonOfStay={setreasonForStay}
                    updateRoomNumber={setroomNumber}
                    updatePhoto={setPhoto}
                  />
                </Col>
                <Col md={6} lg={6} className="p-2 m-0">
                  <TDRightDetailForm
                    changePassport={setPassport}
                    updateTLname={setTLname}
                    type={type}
                    updateNumber={setNumber}
                    updateNationality={setNationality}
                    updateMobile={setMobile}
                    updateCity={setCity}
                    updateVisaNumber={setVisaNumber}
                    updateTnumber={setTnumber}
                    updateArrivedFrom={setProvinceArrivedFrom}
                    updateJob={setJob}
                    uploadVisa={setVisa}
                  />
                </Col>
              </Row>
            </ContentWrapper>
            <Row className="">
              <Col lg={12} className="ButtonContainer">
                <FormLabelError>{error["name"]}</FormLabelError>
              </Col>
            </Row>
            <Row className="p-0 m-0">
              <Col lg={12} className="">
                <div
                  className="btn btn-warning"
                  onClick={(e) => {
                    if (guestMembers) {
                      setInputList([]);
                      setGuestMember(!guestMembers);
                    } else {
                      setInputList([{ name: "", relationship: "", age: "" }]);
                      setGuestMember(!guestMembers);
                    }
                  }}
                >
                  {guestMembers ? "Remove All Member" : "Add Tourist Member"}
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
                          <div className="row mt-1">
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
              <Col lg={12} className="p-0 m-0 d-flex">
                <ButtonContainer>
                  <CancelButton>Cancel</CancelButton>
                  <SaveButton tabIndex={22}>Save</SaveButton>
                  <Col lg={2} className="p-0 m-0 d-flex">
                    {loader ? (
                      <Loader
                        type="TailSpin"
                        color="#0A3565"
                        height={20}
                        width={20}
                      />
                    ) : null}
                  </Col>
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
