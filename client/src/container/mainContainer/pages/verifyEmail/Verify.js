import React, { useEffect, useState } from "react";
import "./Verify.css";
import { useParams } from 'react-router-dom';
import { verifyEmailAction } from '../../../redux/auth/action';
import { useSelector, useDispatch } from 'react-redux';
// import Loading from "../.././../../container/helpers/mainLorder/Lorder";
import ToastifyMain from "../../../toastify/ToastifyMain";
import {Routes, Route, useNavigate} from 'react-router-dom';


const VerifyEmail = (props) => {
    const { tokens } = useParams();
    const navigate = useNavigate();

    const store = useSelector((state) => state);
    console.log(store);
    const dispatch = useDispatch()
    const  data = store?.verifyEmailReducer?.verifyEmailData;
    const  Status = store?.verifyEmailReducer?.verifyEmailData?.data?.status;
    const Message = store?.verifyEmailReducer?.verifyEmailData?.data?.message;
    const  Loadings = store?.verifyEmailReducer?.loading
 
    console.log(tokens);
  useEffect(() => { 
    dispatch(verifyEmailAction(tokens)) 

  }, []);

  useEffect(() => {
    if (!data !== "") {
      ToastifyMain(data);
    } 
  }, [data]);

  useEffect(() => {
    if (Status === "success") {
      ToastifyMain(Status);
    }
  }, [Status]);

  const loginSignBtn = () => {
    // 👇️ navigate to /contacts
    navigate('/login');
  };
  return (
    <div>
      <div className="container">
         
        <div className="row ">
          <div className="col-12 ">
          <div className="row mt-3">
                    <div className="col-12">
                      <button
                        type="submit"
                        class="btn btn-light w-100"
                        onClick={loginSignBtn}
                      >
                        Login
                      </button>
                    </div>
                  </div>
          {/* {!Loadings ? <>Login</> : <Loading />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
