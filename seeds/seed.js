const sequelize = require('../config/connection');
const { Tags, Main, Users, TagId, UserFavorite } = require('../models');
const tagIdSeed = require('./tagId');
const tagSeeds = require('./tags');
const mainSeeds = require('./title');
const userSeeds = require('./userSeed');
const favSeeds = require('./userFavoriteSeed');



const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await userSeeds();
  await mainSeeds();
  await tagSeeds();
  await tagIdSeed();
  await favSeeds();


  process.exit(0);
};

seedAll();
