// to get to this folder   /api/favorites/
const router = require('express').Router();
const { Main, TagId, Tags, Users, UserFavorite, Status } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  res.render('login', {

  });
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const favById = await UserFavorite.findByPk(req.params.id, {
      include: [
        { model: Main },
        // { model: Status },
        // { model: Tags },
        // { model: Users }
      ],
    });

    const animes = favById.get({ plain: true });

    res.render('single-post', {
      ...animes,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const favDelete = await UserFavorite.destroy({
      where: {
        id: req.params.id,              // form select UUID (for the db) linked to that favorite
        user_id: req.session.user_id,
      },
    });
    if (!favDelete) {
      res.status(404).json({ message: "Sorry, there was not post found with this id." })
    }
    res.status(200).json(favDelete);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;