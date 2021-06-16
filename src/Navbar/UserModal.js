import React, { useContext, useState } from 'react'

import { sellers } from '../data'
import { Context } from '../data/context'

import { Select } from 'antd'

const { Option } = Select

const UserModal = () => {
    const [value, setValue] = useState('')
    const { currentUser, setCurrentUser } = useContext(Context)

    function onChange(value) {
        const user = sellers.find(seller => seller.username === value)
        if (user) {
            setCurrentUser(user)
            setValue('')
        } else {
            setValue(value)
        }
        
    }

    return (
        <div>
            <div>Username: {currentUser.username}</div>
            <div>Secret: {currentUser.secret}</div>
            <input 
                value={value}
                default={currentUser.username}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}

export default UserModal;
