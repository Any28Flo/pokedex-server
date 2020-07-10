const express = require('express');
const router = express.Router();

router.post('/signin', async (req,res) =>{
    console.log("aca")
    console.log(req.body)
    try{
        const {name, password,email,avatar} = req.body.data;
        if(!name || !password || !email){

        }
    }catch (e) {
        console.log(e)
    }
})
router.get('/sw' , async (req, res) =>{

    try{
        //const { username, password, email, image} = req.body;
        console.log(req.body)
        //Validate actions
        /*if(!username || !password || !email){
            return res.status(400).json({msg: "Not all fields have been entered"});
        }
        if(password.length < 7){
            return res.status(400).json({msg : 'Make your password at least 8 characters long for security purposes.'});

        }
        const existingUser = await  User.findOne({username: username});
        if(existingUser) {
            return res
                .status(400)
                .json({msg: "Username taken. Choose another one."})
        }

        const newUser = new User({
            username :username,
            password:hashPass,
            email:email,
            image:image
        });

        const savedUser = await newUser.save();
        res.json({

            user:{
                id:savedUser._id,
                email: savedUser.email,
                username : savedUser.username
            }
        })
*/
    }catch (e) {
        res.status(500).json({e: e.message});
    }

});

module.exports = router;