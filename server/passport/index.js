// Require in necessary dependencies for setting up passport
const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('./localStrategy');
// const GoogleStrategy = require('./googleStrategy');
// Bring in the user model
const User = require('../db/models/user');

// // Serialize the user
// passport.serializeUser((user, done) => {
//     console.log('=== Serialize ... called ===')
//     console.log(user); // The entire user object
//     console.log('-----------');
//     done(null, {
//         _id: user._id
//     });
// });

// // Deserialize the user
// passport.deserializeUser((id, done) => {
//     console.log('Deserialize ... called')
//     User.findOne({
//             _id: id
//         },
//         'firstName lastName photos local.username',
//         (err, user) => {
//             console.log('=============== Deserialize user called =============== ');
//             console.log(user);
//             console.log('-----------------');
//             done(null, user);
//         }
//     );
// });

// Register the Strategies
// passport.use(LocalStrategy);
// passport.use(GoogleStrategy);

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