// to get to this folder   /api/discovery/
const router = require('express').Router();
const { Main, TagId, Tags, Users, UserFavorite, Status } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  res.render('discover', { 
    css: [
      "shape",
      "discover",
      "colCarousel"
    ],
    group: [
      "Seasonal",
      "Popular",
      "Recommended"
    ]
  });
});

module.exports = router;
