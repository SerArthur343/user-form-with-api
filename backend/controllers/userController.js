const User = require("../models/userSchema");



const createUser = async(req, res) => {

    console.log("POST /users geldi");
    console.log(req.body);

    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    }  catch (err) {
        res.status(500).json({ err: err.message });
    }
    
}

module.exports = createUser;