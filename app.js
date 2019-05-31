require("./config/config")
require("./db/mongoose")

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

var app = express()
app.use(bodyParser.json())
app.use(cors())


