import express from "express"
import { PORT } from "./config/env.js"

import subscriptionRouter from "./routes/subscription.route.js"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/auth.user.js"

const app = express()


app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

app.get('/', (req, res) => {
    res.send('server is working')
})

app.listen(PORT, () => {
    console.log(`subscription tracker API is running ${PORT}`)
})

export default app;