const mongoose = require("mongoose")

var PreferenceSchema = new mongoose.Schema({

    userid: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    languege: {
        type : String,
        default: "en"
    },

    notification: {
        type: Boolean,
        default: true
    },

    private: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Preference", PreferenceSchema)