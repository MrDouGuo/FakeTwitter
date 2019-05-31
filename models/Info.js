const mongoose = require("mongoose")

var InfoSchema = new mongoose.Schema({

    userid: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    nationality: {
        type: String,
        default: ""
    },

    birth: {
        type: String,
        default: ""
    },

    novice: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("Info", InfoSchema)