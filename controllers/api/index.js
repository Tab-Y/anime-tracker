const router = require('express').Router();
const profileRoutes = require('./profile-routes');
const logInRoutes = require('./log-in-routes');
const signUpRoutes = require('./sign-up-routes');
const favoritesRoutes = require('./favorites-routes');
const discoveryRoutes = require('./discovery-routes');



router.use('/profile', profileRoutes);
router.use('/login', logInRoutes);
router.use('/signup', signUpRoutes);
router.use('/favorites', favoritesRoutes);
router.use('/discovery', discoveryRoutes);


module.exports = router;
