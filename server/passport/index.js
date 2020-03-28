// Require in necessary dependencies for setting up passport
// Create the local strategy using passport-local
const LocalStrategy = require('passport-local').Strategy;
// Require in bcrypt
const bcrypt = require('bcryptjs');
// Bring in the user model
const User = require('../db/models/user');

// Set up module.exports
module.exports = function (passport) {
    passport.use(
        new LocalStrategy({
            usernameField: 'email'
        }, (email, password, done) => {
            // Match User
            User.findOne({
                    email: email
                })
                .then(user => {
                    // If the user is not there do the following
                    if (!user) {
                        return done(null, false, { // <-- return null for the error, false for the user
                            message: 'The email you entered is not registered '
                        });
                    }

                    // Match the password using bcrypt
                    bcrypt.compare(password, user.password, (error, isMatch) => { // <-- This is coming from the database (hashed password)
                        if (error) throw error;

                        if (isMatch) { // <-- if isMatch is true that means it passed the validation
                            return done(null, user); // <-- return null for the error and user for the user (pass in the user)
                        } else {
                            return done(null, false, {
                                message: 'The password is incorrect '
                            });
                        }
                    });
                })
                .catch(error => console.log(error));
        })
    );

    // Pulled from sesssions in passport documentation
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}