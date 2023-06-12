import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { logOutAction } from '../../redux/action/loginAction/action';
import "./Header.css"
import { logOutAction } from '../../redux/auth/action';

const Header = () => {

    const dispatch = useDispatch()
    const location = useLocation();
    const [accessToken, setAccessToken] = useState('')

    useEffect(() => {
        setAccessToken(localStorage.getItem("token"));

    }, [])

    return (
        <>
            <>
                <div className="container-fluid header_position">
                    <div className="row border bg-light py-3">
                        <div className="col-12">
                            <div className="row d-flex align-content-center">
                                <div className="col-2">
                                    <h1>JVG-SHYAM</h1>
                                </div>
                                <div className="col-6 d-flex align-self-center justify-content-center">
                                    <div className='d-flex'>
                                        {/* <div>
                                            <Link to="/" className={location?.pathname === "/home" ? "link_style_active link_style" : 'link_style'}>Home</Link>
                                        </div>
                                        <div className='ms-3'>
                                            <Link to="/about" className={location?.pathname === "/about" ? "link_style_active link_style" : 'link_style'}>About</Link>
                                        </div>
                                        <div className='ms-3'>
                                            <Link to="/portfolio" className={location?.pathname === "/portfolio" ? "link_style_active link_style" : 'link_style'}>Portfolio</Link>
                                        </div> */}

                                    </div>
                                </div>
                                <div className="col-4 d-flex align-self-center justify-content-center">
                                    <div className='d-flex justify-content-end'>
                                        <div>
                                            <Form className='d-flex'>
                                                <Form.Control
                                                    type="search"
                                                    placeholder="Search"
                                                    className="me-2"
                                                    aria-label="Search"
                                                />
                                                <Button variant="outline-success">Search</Button>
                                            </Form>
                                        </div>
                                        {accessToken !== null ? <></> : <div className='ms-3'>
                                            <Link to="/login">
                                                <Button variant="outline-primary"

                                                >Creat Campaign</Button>

                                            </Link>
                                        </div>}


                                        {accessToken !== null ? <div className='ms-3'>
                                            <Link to="/">
                                                <Button variant="outline-danger"
                                                    onClick={() => dispatch(logOutAction())}
                                                >log out</Button>

                                            </Link>
                                        </div> : <></>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
            {accessToken !== null ? <header id="header" class="header d-flex align-items-center">

                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" class="logo d-flex align-items-center">
                        <h1>Impact<span>.</span></h1>
                    </a>
                    <nav id="navbar" class="navbar">
                        <ul>

                            <div className='ms-3'>
                                <Link to="/campaign" className={location?.pathname === "/campaign" ? "link_style_active link_style" : 'link_style'}>Campaign</Link>
                            </div>
                        </ul>
                    </nav>
                    {/* <!-- .navbar --> */}

                    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header> : <></>}



        </>

    )
}

export default Header