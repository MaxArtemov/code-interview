import app from './app'
import { subscribeChannels } from './services/pubsub'

app.listen(process.env.PORT, async () => {
    console.info(`App started on port ${process.env.PORT}`)
    try {
        await subscribeChannels()
        console.info(`subscribed channels`)
    } catch (e) {
        console.error('Error subscribing channels', e)
    }
})