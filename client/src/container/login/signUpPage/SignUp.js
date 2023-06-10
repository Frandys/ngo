import React from 'react'
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { SignUpAction } from '../../redux/action/loginAction/action';
import ToastifyMain from '../../toastify/ToastifyMain';
import Loading from '../../mainContainer/helps/mainLoading/Loading';


const SignUp = (props) => {
    const dispatch = useDispatch()
    const store = useSelector((state) => state)
    const signUpMessage = store?.signUpReducers?.signUp?.code
    const signUpLoading = store?.signUpReducers?.loading
    const { loginSignBtn } = props
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(SignUpAction(data))
    }

    console.log(store?.signUpReducers?.loading, 'sign check')
    useEffect(() => {
        if (!signUpMessage == '') {
            ToastifyMain(signUpMessage)
        }
    }, [signUpMessage])


    return (
        <>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-12 mt-5">
                        <div className="row d-flex justify-content-center align-items-center mt-5">
                            <div className="col-5  border p-5 mt-5 bg-light">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <h1>Sign Up</h1>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit((data) => {
                                    onSubmit(data)
                                }, (error) => {
                                    console.log(error)
                                })}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">NAME</label>
                                                <input type="text" className="form-control" {...register("name", { required: true })} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="text" className="form-control"
                                                    {...register("email", { required: true })}
                                                    id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="exampleInputEmail1" className="form-label">Password</label>
                                            <div className="input-group mb-3">
                                                <input className="form-control"
                                                    {...register("password", { required: true })}
                                                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                {/* <span className="input-group-text" id="basic-addon2" onClick={passwordShowHide}>{!passwordIcon ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}</span> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">PHONE NO</label>
                                                <input type="text" class="form-control"
                                                    {...register("phone", { required: true })}
                                                    id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <button type="submit" class="btn btn-primary w-100">
                                                {!signUpLoading ?
                                                    <>Sign Up</>

                                                    : <Loading />
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <button type="submit" class="btn btn-light w-100" onClick={() => loginSignBtn()}>Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default SignUp