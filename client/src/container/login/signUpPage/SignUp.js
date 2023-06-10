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
        dispatch(SignUpAction(
            {
                name: data?.name,
                email: data?.email,
                phone: data?.phone,
                password: data?.password,
                role: data?.role
            }))
    }
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
                                                {errors.name && <span className='text-danger '>Please enter your Name</span>}

                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="text" className="form-control"
                                                    // {...register("email", { required: true })}
                                                    {...register("email", {
                                                        required: true,
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "Invalid email address"
                                                        }
                                                    })}
                                                    isInvalid={errors.mainAdmin}
                                                    // className='mb-1'
                                                    placeholder="Enter email"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                {(errors.mainAdmin?.type === "required") && <span className='text-danger'>Please enter your Email</span>}
                                                {(errors.mainAdmin?.type === "pattern") && <span className='text-danger'>{errors.mainAdmin?.message}</span>}

                                                {/* {errors.email && <span className='text-danger '>Please enter Email</span>} */}

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

                                            </div>
                                            {errors.password && <span className='text-danger '>Please enter Password</span>}

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">PHONE NO</label>
                                                <input type="text" class="form-control"
                                                    {...register("phone", { required: true })}
                                                    id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                {errors.phone && <span className='text-danger '>Please enter Phone no</span>}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Role</label>
                                                <input type="text" class="form-control"
                                                    {...register("role", { required: true })}
                                                    id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                {errors.role && <span className='text-danger '>Please enter Role</span>}

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