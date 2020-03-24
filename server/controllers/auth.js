// Module exports object <-- This makes it so you can't vist the dashboard/leaderboard page without first registering and or logging in
module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'You will need to log in to view this page');
        res.redirect(''); // Need to find the right path for this redirect.
    }
}