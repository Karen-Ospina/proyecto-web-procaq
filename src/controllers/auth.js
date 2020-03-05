module.exports = {
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/masterpage');
    },
    isNotLoggedIn(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/admin-mastercode');
    }
};