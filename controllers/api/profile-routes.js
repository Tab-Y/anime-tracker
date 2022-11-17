// to get to this folder   /api/profile/
const router = require('express').Router();
const { Main, TagId, Tags, Users, UserFavorite, Status } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
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

    res.render('profile', {
      ...user,
      ...thisUsersFavs,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/favorites/:id', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await Users.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });
    const thisFavs = await UserFavorite.findByPk(req.params.id, {
      where: {
        userId: user.id
      }
    });

    const thisUsersFavs = thisFavs.map((data) => data.get({ plain: true }));

    res.render('profile', {
      ...user,
      ...thisUsersFavs,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/favorites', withAuth, async (req, res) => {
  try {
    const createNewFav = await UserFavorite.create(req.body, {
      userId: req.session.user_id,
      ...req.body,
    });
    res.status(200).json(createNewFav)
  } catch (err) {
    res.status(400).json(err);
  }
})

router.delete('/favorites/:id', withAuth, async (req, res) => {      // deletes favs by id (and userId)
  try {
    const favDelete = await UserFavorite.destroy({
      where: {
        id: req.params.id,              // form select UUID (for the db) linked to that favorite
        userId: req.session.user_id,
      },
    });
    if (!favDelete) {
      res.status(404).json({ message: "Sorry, there was not favorite found with this id." })
    }
    res.status(200).json(favDelete);
  } catch (err) {
    res.status(500).json(err)
  }
});
  
  module.exports = router;