import axios from 'axios'

export const createUser = (username, secret, successFunc) => {
    axios.post(
        `https://api.chatengine.io/users/`,
        { username: username, secret: secret },
        { headers: { "Private-Key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY } }
    )

    .then((response) => {
        successFunc(response.data)
    })

    .catch((error) => {
        console.log('Create chat user', error.response)
    })
}