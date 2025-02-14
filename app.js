import express from "express"
import { PORT } from "./config/env.js"

const app = express()

app.get('/', (req, res) => {
    res.send('server is working')
})

app.listen(PORT, () => {
    console.log(`subscription tracker API is running ${PORT}`)
})

export default app;