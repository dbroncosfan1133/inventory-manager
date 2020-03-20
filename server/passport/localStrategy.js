// Require necessary dependencies for localStrategy
const User = require('../db/models/user');
const LocalStrategy = require('passport-local').Strategy;

const Strategy = new LocalStrategy({
        usernameField: 'username' // This is the default
    },
    function (username, password, done) {
        User.findOne({
            'local.username': username
        }, (err, userMatch) => {
            if (err) {
                return done(err);
            }
            if (!userMatch) {
                return done(null, false, {
                    message: 'Incorrect username'
                });
            }
            if (!userMatch.checkPassword(password)) {
                return done(null, false {
                    message: 'Incorrect password'
                });
            }
            return done(null, userMatch);
        });
    }
);

// Export the module
module.exports = Strategy;