import React, { useEffect, useState } from 'react'
import Header from '../../header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { campaignActions } from '../../../redux/campaign/action';
import "./CampaignList.css"
import CampaignForm from './model/CampaignForm';

const CampaignList = () => {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const campaignGetData = store?.getCampaignReducer?.getCampaignData?.data?.data?.data

    const [modalShow, setModalShow] = useState(false);

    const campaignOpenModel = () => {
        setModalShow(true)
    }
    useEffect(() => {
        dispatch(campaignActions());

    }, [])

    return (
        <div>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end my-3">
                        <button className='btn btn-primary' onClick={() => campaignOpenModel()}>Add Campaign</button>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12 ">
                        <table class="table border">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">description</th>
                                    <th scope="col">image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {campaignGetData?.map((item, index) => {
                                    console.log(item, 'map')
                                    return (<>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td className='py-3'>
                                                {item.type === "image" ?
                                                    <img src={`http://localhost:8000/compaign/${item.source}`} className="image_css" alt="" />
                                                    : <>{item.source}</>
                                                }
                                            </td>
                                        </tr>
                                    </>)
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <CampaignForm show={modalShow}
                    onHide={() => setModalShow(false)} />
            </div>
        </div>
    )
}

export default CampaignList