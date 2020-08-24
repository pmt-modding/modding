const { Router } = require("express");

/**
* @method -GET
* @DISCRIPTION - Get LogedIn User 
* @param - /user/me
*/
Router.get("/me", auth, async (req,res) => {
    try {
        const user= await user.findById(req.user.id);
        res.json(user);
    } catch(e) {
        res.send({ message: "Error in Fetching User"});
    }
});