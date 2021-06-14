import React, { Component } from 'react'

import { projectID, currentUser } from '../data'

import { getOrCreateChat } from './getOrCreateChat'

import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'

export default class Chat extends Component {
    state = {
        chat: null,
        headers: {
            'Project-ID': projectID,
            'User-Name': currentUser.username,
            'User-Secret': currentUser.secret,
        }
    }

    componentDidMount() {
        const data = {
            "usernames": [currentUser.username, this.props.seller.username],
            "is_direct_chat": true
        }
        getOrCreateChat(this.state.headers, data, chat => this.setState({ chat }))
    }

    render() {
        if (this.state.chat === null) return <div/>
        
        return (
            <div style={{ width: '100%' }}>
                <ChatEngineWrapper>
                    <Socket 
                        projectID={this.state.headers['Project-ID']}
                        userName={this.state.headers['User-Name']}
                        userSecret={this.state.headers['User-Secret']}
                    />

                    <ChatFeed activeChat={this.state.chat.id} />
                </ChatEngineWrapper>
            </div>
        )
    }
}
