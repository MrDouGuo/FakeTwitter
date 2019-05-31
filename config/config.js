const config = require("./config.json")
const env = process.env.NODE_ENV || "dev"

Object.keys(config[env]).forEach(e => {
    process.env[e] = config[env][e]
})

