import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import "./campaignForm.css"


const CampaignForm = (props) => {
    const { campaignData } = props
    const { source, description, goal, name } = campaignData;
    console.log(source, description, goal, name, 'child')

    return (
        <div><Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-0'>
                <div class="pricing-card">
                    <img src={`http://localhost:8000/compaign/${source}`} alt="" />

                    <div class="card-body">

                        <div id="card-basic-plan" class="active">
                            <div class="card-plans">
                                <span class="plan-tag">Basic</span>
                                <div class="card-plan">
                                    <h3 class="plan-title">Icon Sets</h3>
                                    <h3 class="plan-price">${goal}</h3>
                                </div>
                            </div>
                            <div class="card-content">
                                <p>{name}</p>
                                <div class="card-lists">
                                    <div class="card-list">{description}</div>
                                </div>
                            </div>
                            <div class="card-button">
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div id="card-standard-plan">
                            <div class="card-button">
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div id="card-premium-plan">
                            <div class="card-plans">
                                <span class="plan-tag">Premium</span>
                                <div class="card-plan">
                                    <h3 class="plan-title">Icon Sets</h3>
                                    <h3 class="plan-price">$180</h3>
                                </div>
                            </div>
                            <div class="card-content">
                                <p>Up to 200 creative & professional icons + four color versions/themes</p>
                                <div class="card-lists">
                                    <div class="card-list">Included source files</div>
                                    <div class="card-list">Converted to responsive components</div>
                                </div>
                            </div>
                            <div class="card-button">
                                <button>Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal></div>
    )
}

export default CampaignForm