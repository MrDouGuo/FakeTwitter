const mongoose = require("mongoose")
const validator = require("validator")

var ArticleSchema = new mongoose.Schema({

    userid: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    text: {
        type: String,
        required: true,
        minlength: 1
    },

    media: {
        type: String,
        validator: {
            validator: validator.isURL()
        }
    },

   parentid: {
        type: mongoose.Types.ObjectId
    },

    liked: [
        {
            userid: {
                type: mongoose.Types.ObjectId,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model("Article", ArticleSchema)