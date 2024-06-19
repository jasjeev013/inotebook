const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "JasjeevCreations";


//Create a user using post: POST "/api/auth/createuser"
router.post('/createuser', [
    //Validations
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    //Checking Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        //CHecking of user exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "This user exists." })
        }

        //Hashing Password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);

        //Adding user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        //Generating Token 
        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET); 

        //Sending User in request output
        res.json({authtoken})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }


})

module.exports = router;