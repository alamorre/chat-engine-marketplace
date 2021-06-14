import axios from 'axios'

export const getOrCreateChat = (headers, data, successFunc) => {
    axios.put(
        `https://api.chatengine.io/chats/`,
        data,
        { headers }
    )

    .then((response) => {
        successFunc(response.data)
    })

    .catch((error) => {
        console.log('Get or create chat error', error.response)
    })
}