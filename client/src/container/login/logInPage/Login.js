import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/action/loginAction/action';
import Loading from '../../mainContainer/helps/mainLoading/Loading';
import ToastifyMain from '../../toastify/ToastifyMain';
import { loginNgoActions } from '../../redux/action/action';

const Login = (props) => {
    const { loginSignBtn } = props
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const loginLoading = state?.loginReducers?.loading
    const loginStatus = state?.loginReducers?.login
    console.log(state?.loginReducers, 'kkk')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        dispatch(loginNgoActions({
            email: data?.email,
            password: data?.password
        }))
        // "guri@yopmail.com"
        // const email = data?.email;
        // const password = data?.password
        // dispatch(loginAction(email, password))
    }

    useEffect(() => {
        if (!loginStatus == '') {
            ToastifyMain(loginStatus)
        }
    }, [loginStatus])

    return (
        <>
            <div className="container mt-5 ">
                <div className="row mt-5">
                    <div className="col-12 mt-5">
                        <div className="row d-flex justify-content-center align-items-center mt-5">
                            <div className="col-5  border p-5 mt-5 bg-light">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <h1>Login</h1>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit((data) => {
                                    onSubmit(data)
                                }, (error) => {
                                    console.log(error)
                                })}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="text"
                                                    {...register("email", { required: true })}
                                                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">Password</label>
                                                <input type="password"
                                                    {...register("password", { required: true })}
                                                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary w-100"
                                            // onClick={(e) => {
                                            //     loginSignBtns(e)
                                            // }}
                                            >{!loginLoading ? <>Login</> : <Loading />}</button>

                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <button type="submit" class="btn btn-light w-100" onClick={() => loginSignBtn()}>Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login