const User = require('../models/User')

module.exports.register = async (req, res) => {
    try {
        
        console.log("🚀 ~ register here: ", req.body)

        const {email, username, password} = req.body;

        if (!email || !username || !password ) {
            res.send({success: false, error: 'validation failed'})

            return
        }

        const userCreated = await User.create( req.body)
        console.log("🚀 ~ userCreated", userCreated)
        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in register", error.message)

        res.send({success: false, error: error.message})
        
    }
}
module.exports.login = async (req, res) => {

    try {
        
        console.log("🚀 ~ login here: ")

        const {email, username, password} = req.body // emailOrUser, password

        if ((!email && !username ) || !password) { // !emailOrUser || !password
            res.send({success: false, error: 1})
            return
        }

        const userFound = await User.find({
            $or: [{username: username}, {email: email}], //$or: [{username: emailOrUser}, {email: emailOrUser}]
            password: password
        }).select('-__v -password')
        console.log("🚀 ~ userFound", userFound)

        if (!userFound.length) {
            res.send({success: false, error: 2})
            return
        }
        res.send({success: true, user: userFound[0]})
    } catch (error) {
    
        console.log("🚀 ~ Error in Login users", error.message)

        res.send({success: false, error: error.message})
        
    }
}