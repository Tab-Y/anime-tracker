// this is the seeds for the table users in the anime_db
const { Users } = require('../models'); 


// data should be in the format of 
// {"username": "<--input-->",          -- this input should come from the front end fetch to sign up, and identify users on the dashboard
// "password": "<--input-->",           -- this input should come from the front end fetch to either sign up or to log in
// "email": "<--input-->"}              -- this input should come from the front end fetch to either sign up or to log in

const userData = [
    {
        "username": "test1",
        "password": "password1234",
        "email": "test1@gmail.com"
    },
    {
        "username": "test2",
        "password": "password1234",
        "email": "test2@gmail.com"
    },
    {
        "username": "test3",
        "password": "password1234",
        "email": "test3@gmail.com"
    },
    {
        "username": "test4",
        "password": "password1234",
        "email": "test4@gmail.com"
    },
    {
        "username": "test5",
        "password": "password1234",
        "email": "test5@gmail.com"
    },
    {
        "username": "test6",
        "password": "password1234",
        "email": "test6@gmail.com"
    },
    {
        "username": "test7",
        "password": "password1234",
        "email": "test7@gmail.com"
    }
];

const userSeeds = () => Users.bulkCreate(userData);

module.exports = userSeeds;