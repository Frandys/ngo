import React from 'react'
import { toast } from 'react-toastify';

const ToastifyMain = (message) => {

    if (!message == "") {
        toast(message)
    }
}

export default ToastifyMain