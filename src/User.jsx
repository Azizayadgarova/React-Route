
import { text } from 'express'
import React, { useState } from 'react'

const User = () => {
    const [firstName, setfistName] = useState('')
    const [lastName, setLastname] = useState('')
    const validateInput = text => {
        if (text.search(/\d/) >= 0) {
            return true;
        } else {
            return false;
        }

    }
    const ValidateColorFirstName = validateInput(firstName) ? "text-danger" : null
    const ValidateColorLastName = validateInput(lastName) ? "text-danger" : null
    return (
        <div className='w-50 mx-auto mb-5'>
            <div className='border p-3 mt-5'>
                <p className='text-center fs-3 text-bl'>Register</p>
                <div className='d-flex gap-3'>
                    <input onChange={e => setfistName(e.target.value)} type="text" className={`form-control ${ValidateColorFirstName}`} placeholder='First Name' value={firstName} />
                    <input onChange={e => setLastname(e.target.value)} type="text" className={`form-control ${ValidateColorLastName}`} placeholder='Last Name' value={lastName} />
                </div>
                <button className=' mt-3  btn btn-success'>Send data</button>
            </div>
        </div>
    )
}

export default User
