const Main = require('./Main');
const Tags = require('./Tags');
const Users = require('./Users');
const TagId = require('./TagId');


// User.hasMany(Favorites, {  ...   })
// User.hasMany(Watching, {   ...   })
// User.hasMany(CurrentlyWatching {  ...  })
// User.hasMany(Completed, { ... })

Tags.belongsToMany(Main, {
    through: {
        model: TagId,
        unique: false
    },
    foreignkey: 'tags_id',
});

Main.belongsToMany(Tags, {
    through: {
        model: TagId,
        unique: false
    },
    foreignkey: 'title_id',
});

module.exports = { Main, Tags, Users, TagId }