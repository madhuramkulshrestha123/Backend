import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "100kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes
import userRouter from './routes/user.routes.js'
import videoRouter from './routes/vedio.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import { Playlist } from "./models/playlist.models.js"

//routes declaration
app.use("/api/v1/users",userRouter)   //Instead of ".get" we use ".use" when routes are imported
app.use("/api/v1/videos",videoRouter)
app.use("/api/v1/subscription",subscriptionRouter)

app.use('/api/v1/playlists', playlistRouter)
export { app }