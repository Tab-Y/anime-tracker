// planned, watching, completed, dropped
const { Status } = require('../models');

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