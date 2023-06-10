import React from 'react'
import { useLocation } from 'react-router-dom';
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutAction } from '../../redux/action/loginAction/action';
import "./Header.css"

const Header = () => {
    const dispatch = useDispatch()
    const location = useLocation();
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
                                <div className="col-7 d-flex align-self-center justify-content-center">
                                    <div className='d-flex'>
                                        <div>
                                            <Link to="/" className={location?.pathname === "/home" ? "link_style_active link_style" : 'link_style'}>Home</Link>
                                        </div>
                                        <div className='ms-3'>
                                            <Link to="/about" className={location?.pathname === "/about" ? "link_style_active link_style" : 'link_style'}>About</Link>
                                        </div>
                                        <div className='ms-3'>
                                            <Link to="/portfolio" className={location?.pathname === "/portfolio" ? "link_style_active link_style" : 'link_style'}>Portfolio</Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-3 d-flex align-self-center justify-content-center">
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
                                        <div className='ms-3'>
                                            <Link to="/">
                                                <Button variant="outline-danger"
                                                    onClick={() => dispatch(logOutAction())}
                                                >log out</Button>

                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 ">
                            <div className="row py-4 border">
                                <div className="col-4 ">
                                    <div className='d-flex ms-5 align-items-center' >
                                        <div className="">
                                            <h4>Shop</h4>
                                        </div>
                                        <div className=" ms-5">
                                            <h4>About us</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <h3>STANDER TAILOR   </h3>
                                </div>
                                <div className="col-4 ">
                                    <div className='d-flex justify-content-end align-items-center'  >
                                        <h5>
                                            Create your measdurements
                                        </h5>
                                        <div className='mx-3'>
                                            <h3>
                                                <i class="bi bi-person"></i>
                                            </h3>
                                        </div>
                                        <div>
                                            <h4>
                                                <i class="bi bi-heart"></i>
                                            </h4>
                                        </div>
                                        <div className='mx-3'>
                                            <h3>
                                                <i class="bi bi-bag"></i>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
            <header id="header" class="header d-flex align-items-center">

                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" class="logo d-flex align-items-center">
                        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
                        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
                        <h1>Impact<span>.</span></h1>
                    </a>
                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    {/* <!-- .navbar --> */}

                    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>
            {/* <!-- End Header --> */}
        </>

    )
}

export default Header