// Require in necessary dependencies for setting up passport
const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const GoogleStrategy = require('./googleStrategy');
const User = require('../db/models/user');

// Serialize the user
passport.serializeUser((user, done) => {
    console.log('=== Serialize ... called ===')
    console.log(user); // The entire user object
    console.log('-----------');
    done(null, {
        _id: user._id
    });
});

// Deserialize the user
passport.deserializeUser((id, done) => {
    console.log('Deserialize ... called')
    User.findOne({
            _id: id
        },
        'firstName lastName photos local.username',
        (err, user) => {
            console.log('=============== Deserialize user called =============== ');
            console.log(user);
            console.log('-----------------');
            done(null, user);
        }
    );
});

// Register the Strategies
passport.use(LocalStrategy);
passport.use(GoogleStrategy);

module.exports = passport;