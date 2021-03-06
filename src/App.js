import "./css/bootstrap.min.css";
import "./css/scrollbar-theme.css";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import HeaderLoggedin from "./components/HeaderLoggedin/HeaderLoggedin";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./globalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Home2 from "./pages/Home2/Home2";
import Tourist from "./pages/Tourist/Tourist";
import Blacklist from "./pages/Blacklist/Blacklist";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Blog from "./pages/Blog/Blog";
import Register from "./pages/Register/Register";
import Hotel from "./pages/Hotel/Hotel";
import Staff from "./pages/Staff/Staff";
import StaffDetails from "./pages/Staff/StaffDetails";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import BranchDetail from "./pages/BranchDetail/BranchDetail";
import Branch from "./pages/Branch/Branch";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import CreateStaff from "./pages/CreateStaff/CreateStaff";
import Reports from "./pages/Reports/Reports";
import withClearCache from "./ClearCache";
import Service from "./pages/Service/Service";
import TouristDetail from "./pages/TouristDetail/TouristDetail";
import TouristReport from "./pages/Reports/TouristReport";
import TouristInfo from "./pages/Tourist/TouristInfo";

import StaffTouristDetail from "./pages/TouristDetail/Staff/TouristDetail";
import StaffTouristReport from "./pages/Reports/Staff/TouristReport";
import StaffTouristInfo from "./pages/Tourist/Staff/TouristInfo";

import { useDispatch, useSelector } from "react-redux";
import authActions from "./store/actions/authActions";
import userActions from "./store/actions/userAction";
import api from "./axios";
const ClearCacheComponent = withClearCache(withRouter(App));

function MainApp() {
  return (
    <Router>
      <ClearCacheComponent></ClearCacheComponent>
    </Router>
  );
}
function App() {
  const dispatch = useDispatch();
  // const isLoggedIn = localStorage.getItem("token");
  const isLoggedIn = useSelector((state) => state.auth.authenticated);
  const userType = useSelector((state) => state.auth.userType);
  const isHotelAdmin = () => {
    return userType === "HOTEL";
  };
  // console.log("token", isLoggedIn);
  const resetToken = useSelector((state) => state.user.resetToken);
  useEffect(async () => {
    if (isLoggedIn) {
      if (
        resetToken === null ||
        resetToken === undefined ||
        resetToken === ""
      ) {
        // setTimeout(async () => {
        try {
          if (userType !== "STAFF") {
            const element = await api.getHotel();
            dispatch({
              type: userActions.actions.USER_DETAILS,
              payload: { ...element.data.data[0] },
            });
          }
          // dispatch({
          //   type: authActions.actions.LOADEXIST,
          // });
        } catch (err) {
          console.error("ERROR ==> ", err);
        }
        // }, 50);
      } else {
      }
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <Switch>
        {/* front pages */}
        <Route path="/" exact>
          <Header />
          <Home2 />
          <Footer />
        </Route>
        <Route path="/register" exact>
          <Header />
          <Home />
          {/* <Footer/> */}
        </Route>
        <Route path="/about" exact>
          <Header />
          <About />
          <Footer />
        </Route>
        <Route path="/service" exact>
          <Header />
          <Service />
          <Footer />
        </Route>
        <Route path="/blog" exact>
          <Header />
          <Blog />
          <Footer />
        </Route>
        <Route path="/contact" exact>
          <Header />
          <Contact />
          <Footer />
        </Route>
        <Route path="/hotel" exact>
          <HeaderLoggedin />
          <Hotel />
          <Footer />
        </Route>
        <Route path="/login" exact>
          <Header />
          <Login />
        </Route>
        <Route path="/register" exact>
          <Header />
          <Register />
        </Route>
        <Route path="/forgotPassword" exact>
          <Header />
          <ForgotPassword />
        </Route>
        <Route path="/changePassword" exact>
          <Header />
          <ChangePassword />
        </Route>
        {/* dashboard pages */}
        {isLoggedIn && isLoggedIn !== "undefined" ? (
          <>
            <Route path="/hotel" exact>
              <HeaderLoggedin />
              <Hotel />
              <Footer />
            </Route>
            <Route path="/home" exact>
              <HeaderLoggedin />
              <HotelDetail />
              <Footer />
            </Route>
            <Route path="/hotelDetails" exact>
              <HeaderLoggedin />
              <HotelDetail />
              <Footer />
            </Route>
            <Route path="/tourist/:id" exact>
              <HeaderLoggedin />
              {isHotelAdmin() ? <Tourist /> : <Tourist />}
              <Footer />
            </Route>
            <Route path="/tourist" exact>
              <HeaderLoggedin />
              {isHotelAdmin() ? <Tourist /> : <Tourist />}
              <Footer />
            </Route>
            <Route path="/touristDetails" exact>
              <HeaderLoggedin />
              {isHotelAdmin() ? <TouristDetail /> : <TouristDetail />}
              <Footer />
            </Route>
            <Route path="/touristDetails/:id" exact>
              <HeaderLoggedin />
              {isHotelAdmin() ? <TouristDetail /> : <TouristDetail />}
              <Footer />
            </Route>
            <Route path="/touristInfo" exact>
              <HeaderLoggedin />
              {isHotelAdmin() ? <TouristInfo /> : <TouristInfo />}
              <Footer />
            </Route>
            <Route path="/blacklist" exact>
              <HeaderLoggedin />
              <Blacklist />
              <Footer />
            </Route>
            {/* touristInfo */}
            <Route path="/createProfile" exact>
              <HeaderLoggedin />
              <CreateProfile />
              <Footer />
            </Route>
            <Route path="/touristReports" exact>
              <HeaderLoggedin />
              <TouristReport />
              <Footer />
            </Route>
            <Route path="/reports" exact>
              <HeaderLoggedin />
              <Reports />
              <Footer />
            </Route>
            <Route path="/branch/:id" exact>
              <HeaderLoggedin />
              {isHotelAdmin() ? <Branch /> : <Branch />}
              <Footer />
            </Route>
            {userType && userType === "HOTEL" && (
              <>
                <Route path="/staff" exact>
                  <HeaderLoggedin />
                  <Staff />
                  <Footer />
                </Route>
                <Route path="/staff-details" exact>
                  <HeaderLoggedin />
                  <StaffDetails />
                  <Footer />
                </Route>
                <Route path="/createStaff" exact>
                  <HeaderLoggedin />
                  <CreateStaff />
                  <Footer />
                </Route>
                <Route path="/branchDetails" exact>
                  <HeaderLoggedin />
                  <BranchDetail />
                  <Footer />
                </Route>
              </>
            )}
          </>
        ) : (
          <Redirect to="/login" />
        )}
        ):
      </Switch>
    </>
  );
}

export default MainApp;
