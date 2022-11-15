const router = require('express').Router();
const favoritesRoutes = require('./favorites-routes');
const discoveryRoutes = require('./discovery-routes');

router.use('/favorites', favoritesRoutes);
router.use('/discovery', discoveryRoutes);


module.exports = router;
