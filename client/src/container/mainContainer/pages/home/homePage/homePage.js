import React, { useState, useEffect } from 'react'
import Header from '../../../header/Header'
import "../../../header/Header.css"
import { useSelector, useDispatch } from 'react-redux';
import { TableLorder } from '../../../../helpers/mainLorder/Lorder';
import CampaignForm from './model/CampaignForm';
import { getHomeCampaignActions } from '../../../../redux/home/action';



const HomePage = () => {
    const store = useSelector((state) => state);
    const dispatch = useDispatch()
    const homeCampaignGetData = store?.getHomeCampaignReducer?.getHomeCampaignData?.data?.data?.data
    // const login = state?.loginReducer?.loginData?.data?.token

    const campaignGetloading = store?.getCampaignReducer?.loading
    const [modalShow, setModalShow] = useState(false);
    const [campaignData, setCampaignData] = useState('')

    const modelClose=()=>{
        setModalShow(false)
    }
    const campaignOpenModel = (data) => {
        setModalShow(true)
        setCampaignData(data)
    }

    useEffect(() => {
        // dispatch(campaignActions());
        dispatch(getHomeCampaignActions())
    }, [])

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

                {!campaignGetloading ? <div className="container">
                    <div class="row gy-4 portfolio-container">
                        {homeCampaignGetData?.map((item) => {
                            console.log(item?.type,'9999')
                            return (<>
                                <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                                    <div class="portfolio-wrap">
                                        <a href="" data-gallery="portfolio-gallery-app" class="glightbox">
                                            {item?.type==="image"?<img
                                            src={`http://localhost:8000/compaign/${item?.source}`} class="img-fluid image_size" alt="" />:<div className='image_size'>{item?.source}</div>}
                                            </a>
                                        <div class="portfolio-info">
                                            <h4><a href="" title="More Details">{item.name}</a></h4>
                                            <h4><a href="" title="More Details">Goal- {item.goal}</a></h4>
                                            <h4><a href="" title="More Details">Reached- {item.donateAmount}</a></h4>

                                            <p>{item.description}</p>
                                           {item.goal>=item.donateAmount?<button className='btn btn-primary' onClick={() => campaignOpenModel(item)}>Donate</button>:<></>} 
                                        </div>
                                    </div>
                                </div>
                            </>)
                        })}


                    </div>
                </div> : <><TableLorder /></>}

                <>
                    <CampaignForm
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        campaignData={campaignData}
                        modelClose={()=>modelClose()}
                         />
                </>
            </div>
        </>
    )
}



export default HomePage;