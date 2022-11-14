const sequelize = require('../config/connection');
const { Tags, Main, Users } = require('../models');
const tagSeeds = require('./tags');
const mainSeeds = require('./title');
const userSeeds =require('./userSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await userSeeds();
  await tagSeeds();

  await mainSeeds();


  process.exit(0);
};

seedAll();
