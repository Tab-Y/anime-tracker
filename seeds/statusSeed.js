// this is the status of users interation with the anime
const { Status } = require('../models');

// this data should remain static

const status = [
    {
        "status": "planned"
    },
    {
        "status": "watching"
    },
    {
        "status": "completed"
    },
    {
        "status": "dropped"
    }
]

const statusSeeds = () => Status.bulkCreate(status);

module.exports = statusSeeds;