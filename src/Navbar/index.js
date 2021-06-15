import React, { useState, useContext, useRef, useEffect } from 'react'

import { sellers } from '../data'
import { Context } from '../data/context'

import { getUsers } from './getUsers'
import { createUser } from './createUser'

const Navbar = () => {
    const didMountRef = useRef(false)
    const { currentUser, setUsers } = useContext(Context)
    const [username, setUsername] = useState(currentUser.username)
    const [secret, setSecret] = useState(currentUser.secret)

    function syncUsers() {
        getUsers(users => {
            console.log('Fetched users', users)
            sellers.map(seller => {
                if(!users.find(user => seller.username === user.username)) {
                    console.log('Creating user', seller.username)
                    createUser(seller)
                }
            })
            setUsers(users)
        })
    }

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true
            syncUsers()
        }
    })

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
            </p>    

            <div style={{ float: 'right', display: 'inline-block', padding: '40px' }}>
                <a href='/chats'>My Chats</a>
            </div>        
        </div>
    );
}

export default Navbar;
