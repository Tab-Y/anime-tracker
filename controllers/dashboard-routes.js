// logged in features
// favorites
// wacthing
// completed
// user specific pages
// uses withauth to proceed past
const router = require('express').Router();
const { Main, TagId, Tags, Users } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
      const postData = await Post.findAll({
          where: {
              user_id: req.session.user_id        // renders posts by this user
          },
          include: [ { model: User } ]
      });

      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('profile', {                   // renders user profile handlebar
          posts,
          loggedIn: req.session.loggedIn
      });
  } catch (err) {
      res.status(500).json(err);
  }
});


  module.exports = router;