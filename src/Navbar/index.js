import React, { useContext, useRef, useEffect, useState } from 'react'

import { sellers } from '../data'
import { Context } from '../data/context'

import { getUsers } from './getUsers'
import { createUser } from './createUser'
import UserModal from './UserModal'

import { Menu, Popover } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';

const Navbar = () => {
    const didMountRef = useRef(false)
    const [current, setCurrent] = useState(null)
    const { currentUser, setCurrentUser, setUsers } = useContext(Context)

    function syncUsers() {
        getUsers(users => {
            console.log('Fetched users', users)
            // sellers.map(seller => {
            //     if(!users.find(user => seller.username === user.username)) {
            //         console.log('Creating user', seller.username)
            //         createUser(seller)
            //     }
            // })
            setUsers(users)
            setCurrentUser(sellers[0])
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
            <Menu theme="dark" selectedKeys={[current]} mode="horizontal" style={{ height: '64px', textAlign: 'right' }}>
                <a href='/'>
                    <Menu.Item key="home" style={{ height: '64px', paddingTop: '12px', float: 'left', fontSize: '22px' }}>
                        Marketplace
                    </Menu.Item>
                </a>
                
                <Menu.Item key="mail" icon={<MessageOutlined />} style={{ height: '64px', paddingTop: '10px' }}>
                    <a href='/chats'>
                        My Chats
                    </a>
                </Menu.Item>
                
                <Menu.Item key="app" icon={<UserOutlined />} style={{ height: '64px', paddingTop: '10px' }}>
                    <Popover 
                        placement="bottomRight" 
                        title={null} 
                        trigger="click"
                        content={<UserModal />}
                    >
                        {currentUser.first_name} {currentUser.last_name}
                    </Popover>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default Navbar;
