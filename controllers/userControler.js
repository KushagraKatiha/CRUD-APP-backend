const userModel = require('../model/user.model.js')

exports.homeResponse=(req, res)=>{
    res.send("<h1>Home Page Response</h1>")
}

// CREATE USER USING USER MODEL

exports.createuser= async (req, res)=>{
    
    try {
        const {name, email} = req.body

        if(!name || !email){
            throw new Error('Name and Email are required')
        }

        const userExists = await userModel.findOne({email})

        if(userExists){
            throw new Error('User already exists')
        }

        const newUser = await userModel.create({
            name, 
            email
        })

        res.status(200).json({
            success: true, 
            message: 'User created successfully'
        })


    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            message: error.message  
        })
    }

}