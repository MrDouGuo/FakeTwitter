const mongoose = require("mongoose")

var FollowerSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    list: [
        {
            userid: {
                type: mongoose.Types.ObjectId,
                required: true
            }
        }
    ]
})

module.exports = {
    Follower: mongoose.model("Follower", FollowerSchema),
    Following: mongoose.model("Following", FollowerSchema)
}