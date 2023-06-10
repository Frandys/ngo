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
  const login = state?.loginReducers?.login?.user?.accessToken
  const logOutRes = state?.logOutReducers?.logOut
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    if (login !== undefined) {
      setAccessToken(localStorage.getItem("accessToken"));
    } else {
      setAccessToken(localStorage.getItem("accessToken"));
    }
    if (logOutRes === true) {
      setAccessToken(localStorage.getItem("accessToken"));
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