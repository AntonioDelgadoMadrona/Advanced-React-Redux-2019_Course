const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser() {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: User.id, iat: timestamp }, config.secret);
};

exports.signup = function (req, res, next) {

    console.log(req);
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password' });
    }

    // See if a user with th given email exists
    User.findOne({ email: email }, function (err, existingUser) {
        if (err) return next(err);

        // If a user with email does exist, create and save user record
        if (existingUser) return res.status(422).send({ error: 'Email is in use' });

        // If a user with email does NOT exist, create and save user record
        const user = new User({
            email: email,
            password: password
        });

        user.save(function (err) {
            if (err) return next(err);

            // Repond to request indicating the user was created
            res.json({ token: tokenForUser(user) });

        });

    });



};