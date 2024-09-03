import express from "express"

const app=express()
app.use(express.json())
//routes

import urlRouter from "../src/routes/url.routes.js"
app.use("/api/v1/url",urlRouter)
export {app}