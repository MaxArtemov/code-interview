import app from './app'

app.listen(process.env.PORT, () => {
    console.info(`App started on port ${process.env.PORT}`)
})