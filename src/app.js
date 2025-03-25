import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()


app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true, // Allow cookies to be sent
    methods: ["GET", "POST", "PUT", "DELETE"], // Explicitly allow methods

  })
);

app.use(express.json({ limit: '16kb' }))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

import authRoutes from './Routes/Auth.route.js'

app.use('/api/v1/users',authRoutes)

export default app
