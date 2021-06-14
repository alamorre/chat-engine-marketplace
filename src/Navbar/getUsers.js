import axios from 'axios'

export const getUsers = (successFunc) => {
    axios.get(
        `https://api.chatengine.io/users/`,
        { headers: { "Private-Key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY } }
    )

    .then((response) => {
        successFunc(response.data)
    })

    .catch((error) => {
        console.log('Create chat user', error.response)
    })
}