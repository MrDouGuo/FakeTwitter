const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")

var UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },

        email:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate: {
                validator: validator.isEmail,
                message: "email invalid"
            }
        },

        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 6
        },

        tokens: [
            {
                token: {
                    type: String,
                    required: true
                }
            }
        ]
    }
)

UserSchema.pre("save", function{
    const user = this
    if(user.isModified("password")){
        bcrypt.genSalt(10, (err, salt) {
            if(err) console.log(err)
            bcrypt.hash(user.password, salt, (err, hash)=>{
                if(err) console.log(err)
                user.password = hash
            })
        })
    }
})

UserSchema.statics.validate = async function(account){
    const{
        username,
        email,
        password
    } = account
 
    const User = this
    const info = {}
    if(username) info.username = username
    else if(email) info.email = email
    else return Promise.reject("info invalid")
    const user = await User.findOne(info).catch(err => {
        console.log(err)
    })
    if(!user) return Promise.reject("user not found")
    return bcrypt.compare(password, user.password) //boolean

    /*
    const User = this
    var user
    try{
        if(username){
             user = await User.findOne({username})
        }
        else if(email){
             email = await User.findOne({email})
        }
        else{
            return null
        }
    }
    catch(err){
        console.log(err)
        return null
    }
    */
}





module.exports = mongoose.model("User", UserSchema)
