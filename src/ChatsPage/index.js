import React from 'react'

import Navbar from '../Navbar'

import { ChatEngine } from 'react-chat-engine'

import { currentUser, projectID } from '../data'

const ChatsPage = () => {    
    return (
        <div>
            <Navbar />

            <ChatEngine 
                height='calc(100vh - 104px)'
                projectID={projectID}
                userName={currentUser.username}
                userSecret={currentUser.secret}
            />
        </div>
    );
}

export default ChatsPage;
