const router = require('express').Router();
const favoritesRoutes = require('./favorites-routes');
const discoveryRoutes = require('./discovery-routes');
const userRoutes = require('./user-routes');

router.use('/favorites', favoritesRoutes);
router.use('/discovery', discoveryRoutes);      
router.use('/user', userRoutes);


module.exports = router;
