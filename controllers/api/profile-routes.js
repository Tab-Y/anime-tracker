// to get to this folder   /api/profile/
const router = require('express').Router();
const { Main, TagId, Tags, Users, UserFavorite, Status } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  console.log(req.session.user_id)
  try {
    // Find the logged in user based on the session ID
    const userData = await Users.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });
    const thisFavs = await UserFavorite.findAll({
      where: {
        userId: user.id
      }
    });

    const thisUsersFavs = thisFavs.map((data) => data.get({ plain: true }));
    console.log(thisFavs)

    console.log(user.id)
    res.render('profile', {
      ...user,
      ...thisUsersFavs,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
  
  
  module.exports = router;