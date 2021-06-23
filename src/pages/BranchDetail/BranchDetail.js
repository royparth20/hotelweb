import React, { useState } from "react";
import {
  Main,
  PageTitleContainer,
  PageTitle,
  ContentWrapper,
  PageParagraph,
  ButtonContainer,
  CancelButton,
  SaveButton,
  FormLabelError,
} from "./BranchDetail.elements.js";

import { useSelector } from "react-redux";
import BDPictureForm from "../../components/Forms/BranchDetail/BDPictureForm";
import BDDetailForm from "../../components/Forms/BranchDetail/BDDetailForm";
import BDContactForm from "../../components/Forms/BranchDetail/BDContactForm";
import { Container, Row, Col } from "styled-bootstrap-grid";
import API from "../../api_test";
import Loader from "react-loader-spinner";
const BranchDetail = () => {
  const user = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);
  const [pname, setPName] = useState();
  const [bmname, setBMName] = useState();
  const [bemail, setBEmail] = useState();
  const [bnumber, setBNumber] = useState();
  const [address, setAddress] = useState();
  const [image, setImage] = useState();
  const [error, setError] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  ///////////////////////////////////
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);

    //setIsSelected(true);
  };
  ///////////////////////////////////
  async function CreateProfileAjax(image) {
    setLoader(true);
    user.token = undefined;
    var t = {
      // ...user,
      ownerName: pname,
      ownerTelephoneNumber: user.ownerTelephoneNumber,
      hotelTelephoneNumber: user.hotelTelephoneNumber,
      hotelGrade: "3 star",
      hotelLicense: user.hotelLicense,
      ownerCurrentAddress: user.ownerCurrentAddress,
      ownerPermanentAddress: user.ownerPermanentAddress,
      ownerName: user.ownerName,
      country: user.country,
      city: user.city,
      hotelLogo: user.hotelLogo,
      district: user.district,
      hotelName: user.hotelName,
      mobile: bnumber,
      email: bemail,
      address: address,
      hotelImages: [],
    };
    if (image) {
      t["hotelImages"] = [image];
    }
    // var data = JSON.stringify(t);
   
    var data = JSON.stringify(t);
    var config = {
      method: "post",
      url: "hotel/create-branch",
      data: data,
    };
    await API(config)
      .then(function (response) {
        setLoader(false);
        // var data = JSON.stringify(response.data);

        // const token = localStorage.setItem('token',response.data.token);
        //history.push("/home")
        window.location.href = "/hotelDetails";
        //setToken(data.token)
      })
      .catch(function (error) {
        setLoader(false);
        if (error.response) {
          setError({
            name: "Please Fix These Errors:  " + error.response.data.message,
          });
        }
      });
  }
  async function upload() {
    if (selectedFile) {
      var data = new FormData();
      console.log("selectedFile", selectedFile);
      data.append("file", selectedFile);
      var config = {
        method: "post",
        url: "files",

        data: data,
      };
      await API(config)
        .then((response) => {
          setLoader(false);

          /// setImageUrl([response.data.data]);
          console.log("image", response.data.data);
          CreateProfileAjax(response.data.data);
          // history.push("/home")
          //setToken(data.token)
        })
        .catch(function (error) {
          setLoader(false);
          if (error.response) {
            setError({
              name: "Please Fix These Errors:  " + error.response.data.message,
            });
          }
        });
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
    // const token = await CreateProfileAjax();
    // setToken(token);
  };
  ///////////////////////////////////
  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col>
              <PageTitleContainer>
                <PageTitle>BRANCH DETAILS</PageTitle>
                <PageParagraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  bibendum semper vitae, fusce.
                </PageParagraph>
              </PageTitleContainer>
            </Col>
          </Row>
          <form onSubmit={handleSubmit}>
            <ContentWrapper className="p- m-0">
              <Row className="p-0 m-0">
                <Col lg={3} className="p-2 m-0">
                  <BDPictureForm ch={changeHandler} />
                </Col>
                <Col lg={5} className="p-2 m-0">
                  <BDDetailForm
                    updatePNam={setPName}
                    updateBMName={setBMName}
                    updateAddress={setAddress}
                  />
                </Col>
                <Col lg={4} className="p-2 m-0">
                  <BDContactForm
                    updateBEmail={setBEmail}
                    updateBNumber={setBNumber}
                  />
                </Col>
              </Row>
              <Row className="">
                <Col lg={12} className="ButtonContainer">
                  <FormLabelError>{error["name"]}</FormLabelError>
                </Col>
              </Row>
              <Row className="p-0 m-0">
                <Col lg={12} className="p-0 m-0 d-flex">
                  <ButtonContainer>
                    <CancelButton>Cancel</CancelButton>
                    <SaveButton>Save</SaveButton>
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
            </ContentWrapper>
          </form>
        </Container>
      </Main>
    </>
  );
};

export default BranchDetail;
