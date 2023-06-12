import React from "react";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./campaignForm.css";
import { useForm } from "react-hook-form";
import * as actionType from "../../../../../redux/donaton/constant"
import { getHomeCampaignActions } from "../../../../../redux/home/action";

// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase/firebase';
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../../mainContainer/helps/mainLoading/Loading";
import ToastifyMain from "../../../../../toastify/ToastifyMain";
import { donationActions } from "../../../../../redux/donaton/action";

const CampaignForm = (props) => {
  const store = useSelector((state) => state);
  const { campaignData, onHide } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const loading = state?.getDonationReducer?.loading;
  const donationData = store?.getDonationReducer?.getDonationData;
  const donationSuccessStatus =
    store?.getDonationReducer?.getDonationData?.data?.status;
  const donationSuccessMessage =
    store?.getDonationReducer?.getDonationData?.data?.message;

  const { source, description, goal, name, _id } = campaignData;
  console.log(store?.getDonationReducer?.getDonationData,donationSuccessStatus,'storeeeee')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
     dispatch(
      donationActions({
        compainId: _id,
        name: data?.name,
        phone: data?.phone,
        accAmount: goal,
        donateAmount: data?.donateAmount,
      })
    );
  };
  
  useEffect(() => {
    if (!donationData == "") {
      ToastifyMain(donationData);
    }
  }, [donationData]);

  useEffect(() => {
    if (donationSuccessStatus === "success") {
      ToastifyMain(donationSuccessMessage);
      onHide();
      dispatch({
        type: actionType.DONATION_RESET,
        payload: {}
    })
    dispatch(getHomeCampaignActions())
    }
  }, [donationSuccessStatus]);

  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Donations
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div class="pricing-card">
            <img src={`http://localhost:8000/compaign/${source}`} alt="" />

            <div class="card-body">
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

                  <div className="row">
                    <div className="col-12">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          {...register("name", { required: true })}
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        {errors.name && (
                          <span className="text-danger ">
                            Please enter Name
                          </span>
                        )}
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                          Phone
                        </label>
                        <input
                          type="text"
                          {...register("phone", { required: true })}
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        {errors.phone && (
                          <span className="text-danger ">
                            Please enter Phone
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Donate Amount
                      </label>
                      <input
                        type="text"
                        {...register("donateAmount", { required: true })}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      {errors.donateAmount && (
                        <span className="text-danger ">
                          Please enter Amount
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="card-button">
                    <button>{!loading ? <>Donate</> : <Loading />}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default CampaignForm;
