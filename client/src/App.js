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

function App() {
  const state = useSelector((state) => state)
  const login = state?.loginReducer?.loginData?.data?.token
  const logOutRes = state?.logOutReducers?.logOut
  const [accessToken, setAccessToken] = useState('')

  console.log(state?.loginReducer?.loginData?.data?.token, 'state ii')
  useEffect(() => {
    if (login !== "") {
      setAccessToken(localStorage.getItem("token"));
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
          <Route path="/" element={<LoginProtectRouters isLoggedIn={accessToken} >
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
          <Route path="/home" element={<Protected isLoggedIn={accessToken}>
            <Home />
          </Protected>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
