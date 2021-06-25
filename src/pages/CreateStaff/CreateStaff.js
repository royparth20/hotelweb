import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CSDetailForm from "../../components/Forms/CreateStaff/CSDetailForm";
import CSContactForm from "../../components/Forms/CreateStaff/CSContactForm";
import { Container, Row, Col } from "styled-bootstrap-grid";
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
} from "./CreateStaff.elements.js";
import Loader from "react-loader-spinner";
import API from "../../api_test";
import api from "../../axios";
import { useHistory } from "react-router-dom";
const CreateStaff = () => {
  const history = useHistory();
  const id = useSelector((state) => state.auth.id);
  const branchesState = useSelector((state) => state.user.branches);
  const [loader, setLoader] = useState(false);
  const [sname, setSName] = useState();
  const [snumber, setSNumber] = useState();
  const [semail, setSEmail] = useState();
  const [saddress, setSAddress] = useState();
  const [pass, setPass] = useState("12345");
  const [branches, setBranches] = useState();
  const [curbranch, setCBranch] = useState();
  const [error, setError] = useState({});
  ///////////////////////////////////
  async function CreateProfileAjax() {
    setLoader(true);

    console.log(curbranch);
    var data = {
      staffName: sname,
      staffContact: snumber,
      staffEmail: semail,
      staffAddress: saddress,
      staffPassword: pass,
      assignHotel: [curbranch],
    };
    var config = {
      method: "post",
      url: "hotel/create-staff?assignHotel=" + id,
      data: data,
    };
    console.log(data);
    return await API(config)
      .then(function (response) {
        setLoader(false);
        // window.location.href = "/home";
        history.push("/home");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    //if(!valid()){
    // return false;
    //}
    const token = await CreateProfileAjax();
    // setToken(token);
  };
  const [data, updateData] = useState({});
  async function fetchData() {
    api
      .getHotelDetails()
      .then((bl) => {
        console.log("fetched data", bl.data.data[0]);

        //setHNamep(bl.data.data[0].hotelName)
        var f = bl.data.data[0];

        setBranches(f.branches);
      })
      .catch(function (error) {
        console.log("load error", error);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Main>
        <form onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Col>
                <PageTitleContainer>
                  <PageTitle>CREATE STAFF</PageTitle>
                  <PageParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi bibendum semper vitae, fusce.
                  </PageParagraph>
                </PageTitleContainer>
              </Col>
            </Row>

            <ContentWrapper className="p- m-0">
              <BgTopRightImage src="./assets/icons/form_back.svg" />
              <BgBottomLeftImage src="./assets/icons/form_back.svg" />
              <Row className="p-0 m-0">
                <Col lg={5} className="p-2 m-0">
                  <CSDetailForm
                    updateSName={setSName}
                    updateSNumber={setSNumber}
                    updateSEmail={setSEmail}
                    updateAddress={setSAddress}
                    updatePass={setPass}
                    pass={pass}
                  />
                </Col>
                <Col lg={3} className="p-2 m-0">
                  &nbsp;
                </Col>
                <Col lg={4} className="p-2 m-0">
                  <CSContactForm
                    updateBranch={setCBranch}
                    bb={branchesState.lenght > 0 ? branchesState : branches}
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
          </Container>
        </form>
      </Main>
    </>
  );
};

export default CreateStaff;
