const sequelize = require('../config/connection');
const { Tags, Main, Users, TagId } = require('../models');
const tagIdSeed = require('./tagId');
const tagSeeds = require('./tags');
const mainSeeds = require('./title');
const userSeeds = require('./userSeed');



const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await userSeeds();
  await mainSeeds();
  await tagSeeds();
  await tagIdSeed();
  


  process.exit(0);
};

seedAll();
