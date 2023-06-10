import React, { useEffect } from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';


const Protected = () => {
    const state = useSelector((state) => state)
    const userId = state?.userList?.users?.id
    const navigate = useNavigate();

    useEffect(() => {
        if (userId === 1) {
            navigate('/home')
            {/* <Navigate to='/home' replace /></> */ }
        } else {
            // <Navigate to='/' replace />
            navigate('/')

        }
    }, [userId])

    return userId === 1 ? <Outlet /> : navigate("/");

}

export default Protected