const Main = require('./Main');
const Tags = require('./Tags');
const Users = require('./Users');

// User.hasMany(Favorites, {  ...   })
// User.hasMany(Watching, {   ...   })
// User.hasMany(CurrentlyWatching {  ...  })
// User.hasMany(Completed, { ... })

Main.hasMany(Tags, {
    foreignKey: 'tags'
});

module.exports = { Main, Tags, Users }