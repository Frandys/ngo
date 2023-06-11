import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Lorder.css'

const ButtonLorder = () => {
    return (
        <Spinner animation="border" role="lorder_css" className='lorder_css'>
        </Spinner>
    );
}

const ViewLorder = () => {

    return (
        <div className='row row_height_view'>
            <div className="col-12 d-flex align-items-center justify-content-center">
                <Spinner animation="border" role="height_lorder" className='height_lorder'>
                </Spinner>
            </div>
        </div>
    )
}

const SmallTableLoading = () => {
    return (
        <div className='row height_lorder_small_'>
            <div className="col-12 d-flex align-items-center justify-content-center ">
                <Spinner animation="border" role="height_lorder" className='height_lorder_small_table '>
                </Spinner>
            </div>
        </div>
    )
}

const TableLorder = () => {

    return (
        <div className='row row_height'>
            <div className="col-12 d-flex align-items-center justify-content-center ">
                <Spinner animation="border" role="height_lorder" className='height_lorder'>
                </Spinner>
            </div>
        </div>
    )
}

export { TableLorder, ViewLorder, ButtonLorder, SmallTableLoading }
