import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { addCampaignActions, campaignActions } from '../../../../redux/campaign/action';
import { useDispatch, useSelector } from 'react-redux';
import ToastifyMain from '../../../../toastify/ToastifyMain';
import * as actionType from "../../../../redux/campaign/constant"
import { ButtonLorder } from '../../../../helpers/mainLorder/Lorder';
// import { ButtonLorder } from '../../../../helps/mainLorder/Lorder';


const CampaignForm = (props) => {
    const { onHide } = props
    const store = useSelector((state) => state);
    const dispatch = useDispatch()
    const addCampaignStatus = store?.addCampaignReducer?.addCampaignData?.data?.status;
    const addCampaignMessage = store?.addCampaignReducer?.addCampaignData?.data?.message;
    const campaignLoading = store?.addCampaignReducer?.loading

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    console.log(store, addCampaignStatus,addCampaignMessage,'******')
    const [typesInput, setTypesInput] = useState(false)
    const typesInputBtn = (types) => {
        if (types === "image") {
            setTypesInput(false)
        } else {
            setTypesInput(true)

        }

    }

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("type", data.type);
        formData.append("source", data.type === 'image' ? data?.source?.[0] : data.source);
        formData.append("goal", data.goal);
        console.log(formData, 'formData');
        dispatch(addCampaignActions(formData));
    };

    useEffect(() => {
        if (addCampaignStatus === "success") {
            ToastifyMain(addCampaignMessage);
            onHide()
            dispatch(campaignActions());
            dispatch({
                type: actionType.ADD_CAMPAIGN_RESET,
                payload: {}
            })

        }
    }, [addCampaignStatus]);
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
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-4">
                            <form
                                onSubmit={handleSubmit(
                                    (data) => {
                                        onSubmit(data);
                                    },
                                    (error) => {
                                        console.log(error);
                                    }
                                )}
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">
                                                NAME
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register("name", { required: true })}
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                            />
                                            {errors.name && (
                                                <span className="text-danger ">
                                                    Please enter your Name
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">
                                                DESCRIPTION
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register("description", {
                                                    required: true
                                                })}
                                                isInvalid={errors.description}
                                                id="exampleInputEmail1"
                                            />
                                            {errors.description?.type === "required" && (
                                                <span className="text-danger">
                                                    Please enter your description
                                                </span>
                                            )}


                                            {/* {errors.email && <span className='text-danger '>Please enter Email</span>} */}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">
                                                GOAL
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                {...register("goal", { required: true })}
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                            />
                                            {errors.goal && (
                                                <span className="text-danger ">
                                                    Please enter Phone no
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div class="mb-3 ">
                                            <label for="exampleInputEmail1" class="form-label">
                                                TYPE
                                            </label>
                                            <select
                                                {...register("type", { required: true })}
                                                onChange={(e) => typesInputBtn(e.target.value)} className="w-100 py-2 mb-2">
                                                <option value="image">Image</option>
                                                <option value="text">Note</option>
                                            </select>
                                            {!typesInput ? <><input
                                                type="file"
                                                class="form-control"
                                                {...register("source", { required: true })}
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                            />
                                                {errors.image && (
                                                    <span className="text-danger ">
                                                        Please enter Image
                                                    </span>
                                                )}</> : <><input
                                                    type="text"
                                                    class="form-control"
                                                    {...register("source", { required: true })}
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                />
                                                {errors.types && (
                                                    <span className="text-danger ">
                                                        Please enter Types
                                                    </span>
                                                )}</>}


                                        </div>
                                    </div>

                                </div>



                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" class="btn btn-primary w-100">

                                            {!campaignLoading ? <>Save</> : <ButtonLorder />}
                                        </button>
                                    </div>
                                </div>
                                {/* <div className="row mt-3">
                        <div className="col-12">
                            <button
                                type="submit"
                                class="btn btn-light w-100"
                                onClick={() => loginSignBtn()}
                            >
                                Login
                            </button>
                        </div>
                    </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal></div>)
}

export default CampaignForm