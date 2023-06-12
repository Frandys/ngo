import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import { Form, Button, Table } from 'react-bootstrap';

const About = () => {
    const [resp, setResp] = useState(false)
    const [fullnameError, setFullNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [getAllData, setGetAllData] = useState([])
    const [updateDataId, setUpdateDataId] = useState('')
    const [saveAndUpdateBtn, setSaveAndUpdateBtn] = useState(false)
    const [inputData, setInputData] = useState({
        fullName: "",
        lastName: ""
    })

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    const submitData = (e) => {
        e.preventDefault()
        if (inputData.fullName != "") {
            setFullNameError(false)
            if (inputData.lastName !== "") {
                setGetAllData([...getAllData, inputData])
                setInputData({
                    fullName: "",
                    lastName: ""
                })
                setResp(false)
                setLastNameError(false)

            } else {
                setLastNameError(true)
                setResp(true)

            }
        } else {
            setFullNameError(true)
            setResp(true)
        }
    }

    const deleteInputData = (id) => {
        if (id !== "") {
            const deleteDataFind = getAllData.filter((iteem, index) => {
                return index !== id
            })
            setGetAllData(deleteDataFind)
        }
    }

    const editInputData = (data, id) => {
        if (id !== "") {
            setInputData({
                fullName: data.fullName,
                lastName: data.lastName
            })
            setUpdateDataId(id)
            setSaveAndUpdateBtn(true)
        }
    }

    const UpdateDataBtn = (e) => {
        e.preventDefault()
        if (inputData.fullName != "") {
            setFullNameError(false)
            if (inputData.lastName !== "") {
                if (updateDataId !== "") {
                    const update = getAllData.map((item, indd) => {
                        if (indd === updateDataId) {
                            return inputData
                        }
                        else {
                            return item
                        }
                    }
                    )
                    setGetAllData(update)
                    setSaveAndUpdateBtn(false)
                    setInputData({
                        fullName: "",
                        lastName: ""
                    })
                    setLastNameError(false)
                    setResp(false)
                }
            } else {
                setLastNameError(true)
                setResp(true)
            }
        } else {
            setFullNameError(true)
            setResp(true)
        }
    }

    useEffect(() => {
        if (!resp === false) {
            if (inputData.fullName !== "") {
                setFullNameError(false)
                if (inputData.lastName !== "") {
                    setLastNameError(false)
                } else {
                    setLastNameError(true)
                }
            } else {
                setFullNameError(true)
            }
        }

    }, [resp, inputData])

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4 mx-auto">
                                <h1>Hello About Page</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="row">
                                <div className="col-6 mx-auto border mt-5 p-5">
                                    <Form onSubmit={!saveAndUpdateBtn ? submitData : UpdateDataBtn}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="text" name='fullName' value={inputData.fullName} onChange={(e) => onChangeInput(e)} placeholder="Full Name" />
                                            {!fullnameError ? <></> : <span className='text-danger'>Please enter your name</span>}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="text" name='lastName' value={inputData.lastName} onChange={(e) => onChangeInput(e)} placeholder="Last Name" />
                                            {!lastNameError ? <></> : <span className='text-danger'>Please fill your Last Name</span>}
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            {!saveAndUpdateBtn ? <>Submit</> : <>Update</>}
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getAllData && getAllData?.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{index}</td>
                                                <td>{item.fullName}</td>
                                                <td>{item.lastName}</td>
                                                <td>
                                                    <button className='btn btn-success' onClick={() => { editInputData(item, index) }}>Edit</button>
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => {
                                                        deleteInputData(index)
                                                    }}>delete</button>
                                                </td>

                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default About