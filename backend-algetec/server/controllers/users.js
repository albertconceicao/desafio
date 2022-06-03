const User = require("../models/users");

module.exports = (app) => {
    app.post('/user', (req, res) => {
        const returnForm = req.body;
        User.createUser(returnForm)
        .then((data) => res.status(200).json(data))
        .catch((erro) => res.status(400).json(erro));
    })
}