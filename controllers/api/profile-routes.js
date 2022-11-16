// to get to this folder   /api/profile/
const router = require('express').Router();
const { Main, TagId, Tags, Users, UserFavorite, Status } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  res.render('profile', { 

  });
  });

  module.exports = router;