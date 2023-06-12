import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './container/navBar/Protected';
import IndexLogin from './container/login';
import { useSelector } from 'react-redux';
import PublicRouters from './container/navBar/Public';
import { setAuthorization } from './container/helpers/apiCore';
import CampaignList from './container/mainContainer/pages/campaignList/CampaignList';
import HomePage from './container/mainContainer/pages/home/homePage/homePage';

function App() {
  const state = useSelector((state) => state)
  const login = state?.loginReducer?.loginData?.data?.token
  const logOutRes = state?.loginReducer?.logOut
  const [accessToken, setAccessToken] = useState('')
  useEffect(() => {
    if (login !== "") {
      setAccessToken(localStorage.getItem("token"));
      setAuthorization(localStorage.getItem("token"))
    } else {
      setAccessToken(localStorage.getItem("token"));
    }
    if (logOutRes === true) {
      setAccessToken(localStorage.getItem("token"));
    }
  }, [login, logOutRes, accessToken])



  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={accessToken !== null ? <>{<PublicRouters isLoggedIn={accessToken} >
            <IndexLogin />
          </PublicRouters>}</> : <><HomePage /></>}
          ></Route>
          <Route path="/login" element={<PublicRouters isLoggedIn={accessToken} >
            <IndexLogin />
          </PublicRouters>
          }>
          </Route>
          {/* <Route path="/about" element={<ProtectedRoutes isLoggedIn={accessToken}>
            <About />
          </ProtectedRoutes>} /> */}
          <Route path="/portfolio" element={<ProtectedRoutes isLoggedIn={accessToken}>
            <ProtectedRoutes />
          </ProtectedRoutes>} />
          <Route path="/campaign" element={<ProtectedRoutes isLoggedIn={accessToken}>
            <CampaignList />
          </ProtectedRoutes>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
