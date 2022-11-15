const { UserFavorite } = require('../models')

const userData = [
    {
        "userId": "1",
        "favoriteTitleId": "1",
        "status": "2"
    },
    {
        "userId": "1",
        "favoriteTitleId": "2",
        "status": "4"
    },
    {
        "userId": "1",
        "favoriteTitleId": "3",
        "status": "1"
    },
]

const favSeeds = () => UserFavorite.bulkCreate(userData);

module.exports = favSeeds;