import React, { useState } from 'react'
import Login from './logInPage/Login'
import SignUp from './signUpPage/SignUp'

const IndexLogin = () => {
    const [loginSignShow, setLoginSignShow] = useState(false)
    const loginSignBtn = () => {
        setLoginSignShow(!loginSignShow)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12  h-100">
                        {!loginSignShow ? <Login loginSignBtn={loginSignBtn} /> : <SignUp loginSignBtn={loginSignBtn} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexLogin