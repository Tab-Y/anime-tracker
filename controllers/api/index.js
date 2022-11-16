const router = require('express').Router();
const favoritesRoutes = require('./favorites-routes');
const discoverRoutes = require('./discover-routes');
const userRoutes = require('./user-routes');

router.use('/favorites', favoritesRoutes);
router.use('/discover', discoverRoutes);      
router.use('/user', userRoutes);


module.exports = router;
