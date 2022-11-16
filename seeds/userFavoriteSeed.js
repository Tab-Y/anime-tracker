// This is the seed data for the user favorites table
const { UserFavorite } = require('../models')


// data should be in the format of 
// {"userId": "<--input-->",                    -- this input should be provided after log-in has been verified and used to identify this users selections
// "favoriteTitleId": "<--input-->",            -- this input should be taken from the anime id that is ebing viewed or selected to be added
// "status": "<--input-->"}                     -- this input should be a response of a button / form input by the front end

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