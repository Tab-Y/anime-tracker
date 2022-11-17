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
      anime,              // initial
      aniLen,
      css: [
        "shape",
        "discover",
        "colCarousel"
      ],



    });
   
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/seasonal', async (req, res) => {
try {
  const animeData = await Main.findAll({});   

  const seasonalCarousel = [];                      // array of 8 id's where current season is listed
  for (i=0;i<animeData.length;i++){
    if(animeData[i].season === "WINTER"){
      seasonalCarousel.push(animeData[i])           // loops through list and pulls entry by the id
    }
  };

  const special = seasonalCarousel.map((data) => data.get({ plain: true }));

  console.log(special)

  res.render('discover', {
    special,
    css: [
      "shape",
      "discover",
      "colCarousel"
    ],
    group: "Seasonal",
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/popular', async (req, res) => {
  try {
    const userFav = await UserFavorite.findAll({})
    const popularCarousel = [];                       // array for where most favorited titles are
    for (i=0;i<8;i++) {
      const popArr = [];
      for(x=0;x<userFav.length;x++){
          popArr.push(userFav[x].favoriteTitleId)    // pulls id number from favs list
      }
      popularCarousel.push(popArr[Math.floor(Math.random()*popArr.length)])
    };

    const formattedData = [];
    
    for (let i = 0; i < popularCarousel.length; i++) {
      const obj = popularCarousel[i]
      // string formatting to make it work properly w/o bugs
      const newData = await Main.findOne({
        where: {
          id: obj
        }
      });
      console.log(newData)
        formattedData.push(newData);
      
    }
    const special = formattedData.map((data) => data.get({ plain: true }));



    res.render('discover', {
      special,
      css: [
        "shape",
        "discover",
        "colCarousel"
      ],
      group: "Popular",
    });
  } catch (err) {
    res.status(500).json(err);
  }
  });

  router.get('/recommended', withAuth, async (req, res) => {
    try {
      
      const genreId = 81;                               // future update to user input for their favorite genre/ keywords
      const recData = await TagId.findAll({
        where: {
          tag_id: genreId
        },

      });
      const recomendedCarousel = [];                   // array to match genre / keyword / tag
      for(j=0;j<8;j++){
        recomendedCarousel.push(recData[Math.floor(Math.random()*recData.length)])
      };
      
      const formattedData = [];

      for (let i = 0; i < recomendedCarousel.length; i++) {
        const obj = recomendedCarousel[i].title_id
        // string formatting to make it work properly w/o bugs
          console.log(obj)
        const newData = await Main.findOne({
          where: {
            id: obj
          }
        });
  
        formattedData.push(newData);
      }

      const special = formattedData.map((data) => data.get({ plain: true }));


      res.render('discover', {
        special,
        css: [
          "shape",
          "discover",
          "colCarousel"
        ],
        group: "Recommended",
      });
    } catch (err) {
      res.status(500).json(err);
    }
    });


module.exports = router;
