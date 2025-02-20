import express, { urlencoded } from "express"
import { PORT } from "./config/env.js"

import subscriptionRouter from "./routes/subscription.route.js"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/auth.user.js"
import connectToDatabase from "./database/mongodb.js"
import errorMiddleware from "./middleware/error.middleware.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json());
app.use(express.urlencoded({default: false}));
app.use(cookieParser())

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('server is working')
})

app.listen(PORT, () => {
    console.log(`subscription tracker API is running ${PORT}`)
    //when app is listened we will call the database
    connectToDatabase();
})

export default app;