var mongoose = require("mongoose")
const {db} = process.env

mongoose.Promise = global.Promise

mongoose.connect(db, {
    useNewUrlParser: true
})

module.exports = mongoose
