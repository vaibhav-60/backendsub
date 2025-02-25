import express, { urlencoded } from "express"
import { PORT } from "./config/env.js"

import subscriptionRouter from "./routes/subscription.route.js"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/auth.user.js"
import connectToDatabase from "./database/mongodb.js"
import errorMiddleware from "./middleware/error.middleware.js"
import cookieParser from "cookie-parser"
import arcjetMiddleware from "./middleware/arcjet.middleware.js"

const app = express()

app.use(express.json());
app.use(express.urlencoded({default: false}));
app.use(cookieParser())
app.use(arcjetMiddleware)

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2JkYWMzNTJlODU4NmIxZDE3NGMwOWQiLCJpYXQiOjE3NDA0ODQ2NTQsImV4cCI6MTc0MDU3MTA1NH0.CKKqwLozESuOvCul8pyJRdG4STKMvPnmWquB6hP7xSw


app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('server is working')
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`subscription tracker API is running ${PORT}`)
    //when app is listened we will call the database
    connectToDatabase();
})

export default app;