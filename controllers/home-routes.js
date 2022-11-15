const router = require('express').Router();
const { Main, TagId, Tags, Users, UserFavorite, Status } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // const tenTitles = await <the data we search for to render>

    // any type of funcation we need to get to page

    res.render('splash', {   // what  handlebar we are rendering
      // the data we are passing into the handlebar
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;