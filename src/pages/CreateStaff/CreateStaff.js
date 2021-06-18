import React, { useEffect,useState } from 'react';
import  CSDetailForm  from '../../components/Forms/CreateStaff/CSDetailForm'
import  CSContactForm  from '../../components/Forms/CreateStaff/CSContactForm'
import { Container, Row, Col } from 'styled-bootstrap-grid';
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
  FormLabelError
} from './CreateStaff.elements.js'
import Loader from "react-loader-spinner";
import API from '../../api_test'
const CreateStaff = () => {
  const [loader, setLoader] = useState(false);
    const [sname, setSName] = useState();
    const [snumber, setSNumber] = useState();
    const [semail, setSEmail] = useState();
    const [saddress, setSAddress] = useState();
    const [pass, setPass] = useState();
    const [branches, setBranches] = useState();
    const [curbranch, setCBranch] = useState();
    const [error, setError] = useState({});
    ///////////////////////////////////
   async function CreateProfileAjax() {
    
    setLoader(true)
   

    var data = JSON.stringify({"staffName":sname,"staffContact":snumber,"staffEmail":semail,"staffAddress":saddress,"staffPassword":pass});
    var config = {
      method: 'post',
      url: 'hotel/create-staff?assignHotel='+curbranch,
      
      data : data
    };
    return await  API(config)
  .then(function (response) {
    setLoader(false)
    window.location.href = "/home" 
    //history.push("/home")
    //setToken(data.token)
    })
      .catch(function (error) {
        setLoader(false)
        if(error.response){
          setError({'name':'Please Fix These Errors:  '+error.response.data.message})
        }
          
        
        

      });
  }

  const handleSubmit = async e => {
    e.preventDefault();
 
   //if(!valid()){
   // return false;
   //}
    const token = await CreateProfileAjax();
   // setToken(token);
  }
  const useFetch = ( url , defaultData) => {
    const [data, updateData] = useState(defaultData);
  
    useEffect(() => {
      async function fetchData() {
         var config = {
      method: 'get',
      url: url,
     
    };
    
     API(config).then(bl => {
      console.log('fetched data',bl.data.data[0])
      
      //setHNamep(bl.data.data[0].hotelName)
      var f = bl.data.data[0]
      
      setBranches(f.branches);
     
    }) .catch(function (error) {
      console.log('load error',error);
    });
    
      
      }
      fetchData();
    }, []);
  
    //return data;
  };
  const result = useFetch("hotel/getHotelDetails", {});
  ///////////////////////////////////
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum semper vitae, fusce.
              </PageParagraph>
            </PageTitleContainer>
          </Col>
        </Row>
        
        <ContentWrapper className="p- m-0">
            <BgTopRightImage src="./assets/icons/form_back.svg"/>
            <BgBottomLeftImage src="./assets/icons/form_back.svg"/>
            <Row className="p-0 m-0">
              <Col lg={5} className="p-2 m-0">      
                <CSDetailForm  updateSName={setSName} updateSNumber={setSNumber} updateSEmail={setSEmail} updateAddress={setSAddress} updatePass={setPass}  />
              </Col>
              <Col lg={3} className="p-2 m-0">      
                &nbsp;
              </Col>
              <Col lg={4} className="p-2 m-0">      
                <CSContactForm updateBranch={setCBranch} bb={branches}/>
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
                  {(loader) ? <Loader type="TailSpin" color="#0A3565" height={20} width={20}  /> : null}
                  </Col>
              </ButtonContainer>  
            </Col>
          </Row>
      </Container>
      </form>
    </Main>
    </>
  )
}

export default CreateStaff
