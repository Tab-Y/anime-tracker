const Main = require('./Main');
const Tags = require('./Tags');
const Users = require('./Users');

// User.hasMany(Favorites, {  ...   })
// User.hasMany(Watching, {   ...   })
// User.hasMany(CurrentlyWatching {  ...  })
// User.hasMany(Completed, { ... })



module.exports = { Main, Tags, Users }