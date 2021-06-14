import React, { useState, createContext } from 'react'

export const Context = createContext()

export const ContextProvider = props => {
    const [currentUser, setCurrentUser] = useState({})

    const value = {
        currentUser, setCurrentUser
    }

    return (
        <Context.Provider value={value}>
            { currentUser && props.children }
        </Context.Provider>
    )
}