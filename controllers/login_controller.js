const fs = require('fs');
const path = require('path')


function loginController(req, res) {
    console.log(req.body);
    const credentials = req.body;
    if (databaseContainsUsername(credentials.username)) {
        res.send("thank you");
    }
    else {
        //redirect the user to the main page
        res.send("fuck you");
    }
}

function databaseContainsUsername(username) {

    const data = (fs.readFileSync(path.join('users.json')));
    const users = JSON.parse(data).users;
    console.log(users);
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            return true;

        }
    }
    return false;
}

module.exports = loginController;