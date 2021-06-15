import React, { useContext } from 'react'

import Navbar from '../Navbar'

import { ChatEngine } from 'react-chat-engine'

import { projectID } from '../data'
import { Context } from '../data/context'

const ChatsPage = () => {    
    const { currentUser } = useContext(Context)
    
    return (
        <div>
            <Navbar />

            {   // You need the creds correct before rendering Chat Engine
                currentUser.username && currentUser.secret &&
                <ChatEngine 
                    height='calc(100vh - 104px)'
                    projectID={projectID}
                    userName={currentUser.username}
                    userSecret={currentUser.secret}
                />
            }
        </div>
    );
}

export default ChatsPage;
