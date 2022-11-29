const path = require("path")//(when you add any file from html data form then you have to dicline that path)

const users = require("../models/users.model"); //(logical all work are working here controller section)

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html")); //(here we call index.html file from views folder )
};

exports.saveUser = (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const user = {
        name,
        age,
    };
    users.push(user)
    res.status(201).json({
        success: true,
        users,
    });

};