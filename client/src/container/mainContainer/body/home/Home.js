import React, { useState, createContext, useContext } from 'react'
// import { useState } from 'react'
import Header from '../../header/Header'
import "./Home.css"

const Home = () => {
    const [circleRadius, setCircleRadius] = useState(1)



    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4 mx-auto">
                                <h1>Hello Home Page</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className='btn btn-success' disabled={circleRadius >= 5} onClick={() => setCircleRadius(circleRadius + 1)}>Increment</button>
                                <button className='btn btn-danger ms-2' disabled={circleRadius <= 1} onClick={() => setCircleRadius(circleRadius - 1)}> Decrement</button>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center mt-5 ">
                                    <h1 className={circleRadius === 1 ?
                                        " circle_radius_a "
                                        : circleRadius === 2 ?
                                            "circle_radius_b" : circleRadius === 3
                                                ? "circle_radius_c"
                                                : circleRadius === 4 ? 'circle_radius_d' :
                                                    circleRadius === 5 ? "circle_radius_e" : ""} disabled={circleRadius >= 5} onClick={() => setCircleRadius(circleRadius + 1)}>circle</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home