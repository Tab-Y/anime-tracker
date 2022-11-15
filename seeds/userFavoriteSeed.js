const { UserFavorite } = require('../models')

const userData = [
    {
        "userId": "1",
        "favoriteTitleId": "1"
    },
    {
        "userId": "1",
        "favoriteTitleId": "2"
    },
    {
        "userId": "1",
        "favoriteTitleId": "3"
    },
]

const favSeeds = () => UserFavorite.bulkCreate(userData);

module.exports = favSeeds;