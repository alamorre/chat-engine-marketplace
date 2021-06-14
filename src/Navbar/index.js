import React, { useState, useContext } from 'react'

import { Context } from '../data/context'

import { getUsers } from './getUsers'

const Navbar = () => {
    const { currentUser } = useContext(Context)
    const [username, setUsername] = useState(currentUser.username)
    const [secret, setSecret] = useState(currentUser.secret)

    function createBuyer() {
        getUsers(data => console.log('users', data))
    }

    return (
        <div style={{ display: 'inline-block', width: '100%', backgroundColor: '#bae7ff' }}>
            <a href='/'>
                <h1 style={{ color: 'black', display: 'inline-block', paddingTop: '10px', paddingLeft: '12px', cursor: 'pointer' }}>
                    Textbook Market
                </h1>
            </a>
        
            <p style={{ float: 'right', display: 'inline-block' }}>
                Username: <input placeholder='Username' value={username}  onChange={e => setUsername(e.target.value)} /> <br/>
                User Secret: <input placeholder='Secret' value={secret} onChange={e => setSecret(e.target.value)} /> <br/>
                <button onClick={() => createBuyer()} >
                    Switch User
                </button>
            </p>    

            <div style={{ float: 'right', display: 'inline-block', padding: '40px' }}>
                <a href='/chats'>My Chats</a>
            </div>        
        </div>
    );
}

export default Navbar;
