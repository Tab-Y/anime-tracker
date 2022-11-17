// to get to this folder   /api/updates
const router = require('express').Router();
const { Main, TagId, Tags, Users, UserFavorite, Status } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    res.render('update', {
  
    });
  });
  
  module.exports = router;