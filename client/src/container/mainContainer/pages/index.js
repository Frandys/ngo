import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
    return (
        <>
            <div>hello Default Pages</div>
            <div>
                <Link to="/login">login</Link>
            </div>
        </>
    )
}

export default index