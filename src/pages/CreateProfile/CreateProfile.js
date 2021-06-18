import React, { useEffect,useState } from 'react';
import { 
  Main,
  PageTitleContainer,
  PageTitle, 
  ContentWrapper, 
  PageParagraph,
  ButtonContainer,
  CancelButton,
  SaveButton,
  FormLabelError
} from './CreateProfile.elements.js'
import  CPPictureForm  from '../../components/Forms/CreateProfile/CPPictureForm'
import  CPDetailForm  from '../../components/Forms/CreateProfile/CPDetailForm'
import  CPContactForm  from '../../components/Forms/CreateProfile/CPContactForm'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import API from '../../api_test'
import Loader from "react-loader-spinner";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import '../../css/style.css';

const CreateProfile = () => {
  const [profile, setProfile] = useState({})
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [imageUrl, setImageUrl] = useState([]);
  const [num, setNumber] = useState();
  const [hname, setHName] = useState();
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
    setProfile(f)
    setEmail(f.email);
    setHName(f.hotelName)
    
    setName(f.ownerName)
    setNumber(f.mobile)
    setAddress(f.address)
    if(f.hotelImages)
    setImageUrl(f.hotelImages);
  }) .catch(function (error) {
    console.log('load error',error);
  });
  
    
    }
    fetchData();
  }, []);

  //return data;
};

const result = useFetch("hotel/getHotelDetails", {});
  async function CreateProfileAjax(image) {
    setLoader(true)
   
  var t = {"ownerTelephoneNumber":num,"email":email,"address":address};
  if(image)
  {
    t["hotelImages"] = [image];
  }
   
   t["mobile"] = num;
    var dt = JSON.stringify(t);
    console.log('final',dt);
    var config = {
      method: 'PUT',
      url: 'hotel/edit-profile',
      
      data : dt
    };
     await  API(config)
  .then(function (response) {
    setLoader(false)
       toastr.success(response.data.message);
//   window.location.href = "/home"  
    //setToken(data.token)
    })
      .catch(function (error) {
        setLoader(false)
        if(error.response){
             toastr.success(error.response.data.message)
        }
    
      });
  }
  async function upload(){
    if(selectedFile ){
      
    var data = new FormData();
    console.log('selectedFile',selectedFile);
data.append('file', selectedFile);
var config = {
  method: 'post',
  url: 'files',
  
  data : data
};
  await  API(config)
 .then(response=>{
    setLoader(false)
    
     setImageUrl([response.data.data]);
     console.log('image',response.data.data);
     CreateProfileAjax(response.data.data);
   // history.push("/home")
    //setToken(data.token)
    })
      .catch(function (error) {
        setLoader(false)
        if(error.response){
          setError({'name':'Please Fix These Errors:  '+error.response.data.message})
        }
          
        
        
    
      });
    }else{

      CreateProfileAjax('');
    
    }
  }
  const handleSubmit = async e => {
    e.preventDefault();
    await upload()
  return false
   //if(!valid()){
   // return false;
   //}
   
   // setToken(token);
  }
  ///////////////////////////////////
  return (
    <>
    <Main>
      <Container>
        <Row>
          <Col>
            <PageTitleContainer>
              <PageTitle> PROFILE </PageTitle>
              <PageParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum semper vitae, fusce.
              </PageParagraph>
            </PageTitleContainer>
          </Col>
        </Row>
        <form onSubmit={handleSubmit}>
        <ContentWrapper className="p- m-0">

            <Row className="p-0 m-0">
              <Col lg={3} className="p-2 m-0">  
                 
                <CPPictureForm ch={changeHandler}  pro={profile} />
              </Col>
              
              <Col lg={5} className="p-2 m-0">      
                <CPDetailForm updateHName={setHName} hName={hname}   add={address} updateAddress={setAddress} />
              </Col>
              <Col lg={4} className="p-2 m-0">      
                <CPContactForm updateName={setName} pro={profile} name={name}   email={email} num={num} updateEmail={setEmail} updateNumber={setNumber} />
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
                  {(loader) ? <Loader type="TailSpin" color="#0A3565" height={20} width={20}  /> : null}
                  </Col>
                </ButtonContainer>  
              </Col>
            </Row>
          </ContentWrapper>
          </form>
      </Container>
    </Main>
    </>
  )
}

export default CreateProfile
