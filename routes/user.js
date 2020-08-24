//FILENAME : user.js

const express = require("express");
const {check, validationResult} = require("express-validator/check");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../model/User");

/**
 * @method - POST
 * @PARAM - User Signup
 */

 router.post (
     [
         check("username", "Please Enter a Valid Username")
         .not()
         .isEmpty(),
         chec("email", "Please enter a alid email").isEmail(),
         check("password", "Please enter a valid password").length({
             min:6
         })
     ],
     async (req, res) => {
        const errors =  validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json ({
                errors: errors.array()
            });
        }

    const {
        username,
        email,
        password
    } = req.body;
    try {
        let user = await User.findOne ({
            email
        });
        if (user) {
            return res.status(400).json({

            });
        }
        user = new User({
            username,
            email,
            password
        });

        const salt =  await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(pasword, salt);

        await user.save();
        
        const payload = {
            user: {
                id: user.id 
            }
        };

        jwt.sign(
            payload,
            "randomString", {
                expiresIn: 1000
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }                            
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving")
    }
}
 );