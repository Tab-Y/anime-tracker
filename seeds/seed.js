const sequelize = require('../config/connection');
const { Tags, Main, Users } = require('../models');
const tagSeeds = require('./tags.JSON');
const mainSeeds = require('./title.JSON');
const userSeeds =require('./userSeed.JSON');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await Users.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });

  await Tags.bulkCreate(tagSeeds, {
    individualHooks: true,
    returning: true,
  });

  await Main.bulkCreate(mainSeeds, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();
