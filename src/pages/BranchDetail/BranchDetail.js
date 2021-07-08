import React, { useState, useEffect } from "react";
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
import { Link, useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import toastr from "toastr";
import BDPictureForm from "../../components/Forms/BranchDetail/BDPictureForm";
import BDDetailForm from "../../components/Forms/BranchDetail/BDDetailForm";
import BDContactForm from "../../components/Forms/BranchDetail/BDContactForm";
import { Container, Row, Col } from "styled-bootstrap-grid";
import api from "../../axios";
import API from "../../api_test";
import Loader from "react-loader-spinner";
const BranchDetail = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const branchId = new URLSearchParams(useLocation().search).get("branchId");
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
  const [imagePreview, setImagePreview] = useState("");
  ///////////////////////////////////
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    if (event.target.files.length !== 0) {
      setImagePreview(window.URL.createObjectURL(event.target.files[0]));
    }
    //setIsSelected(true);
  };
  ///////////////////////////////////
  async function CreateProfileAjax(image) {
    setLoader(true);
    setError({
      name: "",
    });
    user.token = undefined;
    var t = {
      // ...user,
      ownerName: bmname,
      ownerTelephoneNumber: user.ownerTelephoneNumber,
      hotelTelephoneNumber: bnumber,
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

    api
      .createBranch(t)
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

  const updateBranchData = async () => {
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
          const image = response.data.data;
          setLoader(true);
          setError({
            name: "",
          });
          user.token = undefined;
          var t = {
            ownerName: bmname,
            hotelTelephoneNumber: bnumber,
            mobile: bnumber,
            email: bemail,
            address: address,
          };
          if (image) {
            t["hotelImages"] = [image];
          }
          // var data = JSON.stringify(t);
          api
            .updateBranch(t, branchId)
            .then(function (response) {
              setLoader(false);
              // var data = JSON.stringify(response.data);
              console.log(response.data);
              // const token = localStorage.setItem('token',response.data.token);
              // history.push("/hotelDetails");
              // window.location.href = "/hotelDetails";
              //setToken(data.token)
              toastr.success(response.data.data);
            })
            .catch(function (error) {
              toastr.error(error.response.data.message);
              setLoader(false);
              if (error.response) {
                setError({
                  name:
                    "Please Fix These Errors:  " + error.response.data.message,
                });
              }
            });
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
      setLoader(true);
      setError({
        name: "",
      });
      user.token = undefined;
      var t = {
        ownerName: bmname,
        hotelTelephoneNumber: bnumber,
        mobile: bnumber,
        email: bemail,
        address: address,
      };

      // var data = JSON.stringify(t);
      api
        .updateBranch(t, branchId)
        .then(function (response) {
          setLoader(false);
          // var data = JSON.stringify(response.data);
          console.log(response.data);
          // const token = localStorage.setItem('token',response.data.token);
          // history.push("/hotelDetails");
          // window.location.href = "/hotelDetails";
          //setToken(data.token)
          toastr.success(response.data.data);
        })
        .catch(function (error) {
          setLoader(false);
          toastr.error(error.response.data.message);
          if (error.response) {
            setError({
              name: "Please Fix These Errors:  " + error.response.data.message,
            });
          }
        });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (branchId) {
      // updateBranch
      await updateBranchData();
    } else {
      await upload();
    }
    return false;
    //if(!valid()){
    // return false;
    //}
    // const token = await CreateProfileAjax();
    // setToken(token);
  };

  useEffect(async () => {
    try {
      if (branchId !== null) {
        const { data } = await api.getBranchData(branchId);
        console.log(data.data);
        const { address, email, hotelImages, ownerName, hotelTelephoneNumber } =
          data.data;
        setAddress(address);
        setBEmail(email);
        setBMName(ownerName);
        setBNumber(hotelTelephoneNumber);
        setImagePreview(hotelImages[0]);
      }
      // ownerName
    } catch (error) {
      console.error(error);
    }
  }, [branchId]);
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
                  <BDPictureForm
                    ch={changeHandler}
                    imagePreview={imagePreview}
                  />
                </Col>
                <Col lg={5} className="p-2 m-0">
                  <BDDetailForm
                    updatePNam={setPName}
                    updateBMName={setBMName}
                    updateAddress={setAddress}
                    pname={pname}
                    bmname={bmname}
                    address={address}
                  />
                </Col>
                <Col lg={4} className="p-2 m-0">
                  <BDContactForm
                    updateBEmail={setBEmail}
                    updateBNumber={setBNumber}
                    email={bemail}
                    mobile={bnumber}
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
