module.exports = {
    checkIfAuthorized: function (req, res, next) {
        if (!req.user) {
            // If the user is not authenticated, redirect them to the login page with an error message
            res.redirect('/login');
            return;
        }

        if (req.user.role === 'Admin' || req.user.role === 'Member')
            next();
    },

    isAdmin: function (req, res, next) {
        if (req.user.role === 'Admin') {
            next();
            return;
        } else {
            res.locals.message = 'You are not authorized to access this page.';
            res.render('index', {title: 'Express', user: req.user, message: res.locals.message});
            res.redirect('/')
            return;
        }
    },

    canAdopt: function (req, res, next) {
        if (req.user.role === 'Member') {
            next();
            return;
        } else {
            res.status(401).send({error: 'You are not authorized to access this page.'});
        }
    }
};
