const fs = require('fs');
const path = require('path')


function loginController(req, res) {
    console.log(req.body);
    const credentials = req.body;
    if (databaseContainsUsername(credentials.username)) {
        res.send("fuck you");
    }
    else {
        //redirect the user to the main page
        res.send("thank you")
    }
}

function databaseContainsUsername(username) {

    const data = fs.readFileSync(path.join('users.json'));
    const users = JSON.parse(data);
    for (const user in users) {
        if (user.username === username)
            return true;
    }
    return false;
}

module.exports = loginController;