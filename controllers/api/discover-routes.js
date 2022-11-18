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

    // Seasonal
    console.log(1);
    const seasonalData = await Main.findAll({});   
    const carouselSize = 16;
    let seasonalCurr = 0;

    console.log(2);
    const seasonalCarousel = [];
    for (let i = 0; i < seasonalData.length; i++){
      console.log(3.1);
      if (seasonalCurr >= carouselSize) {
        console.log(4.1);
        break;
      } else if (seasonalData[i].season === "FALL" && seasonalData[i].year === 2022){
        console.log(4.2);
        seasonalCarousel.push(seasonalData[i]);
        seasonalCurr++;
        console.log(seasonalCurr);
      }
      console.log(3.2);
    };
    console.log(5);

    const seasonalSpecial = seasonalCarousel.map((data) => data.get({ plain: true }));
    console.log(6);

    // Popular
    const userFav = await UserFavorite.findAll({})
    const popularCarousel = [];

    // DANGER DANGER
    const popArr = [];
    for(let x = 0; x < userFav.length; x++){
        popArr.push(userFav[x].favoriteTitleId);
    }
    // MAY BREAK, REFER TO LATER ^^^
    
    for (let i = 0; i < 8; i++) {
      popularCarousel.push(popArr[Math.floor(Math.random()*popArr.length)]);
    };

    const formattedData1 = [];
    
    for (let i = 0; i < popularCarousel.length; i++) {
      const obj = popularCarousel[i]
      // string formatting to make it work properly w/o bugs
      const newData = await Main.findOne({
        where: {
          id: obj
        }
      });
      console.log(newData)
        formattedData1.push(newData);
      
    }
    const popularSpecial = formattedData1.map((data) => data.get({ plain: true }));

    // Recommended
    const genreId = 81;
    const recData = await TagId.findAll({
      where: {
        tag_id: genreId
      },    
    });
    const recomendedCarousel = [];
    for(let j = 0; j < 8; j++){
      recomendedCarousel.push(recData[Math.floor(Math.random()*recData.length)])
    };

    const formattedData2 = [];   
    for (let i = 0; i < recomendedCarousel.length; i++) {
      const obj = recomendedCarousel[i].title_id
      // string formatting to make it work properly w/o bugs
      console.log(obj)
      const newData = await Main.findOne({
        where: {
          id: obj
        }
      });
    
      formattedData2.push(newData);
    }   
    const recommendedSpecial = formattedData2.map((data) => data.get({ plain: true }));

    res.render('discover', {
      anime,              // initial
      mini: [
        { data: seasonalSpecial, group: "Seasonal" },
        { data: popularSpecial, group: "Popular" },
        { data: recommendedSpecial, group: "Recommended" }
      ],
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

module.exports = router;
