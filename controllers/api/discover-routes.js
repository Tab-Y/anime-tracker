// to get to this folder   /api/discovery/
const router = require('express').Router();
const { Main, TagId, Tags, Users, UserFavorite, Status } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

  const aniList = [
    "Chainsaw Man",
    "Mob Psycho 100 III",
    "The Eminence in Shadow: Kagejitsu",
    "Tensei shitara Ken Deshita",
    "Do It Yourself!!",
    "One Piece",
    "Spy x Family Part 2",
    "Bleach: Sennen Kessen-hen",
    "Renai Flops",
    "Blue Lock"
  ]

  try {
    const formattedData = [];

    for (let i = 0; i < aniList.length; i++) {
      const aName = aniList[i];

      // string formatting to make it work properly w/o bugs

      const newData = await Main.findOne({
        where: {
          title: aName
        }
      });

      formattedData.push(newData);
    }

    const anime = formattedData.map((data) => data.get({ plain: true }));
    const aniLen = aniList.length;

    res.render('discover', { 
      anime,
      aniLen,
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

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
