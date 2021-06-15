import React, { useState, useContext, useRef, useEffect } from 'react'

import { sellers } from '../data'
import { Context } from '../data/context'

import { getUsers } from './getUsers'
import { createUser } from './createUser'

const Navbar = () => {
    const didMountRef = useRef(false)
    const { currentUser, setCurrentUser, setUsers } = useContext(Context)
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
            setCurrentUser(sellers[0])
            setUsername(sellers[0].username)
            setSecret(sellers[0].secret)
        })
    }

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true
            syncUsers()
        }
    })

    function changeCurrentUser(username) {
        const user = sellers.find(seller => seller.username === username)
        setCurrentUser(user)
        setUsername(user.username)
        setSecret(user.secret)
    }

    return (
        <div style={{ display: 'inline-block', width: '100%', backgroundColor: '#bae7ff' }}>
            <a href='/'>
                <h1 style={{ color: 'black', display: 'inline-block', paddingTop: '10px', paddingLeft: '12px', cursor: 'pointer' }}>
                    Textbook Market
                </h1>
            </a>
        
            <div style={{ float: 'right', padding: '12px' }}>
                <div>Username: {username}</div>
                <div>User Secret: {secret}</div>
                <button onClick={() => changeCurrentUser('jane@doe.co')}>Change to Jane</button>
            </div>

            <div style={{ float: 'right', display: 'inline-block', padding: '40px' }}>
                <a href='/chats'>My Chats</a>
            </div>        
        </div>
    );
}

export default Navbar;
