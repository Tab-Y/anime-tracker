// to get to this folder   /api/discovery/
const router = require('express').Router();
const { Main, TagId, Tags, Users } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  res.render('login', { 

  });
  });

  module.exports = router;
