// logged in features
// favorites
// wacthing
// completed
// user specific pages
// uses withauth to proceed past
const router = require('express').Router();
const { Main, TagId, Tags, Users, UserFavorite, Status } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    console.log("req.session")
  try {
      const userData = await Users.findAll({
          where: {
              user_id: req.session.user_id        // renders posts by this user
          },

      });

      const pulledUser = userData.map((data) => data.get({ plain: true }));

      res.render('profile', {                   // renders user profile handlebar
          pulledUser,
          loggedIn: req.session.loggedIn
      });
  } catch (err) {
      res.status(500).json(err);
  }
});


  module.exports = router;