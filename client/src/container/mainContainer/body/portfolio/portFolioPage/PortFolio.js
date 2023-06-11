import React, { useState, useEffect } from 'react'
import Header from '../../../header/Header'
import { Card, Button } from 'react-bootstrap';
import "../../../header/Header.css"
import FirstImage from "../../../../helps/imageStatic/firstImage.jpg"
import { campaignActions } from '../../../../redux/campaign/action';
import { useSelector, useDispatch } from 'react-redux';


const PortFolio = () => {
    const store = useSelector((state) => state);
    const dispatch = useDispatch()
    console.log(store, 'ooo')

    useEffect(() => {
        dispatch(campaignActions())
    }, [])
    // const [array, setArray] = useState(['hello', 'hii', 'what your name'])
    // const [arrayid, setArrayId] = useState([])

    // const checkBox = (check, id) => {
    //     if (check === true) {
    //         setArrayId([...arrayid, id])
    //     } else if (check === false) {
    //         const findArrayId = arrayid?.filter((itss, indexs) => itss !== id)
    //         setArrayId(findArrayId);
    //     }
    // }

    // const deleteBtn = (id) => {
    //     const deleteChekd = array?.filter((iitems, iiitd) => iiitd !== id)
    //     setArray(deleteChekd)
    //     setArrayId([])
    // }


    return (
        <>
            <Header />

            <section id="hero" class="hero">
                <div class="container position-relative">
                    <div class="row gy-5" data-aos="fade-in">
                        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                            <h2>Welcome to <span>Impact</span></h2>
                            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                            </p>
                            <div class="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" class="btn-get-started">Get Started</a>
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                    class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch
                                        Video</span></a>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2">
                            <img src="assets/img/hero-img.svg" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
                        </div>
                    </div>
                </div>

                <div class="icon-boxes position-relative">
                    <div class="container position-relative">
                        <div class="row gy-4 mt-5">

                            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div class="icon-box">
                                    <div class="icon"><i class="bi bi-easel"></i></div>
                                    <h4 class="title"><a href="" class="stretched-link">Lorem Ipsum</a></h4>
                                </div>
                            </div>
                            {/* <!--End Icon Box --> */}

                            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div class="icon-box">
                                    <div class="icon"><i class="bi bi-gem"></i></div>
                                    <h4 class="title"><a href="" class="stretched-link">Sed ut perspiciatis</a></h4>
                                </div>
                            </div>
                            {/* <!--End Icon Box --> */}

                            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div class="icon-box">
                                    <div class="icon"><i class="bi bi-geo-alt"></i></div>
                                    <h4 class="title"><a href="" class="stretched-link">Magni Dolores</a></h4>
                                </div>
                            </div>
                            {/* <!--End Icon Box --> */}

                            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div class="icon-box">
                                    <div class="icon"><i class="bi bi-command"></i></div>
                                    <h4 class="title"><a href="" class="stretched-link">Nemo Enim</a></h4>
                                </div>
                            </div>
                            {/* <!--End Icon Box --> */}

                        </div>
                    </div>
                </div>
            </section>
            <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry"
                data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">

                <div>
                    <ul class="portfolio-flters">
                        <li data-filter="*" class="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-product">Product</li>
                        <li data-filter=".filter-branding">Branding</li>
                        <li data-filter=".filter-books">Books</li>
                    </ul>
                    {/* <!-- End Portfolio Filters --> */}
                </div>

                <div className="container">
                    <div class="row gy-4 portfolio-container">

                        <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <a href="assets/img/portfolio/app-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img
                                    src={FirstImage} class="img-fluid" alt="" /></a>
                                <div class="portfolio-info">
                                    <h4><a href="portfolio-details.html" title="More Details">App 1</a></h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Portfolio Item --> */}

                        <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                            <div class="portfolio-wrap">
                                <a href="assets/img/portfolio/product-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img
                                    src={FirstImage} class="img-fluid" alt="" /></a>
                                <div class="portfolio-info">
                                    <h4><a href="portfolio-details.html" title="More Details">Product 1</a></h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Portfolio Item --> */}

                        <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
                            <div class="portfolio-wrap">
                                <a href="assets/img/portfolio/branding-1.jpg" data-gallery="portfolio-gallery-app"
                                    class="glightbox"><img
                                        src={FirstImage} class="img-fluid" alt="" /></a>
                                <div class="portfolio-info">
                                    <h4><a href="portfolio-details.html" title="More Details">Branding 1</a></h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Portfolio Item --> */}

                        <div class="col-xl-4 col-md-6 portfolio-item filter-books">
                            <div class="portfolio-wrap">
                                <a href="assets/img/portfolio/books-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img
                                    src={FirstImage} class="img-fluid" alt="" /></a>
                                <div class="portfolio-info">
                                    <h4><a href="portfolio-details.html" title="More Details">Books 1</a></h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Portfolio Item --> */}

                        <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <a href="assets/img/portfolio/app-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img
                                    src={FirstImage} class="img-fluid" alt="" /></a>
                                <div class="portfolio-info">
                                    <h4><a href="portfolio-details.html" title="More Details">App 2</a></h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Portfolio Item --> */}

                        <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                            <div class="portfolio-wrap">
                                <a href="assets/img/portfolio/product-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img
                                    src={FirstImage} class="img-fluid" alt="" /></a>
                                <div class="portfolio-info">
                                    <h4><a href="portfolio-details.html" title="More Details">Product 2</a></h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Portfolio Item --> */}

                        {/* <!-- End Portfolio Item --> */}

                    </div>
                </div>
                {/* <!-- End Portfolio Container --> */}

            </div>

            {/* <h1>
                {array?.map((item, index) => {
                    let ids = arrayid?.map((test, indd) => {
                        if (test === index) {
                            return true
                        } else {
                            return false
                        }
                    })
                    return (<div>
                        <span><input type="checkbox" checked={ids[0] === true ? true : false} onClick={(e) => { checkBox(e.target.checked, index) }} />
                        </span><span className='mx-3'>{item}</span>
                        <span>{ids[0] === true ? <button className='btn btn-danger btn-sm' onClick={() => { deleteBtn(index) }}>Delete</button> : "  "}</span>
                    </div>)
                })}
            </h1>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12 ps-0 pe-0" >
                        <div className='image_bckgrnd_img text-white ps-0 pe-0 d-flex justify-content-start align-items-center'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div >
                                            <div>
                                                <h1>Discover clothing as it was meant to fit</h1>
                                            </div>
                                            <div className='mt-5'>
                                                <button className='bg-primary text-white px-5 py-2'>Discover collection</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12 card_height d-flex justify-content-start align-items-center" >
                        <div className='col-12'>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <h2>Latest news</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-3 ">
                                            <Card >
                                                <Card.Img className="bg_image_one" />
                                                <Card.Body>
                                                    <Card.Title>Meet your summer wardrobe essentials</Card.Title>
                                                    <Card.Text className='my-3'>
                                                        Breathable and lightweight with an A+ fit
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-3"><Card >
                                            <Card.Img className="bg_image_one" />
                                            <Card.Body>
                                                <Card.Title>Meet your summer wardrobe essentials</Card.Title>
                                                <Card.Text className='my-3'>
                                                    Breathable and lightweight with an A+ fit
                                                </Card.Text>
                                            </Card.Body>
                                        </Card></div>
                                        <div className="col-3"><Card >
                                            <Card.Img className="bg_image_one" />
                                            <Card.Body>
                                                <Card.Title>Meet your summer wardrobe essentials</Card.Title>
                                                <Card.Text className='my-3'>
                                                    Breathable and lightweight with an A+ fit
                                                </Card.Text>
                                            </Card.Body>
                                        </Card></div>
                                        <div className="col-3"><Card >
                                            <Card.Img className="bg_image_one" />
                                            <Card.Body>
                                                <Card.Title>Meet your summer wardrobe essentials</Card.Title>
                                                <Card.Text className='my-3'>
                                                    Breathable and lightweight with an A+ fit
                                                </Card.Text>
                                            </Card.Body>
                                        </Card></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}



export default PortFolio;