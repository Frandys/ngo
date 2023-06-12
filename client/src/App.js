import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './container/mainContainer/body/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protected from './container/navBar/Protected';
import IndexLogin from './container/login';
import { useSelector } from 'react-redux';
import About from './container/mainContainer/body/about/About';
import LoginProtectRouters from './container/navBar/LoginProtectRouters';
import PortFolio from './container/mainContainer/body/portfolio/portFolioPage/PortFolio';
import { setAuthorization } from './container/helps/apiCore';
import CampaignList from './container/mainContainer/body/campaignList/CampaignList';

function App() {
  const state = useSelector((state) => state)
  const login = state?.loginReducer?.loginData?.data?.token
  const logOutRes = state?.loginReducer?.logOut
  const [accessToken, setAccessToken] = useState('')
  console.log(accessToken, 'kk99')
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
          <Route path="/" element={accessToken !== null ? <>{<LoginProtectRouters isLoggedIn={accessToken} >
            <IndexLogin />
          </LoginProtectRouters>}</> : <><PortFolio /></>}
          ></Route>
          <Route path="/login" element={<LoginProtectRouters isLoggedIn={accessToken} >
            <IndexLogin />
          </LoginProtectRouters>
          }>
          </Route>
          <Route path="/about" element={<Protected isLoggedIn={accessToken}>
            <About />
          </Protected>} />
          <Route path="/portfolio" element={<Protected isLoggedIn={accessToken}>
            <PortFolio />
          </Protected>} />
          <Route path="/campaign" element={<Protected isLoggedIn={accessToken}>
            <CampaignList />
          </Protected>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
