import React from 'react';
import { Redirect } from 'react-router-dom'; 
import  Header  from './components/Header/Header';
import  HeaderLoggedin  from './components/HeaderLoggedin/HeaderLoggedin';
import Footer  from './components/Footer/Footer';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Home2 from './pages/Home2/Home2'
import Tourist from './pages/Tourist/Tourist'
import Blacklist from './pages/Blacklist/Blacklist'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Blog from './pages/Blog/Blog'
import Register from './pages/Register/Register'
import Hotel from './pages/Hotel/Hotel'
import HotelDetail from './pages/HotelDetail/HotelDetail'
import TouristDetail from './pages/TouristDetail/TouristDetail'
import BranchDetail from './pages/BranchDetail/BranchDetail'
import CreateProfile from './pages/CreateProfile/CreateProfile'
import CreateStaff from './pages/CreateStaff/CreateStaff'
import Reports from './pages/Reports/Reports'

import Service from './pages/Service/Service'
import TouristReport from './pages/Reports/TouristReport';

function App() {
  const isLoggedIn = localStorage.getItem('token')
  console.log('token',isLoggedIn);
  return (
    <Router> 
      <GlobalStyle/>
      <Switch>
        {/* front pages */}
      
          <Route path="/" exact component={ Home2 }>
          <Header/>
          <Home2/>
          <Footer/>
        </Route>
       
      
        <Route path="/register" exact component={ Home }>
          <Header/>
          <Home/>
          <Footer/>
        </Route>
        <Route path="/about" exact component={ About }>
          <Header/>
          <About/>
          <Footer/>
        </Route>
        <Route path="/service" exact component={ Service }>
          <Header/>
          <Service/>
          <Footer/>
        </Route>
        <Route path="/blog" exact component={ Blog }>
          <Header/>
          <Blog/>
          <Footer/>
        </Route>
        <Route path="/contact" exact component={ Contact }>
          <Header/>
          <Contact/>
          <Footer/>
        
        <Route path="/hotel" exact component={ Hotel }>
          <HeaderLoggedin/>
          <Hotel/>
          <Footer/>
        </Route>
        
        </Route>
        
        <Route path="/login" exact component={ Login }>
          <Header/>
          <Login/>
        </Route>
       
        <Route path="/register" exact component={ Register }>
          <Header/>
          <Register/>
        </Route>
        <Route path="/forgotPassword" exact component={ ForgotPassword }>
          <Header/>
          <ForgotPassword/>
        </Route>
        <Route path="/changePassword" exact component={ ChangePassword }>
          <Header/>
          <ChangePassword/>
        </Route>




        {/* dashboard pages */}
        { (isLoggedIn &&  (isLoggedIn)!=='undefined') ? 
        <><Route path="/hotel" exact component={ Hotel }>
          <HeaderLoggedin/>
          <Hotel/>
          <Footer/>
        </Route>
        <Route path="/home" exact component={ HotelDetail }>
          <HeaderLoggedin/>
          <HotelDetail/>
          <Footer/>
        </Route>
        <Route path="/hotelDetails" exact component={ HotelDetail }>
          <HeaderLoggedin/>
          <HotelDetail/>
          <Footer/>
        </Route>
        <Route path="/tourist" exact component={ Tourist }>
          <HeaderLoggedin/>
          <Tourist/>
          <Footer/>
        </Route>
        <Route path="/touristDetails" exact component={ TouristDetail }>
          <HeaderLoggedin/>
          <TouristDetail/>
          <Footer/>
        </Route>
        <Route path="/blacklist" exact component={ Blacklist }>
          <HeaderLoggedin/>
          <Blacklist/>
          <Footer/>
        </Route>
        <Route path="/branchDetails" exact component={ BranchDetail }>
          <HeaderLoggedin/>
          <BranchDetail/>
          <Footer/>
        </Route>
        <Route path="/createStaff" exact component={ CreateStaff }>
          <HeaderLoggedin/>
          <CreateStaff/>
          <Footer/>
        </Route>
        <Route path="/createProfile" exact component={ CreateProfile }>
          <HeaderLoggedin/>
          <CreateProfile/>
          <Footer/>
        </Route>
        <Route path="/touristReports" exact component={ TouristReport }>
          <HeaderLoggedin/>
          <TouristReport/>
          <Footer/>
        </Route>

        <Route path="/reports" exact component={ Reports }>
          <HeaderLoggedin/>
          <Reports/>
          <Footer/>
        </Route></>
        :<Redirect to='/login' />
      }
        
        
        ):
      </Switch>
    </Router>
  );
}

export default App;