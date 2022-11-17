const router = require('express').Router();
const favoritesRoutes = require('./favorites-routes');
const discoverRoutes = require('./discover-routes');
const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes');
const updatesRouter = require('./update-routes');

router.use('/favorites', favoritesRoutes);
router.use('/discover', discoverRoutes);      
router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/updates', updatesRouter);


module.exports = router;
