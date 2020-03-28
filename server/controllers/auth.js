// Module exports object <-- This makes it so you can't vist the dashboard/leaderboard page without first registering and or logging in
module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Please log in to view that resource');
        res.redirect(''); // <-- Need to figure out the redirect path
    },
    forwardAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.redirect(''); // <-- Need to figure out the redirect path
    }
};