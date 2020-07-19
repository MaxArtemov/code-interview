import axios from 'axios'

const baseAddress = `localhost:${process.env.PORT}`
const instance = axios.create({ baseURL: 'http://localhost:3535/' })

export const channels = Object.freeze({
    NEW_APPOINTMENT: 'newAppointments',
    ADD_PROVIDER: 'addProvider',
    DELETE_PROVIDER: 'deleteProvider'
})

export const subscriberRoutes = Object.freeze({
    ADD_PROVIDER: `${baseAddress}/providers/add`,
    DELETE_PROVIDER: `${baseAddress}/providers/delete`
})

export const publish = (channel, message) => instance.post(`publish`,{ channel, ...message })

const subscribe = (channel, address) => instance.post(`subscribe`,{ channel, address })
const subs = [
    subscribe(channels.ADD_PROVIDER, subscriberRoutes.ADD_PROVIDER), 
    subscribe(channels.DELETE_PROVIDER, subscriberRoutes.DELETE_PROVIDER)
]
export const subscribeChannels = async () => {
    return Promise.all(subs)
}