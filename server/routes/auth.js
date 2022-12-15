const router = require("express").Router()
const User = require('../models/User')



router.get("/login", (req, res) =>{
return res.json("Login")
})



router.post('/register',async (req, res) => {
  
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
    })
module.export = router